import ProductosView from "@/components/ui/ProductosView";
import { obtenerCategorias } from "@/sanity/lib/productos/obtenerCategorias";
import { obtenerProductosPorCategoria } from "@/sanity/lib/productos/obtenerProductosPorCategoria";

async function CategoriaPage({
  params,
}: {
  params: Promise<{ alias: string }>;
}) {
  const { alias } = await params;

  const productos = await obtenerProductosPorCategoria(alias);
  const categorias = await obtenerCategorias();

  return (
    <div className="flex flex-col items-center justify-top min-h-screen bg-gray-200 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Colección de{" "}
          {alias
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </h1>
        <ProductosView productos={productos} categorias={categorias} />
      </div>
    </div>
  );
}

export default CategoriaPage;
