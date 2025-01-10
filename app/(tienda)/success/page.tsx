"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useCarritoCompras from "@/tienda/tienda";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

function SuccessPage() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");
  const limpiarCarrito = useCarritoCompras((estado) => estado.limpiarCarrito);

  useEffect(() => {
    if (orderNumber) {
      limpiarCarrito();
    }
  }, [orderNumber, limpiarCarrito]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-12 rounded-xl sahdow-lg max-w-2xl w-full mx-4">
        <div className="flex justify-center mb-8">
          <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="h-8 w-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-6 text-center">
          Muchas Gracias por su Compra!
        </h1>
        <div className="border-t border-b border gray-200 py-6 mb-6 px-2">
          <p className="text-lg text-gray-700 mb-4">
            Su pedido fue confirmado y será enviado prontamente.
          </p>

          <div className="space-y-2 ">
            {orderNumber && (
              <p className="text-gray-600 flex items-center space-x-5">
                <span>Número de Orden de Compra:</span>
                <span className="font-mono text-sm text-green-600">
                  {orderNumber}
                </span>
              </p>
            )}
            {/* {sessionId && (
            <p className = "text-gray-600 flex justify-between">
            <span>Transacion ID:</span>
            <span className="font-mono text-sm">{sessionId}</span>
            </p>
            )} */}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-gray-600">
            Un correo de confirmación fue enviado a su email registrado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/orders">Ver Detalles del Orden</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Seguir Comprando</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
