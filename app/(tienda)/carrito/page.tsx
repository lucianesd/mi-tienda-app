"use client";
import { crearSesionCompra } from "@/actions/crearSesionCompra";
import BotonAgregarCarrito from "@/components/ui/BotonAgregarCarrito";
import Loader from "@/components/ui/Loader";
import { urlImagen } from "@/lib/urlImagen";
import useCarritoCompras from "@/tienda/tienda";
import { SignInButton, useAuth, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export type Metadata = {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  clerkUserId: string;
};

function CarritoPage() {
  const grupoItems = useCarritoCompras((estado) =>
    estado.obtenerItemsAgrupados()
  );
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();

  const [esCliente, setEsCLient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const disabled = false;

  useEffect(() => {
    setEsCLient(true);
  }, []);
  if (!esCliente) {
    return <Loader />;
  }
  if (grupoItems.length === 0) {
    return (
      <div
        className="container mx-auto p-4 flex flex-col items-center 
        justify-center min-h-[50vh]"
      >
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Su Carrito de Compras.
        </h1>
        <p className="text-gray-600 text-lg"> Su carrito está vacio.</p>
      </div>
    );
  }

  const handleCheckout = async () => {
    if (!isSignedIn) return;
    setIsLoading(true);
    try {
      const metadata: Metadata = {
        orderNumber: crypto.randomUUID(), // ejemplo 1kfasf-f25os4-faf7as-lger09
        customerName: user?.fullName ?? "Indefinido",
        customerEmail: user?.emailAddresses[0].emailAddress ?? "Indefinido",
        clerkUserId: user!.id,
      };

      //setea la url de la compra
      const urlCompra = await crearSesionCompra(grupoItems, metadata);
      if (urlCompra) {
        window.location.href = urlCompra;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Su Carrito de Compras
      </h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow">
          {grupoItems?.map((item) => (
            <div
              key={item.producto._id}
              className="mb-4 p-4 border rounded flex items-center justify-between"
            >
              <div
                className="flex items-center cursor-pointer flex-1 min-w-0"
                onClick={() => router.push(`/producto/${item.producto.alias}`)}
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 mr-4">
                  {item.producto.imagen && (
                    <Image
                      src={urlImagen(item.producto.imagen).url()}
                      alt={item.producto.nombre ?? "Imagen del Producto"}
                      className="w-full h-full object-cover rounded"
                      width={96}
                      height={96}
                    />
                  )}
                </div>
                <div className="min-w-0">
                  <h2 className="text-lg sm:text-xl font-semibold truncate">
                    {item.producto.nombre}
                  </h2>
                  <p className="text-sm sm:text-base">
                    Precio: {item.producto.moneda}{" "}
                    {((item.producto.precio ?? 0) * item.cantidad).toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex items-center ml-4 flex-shrink-0">
                <BotonAgregarCarrito
                  producto={item.producto}
                  disabled={disabled}
                />
              </div>
            </div>
          ))}
        </div>
        <div
          className="w-full lg:w-80 lg:sticky lg:top-4 h-fit bg-white p-6 border rounded 
          order-first lg:order-last fixed bottom-0 left-0 lg:left-auto"
        >
          <h3 className="text-xl font-semibold">Resumen del Pedido</h3>
          <p className="flex justify-between pb-1">
            <span>Items:</span>
            <span>
              {grupoItems.reduce((total, item) => total + item.cantidad, 0)}
            </span>
          </p>
          <p className="flex justify-between text-2xl font-bold border-t pt-2">
            <span>Total:</span>
            <span>
              AR$ {useCarritoCompras.getState().obtenerPrecioTotal().toFixed(2)}
            </span>
          </p>

          {isSignedIn ? (
            <button
              onClick={handleCheckout}
              disabled={isLoading}
              className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded 
           hover:bg-blue-600 disabled:bg-gray-400"
            >
              {isLoading ? "Procesando..." : "Comprar"}
            </button>
          ) : (
            <SignInButton mode="modal">
              <button
                className="mt-4 w-full bg-blue-500 text-white px-4 rounded
             hover:bg-blue-600"
              >
                Por favor, inicie sesion
              </button>
            </SignInButton>
          )}
        </div>

        <div className="h-64 lg:h-0">
          {/*Espacio para fixar resumen en pie de pagina en dispositivos mobiles*/}
        </div>
      </div>
    </div>
  );
}
export default CarritoPage;
