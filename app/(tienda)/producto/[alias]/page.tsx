import BotonAgregarCarrito from "@/components/ui/BotonAgregarCarrito";
import { urlImagen } from "@/lib/urlImagen";
import { obtenerProductoPorAlias } from "@/sanity/lib/productos/obtenerProductoPorAlias";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";

//async function ProductoPage(params: any) {
async function ProductoPage({
  params,
}: {
  params: Promise<{ alias: string }>;
}) {
  const { alias } = await params;

  const producto = await obtenerProductoPorAlias(alias);

  if (!producto) return notFound();

  const sinStock = producto.stock != null && producto.stock <= 0;

  return (
    <div className="container mx-auto px-4 py-7">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className={`relative aspect-square overflow-hidden rounded-lg shadow-lg ${sinStock ? "opacity-50" : ""}`}
        >
          {producto.imagen && (
            <Image
              className="object-contain transition-transform duration-300 hover:scale-105"
              src={urlImagen(producto.imagen).url()}
              alt={producto.nombre || "Imagen del Producto"}
              fill
            />
          )}
          {sinStock && (
            <div
              className="absolute inset-0 flex items-center justify-center
                   bg-black bg-opacity-50"
            >
              <span className="text-white font-bold text-lg">Sin Stock</span>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{producto.nombre}</h1>
            <div className="text-xl font-semibold mb-4">
              {producto.moneda}: {producto.precio?.toFixed(2)}
            </div>
            <div className="prose max-w-none mb-6">
              {Array.isArray(producto.descripcion) && (
                <PortableText value={producto.descripcion} />
              )}
            </div>
          </div>
          <div className="mt-6">
            <BotonAgregarCarrito producto={producto} disabled={sinStock} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductoPage;
