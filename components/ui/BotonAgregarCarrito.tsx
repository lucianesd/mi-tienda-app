"use client";
import { Producto } from "@/sanity.types";
import usarCarritoCompras from "@/tienda/tienda";
import { useEffect, useState } from "react";

interface BotonAgregarCarritoProps {
  producto: Producto;
  disabled: boolean;
}

function BotonAgregarCarrito({ producto, disabled }: BotonAgregarCarritoProps) {
  const { agregarItem, removerItem, obtenerCantidadItems } =
    usarCarritoCompras();
  const cantidadItems = obtenerCantidadItems(producto._id);

  const [esCliente, setEsCliente] = useState(false);

  /* usar useEffect para confirmar que esCliente es verdadero despues de montar el componente
  esto garantiza que el componente solo se represente en el lado del cliente
   y evita errores de hidratación debido a una discrepancia entre el servidor y el cliente. */
  useEffect(() => {
    setEsCliente(true);
  }, []);

  if (!esCliente) return null;

  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        onClick={() => removerItem(producto._id)}
        className={`w-8 h-8 rounded-full flex items-center justify-center 
        transition-colors duration-200 ${
          cantidadItems === 0
            ? "bg-gray-100 cursor-not-allowed"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
        disabled={cantidadItems === 0 || disabled}
      >
        <span
          className={`text-xl font-bold ${cantidadItems == 0 ? "text-gray-400" : "text-gray-600"}`}
        >
          -
        </span>
      </button>
      <span className="w-8 text-center font-semibold">{cantidadItems}</span>
      <button
        onClick={() => agregarItem(producto)}
        className={`w-8 h-8 rounded-full flex items-center justify-center 
            transition-colors duration-200 ${
              cantidadItems === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
        disabled={disabled}
      >
        <span className="text-xl font-bold text-white">+</span>
      </button>
    </div>
  );
}

export default BotonAgregarCarrito;
