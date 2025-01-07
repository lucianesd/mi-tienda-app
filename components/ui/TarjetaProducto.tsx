import { urlImagen } from "@/lib/urlImagen";
import { Producto } from "@/sanity.types";
import Image from "next/image";
import Link from "next/link";

function TarjetaProducto({ producto }: { producto: Producto }) {
  const sinStock = producto.stock != null && producto.stock <= 0;

  return (
    <Link
      href={`/producto/${producto.alias}`}
      className={`group flex flex-col bg-white rounded-lg border border-gray-200  
     shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden ${
       sinStock ? "opacity-50" : ""
     }`}
    >
      <div className="relative aspect-square w-full h-full overflow-hidden">
        {producto.imagen && (
          <Image
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            src={urlImagen(producto.imagen).url()}
            alt={producto.nombre || "Imagen del Producto"}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vm"
          />
        )}
        {sinStock && (
          <div
            className="absolute inset-0 flex items-center justify-center
           bg-black bg-opacity-35"
          >
            <span className="text-white font-bold text-lg">Sin Stock</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {producto.nombre}
        </h2>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {producto.descripcion
            ?.map((block) =>
              block._type === "block"
                ? block.children?.map((child) => child.text).join("")
                : ""
            )
            .join(" ") || "Sin descripción disponible"}
        </p>

        <p className="mt-2 text-lg font-bold text-gray-900 line-clamp-2">
          {producto.moneda} {producto.precio}
        </p>
      </div>
    </Link>
  );
}
export default TarjetaProducto;
