"use client";
import { Order } from "@/sanity.types";
import { useEffect, useState } from "react";

function TarjetaOrden({ order }: { order: Order }) {
  const [estado, setEstado] = useState("");
  const {
    orderDate,
    orderNumber,
    totalPrice,
    amountDiscount,
    currency,
    productos,
  } = order;
  const precioTotal = totalPrice || 0;
  const moneda = currency?.toUpperCase();
  const descuento = amountDiscount || 0;
  const subtotal = precioTotal + descuento;
  function confirmarEstado(status: string) {
    if (status === "paid") {
      setEstado("Pago");
    } else if (status === "sent") {
      setEstado("Enviado");
    } else if (status === "delivered") {
      setEstado("Entregado");
    } else if (status === "canceled") {
      setEstado("Cancelado");
    } else if (status === "pending") {
      setEstado("Pendiente");
    }
  }

  useEffect(() => {
    if (order?.status) {
      confirmarEstado(order.status);
      console.log(estado);
    }
  }, [order.status]);

  return (
    <>
      <div
        key={orderNumber}
        className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
      >
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mb-4">
            <div>
              <p className="text-sm text-gray-600 mb-1 font-bold">
                Numero de Orden
              </p>
              <p className="font-mono text-sm text-green-600 break-all">
                {orderNumber}
              </p>
            </div>
            <div className="sm:text-right">
              <p className="text-sm text-gray-600 mb-1">Fecha de la Orden</p>
              <p className="font-medium">
                {orderDate ? new Date(orderDate).toLocaleDateString() : "N/A"}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center ">
          <div className="flex items-center">
            <span className="text-sm mr-2 px-4 py-2">Estado:</span>
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                order.status === "paid"
                  ? "bg-green-100 text-green-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {estado}
            </span>
          </div>
          <div className="sm:text-right px-4">
            <p className=" text-sm text-gray-600 mb-1 "> Valor Total</p>
            <p className="font-bold text-lg">
              {precioTotal},00 {moneda}
              {/* verificar como formatear para pesos argentinos*/}
            </p>
          </div>
        </div>
        {descuento ? (
          <div className="mt-4 p-4 sm:p-4 bg-red-50 rounded-lg">
            <p className="text-red-600 font medium mb-1 text-sm sm:text-base">
              Descuento Aplicado : {descuento},00 {moneda}
            </p>
            <p className="text-sm text-gray-600">
              Subtotal Original:
              {subtotal},00 {moneda}
            </p>
          </div>
        ) : null}
      </div>

      <div className="sm:px-6 px-4 py-3 sm:py-4">
        <p className="text-sm text-gray-600  mb-3 sm:mb-4 font-semibold">
          Items del Orden
        </p>

        <div className="space-y-3 sm:space-y-4">
          {productos?.map((producto) => (
            <div
              key={producto.producto?._id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-2 border-b last:border-b-0"
            ></div>
          ))}
          /
        </div>
      </div>
    </>
  );
}
export default TarjetaOrden;
