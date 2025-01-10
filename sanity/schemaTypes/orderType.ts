import { BasketIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";
import { productoType } from "./productoType";

export const orderType = defineType({
  name: "order",
  title: "Ordem",
  type: "document",
  icon: BasketIcon,
  fields: [
    defineField({
      name: "orderNumber",
      title: "Numero del Ordem",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stripeCkeckoutSesionId",
      title: "Id de Sesion de Stripe Ckeckout",
      type: "string",
    }),
    defineField({
      name: "stripeCustomerId",
      title: "Id del Cliente Stripe",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "clerkUserId",
      title: "Id del Usuario de Clerk",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "customerName",
      title: "Nombre del Cliente ",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email del Cliente",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "stripePaymentIntentId",
      title: "Id de Intento de Pago en Stripe",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "productos",
      title: "Productos",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "producto",
              title: "Producto Comprado",
              type: "reference",
              to: { type: "producto" },
            }),
            defineField({
              name: "cantidad",
              title: "Cantidad",
              type: "number",
            }),
          ],
          preview: {
            select: {
              producto: "producto.nombre",
              cantidad: "cantidad",
              imagen: "producto.imagen",
              precio: "producto.precio",
              moneda: "producto.moneda",
            },
            prepare(select) {
              return {
                title: `${select.producto} x ${select.cantidad}`,
                subtitle: `${select.precio * select.cantidad}`,
                media: select.imagen,
              };
            },
          },
        }),
      ],
    }),
    defineField({
      name: "totalPrice",
      title: "Precio Total",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "currency",
      title: "Moneda",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "amountDiscount",
      title: "Descuento",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "status",
      title: "Estado del Orden",
      type: "string",
      options: {
        list: [
          { title: "Pendiente", value: "pending" },
          { title: "Pago", value: "paid" },
          { title: "Enviado", value: "sent" },
          { title: "Entregado", value: "delivered" },
          { title: "Cancelado", value: "canceled" },
        ],
      },
    }),
    defineField({
      name: "orderDate",
      title: "Fecha del Orden",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      name: "customerName",
      amount: "totalPrice",
      currency: "currency",
      orderId: "orderNumber",
      email: "email",
    },
    prepare(select) {
      const ordeIdSnippet = `${select.orderId.slice(0, 5)}...${select.orderId.slice(-5)}`;
      return {
        title: `${select.name} (${ordeIdSnippet})`,
        subtitle: `${select.currency} ${select.amount},  ${select.email}`,
        media: BasketIcon,
      };
    },
  },
});
