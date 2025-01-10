"use server";

import stripe from "@/lib/stripe";
import { urlImagen } from "@/lib/urlImagen";
import { ItemCarrito } from "@/tienda/tienda";

export type Metadata = {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  clerkUserId: string;
};

export type ItemsCarrinhoAgrupados = {
  producto: ItemCarrito["producto"];
  cantidad: number;
};

export async function crearSesionCompra(
  items: ItemsCarrinhoAgrupados[],
  metadata: Metadata
) {
  try {
    // verifica si algun item del grupo no tiene precio
    const itemsSinPrecio = items.filter((item) => !item.producto.precio);
    if (itemsSinPrecio.length > 0) {
      throw new Error("Uno o más items no tienen precio");
    }

    // busca en cliente  a través de su email
    const customers = await stripe.customers.list({
      email: metadata.customerEmail,
      limit: 1,
    });

    // setea el customerId con el id encontrado en la busqueda de stripe
    let customerId: string | undefined;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    }
    const baseUrl =
      process.env.NODE_ENV === "production"
        ? `https://${process.env.VERCEL_URL}`
        : `${process.env.NEXT_PUBLIC_BASE_URL}`;

    const successUrl = `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}&orderNumber=${metadata.orderNumber}`;
    const cancelUrl = `${baseUrl}/carrito`;

    /*console.log("url de sucesso: ", successUrl);
    console.log("url para cancelar: ", cancelUrl);*/

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_creation: customerId ? undefined : "always",
      customer_email: !customerId ? metadata.customerEmail : undefined,
      metadata,
      mode: "payment",
      allow_promotion_codes: true,
      success_url: successUrl,
      cancel_url: cancelUrl,
      line_items: items.map((item) => ({
        price_data: {
          currency: "ars",
          unit_amount: Math.round(item.producto.precio! * 100),
          product_data: {
            name: item.producto.nombre || "Producto sin nombre",
            description: `Producto ID: $(item.producto._id)`,
            metadata: {
              id: item.producto._id,
            },
            images: item.producto.imagen
              ? [urlImagen(item.producto.imagen).url()]
              : undefined,
          },
        },
        quantity: item.cantidad,
      })),
    });

    return session.url;
  } catch (error) {
    console.error("Error creando la sesion de compra: ", error);
    throw error;
  }
}
