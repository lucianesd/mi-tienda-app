import ProductosGrid from "@/components/ui/ProductosGrid";
import { buscarProductosPorNombre } from "@/sanity/lib/productos/buscarProductosPorNombre";

async function Buscador({
  searchParams,
}: {
  searchParams: {
    query: string;
  };
}) {
  const { query } = await searchParams;
  const productos = await buscarProductosPorNombre(query);

  if (!productos.length) {
    return (
      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-200 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-center">
            No encontramos produtos para: {query}
          </h2>
          <p className="text-gray-600 text-center">
            Intente buscar com otra palabra llave
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-top min-h-screen bg-gray-200 p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Resultado de la busqueda para {query}
      </h2>
      <ProductosGrid productos={productos} />
    </div>
  );
}

export default Buscador;
