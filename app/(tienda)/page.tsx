import ProductosView from "@/components/ui/ProductosView";
import PromoVeranoBanner from "@/components/ui/PromoVeranoBanner";
import { obtenerCategorias } from "@/sanity/lib/productos/obtenerCategorias";
import { obtenerProductos } from "@/sanity/lib/productos/obtenerProductos";

export default async function Home() {
  const productos = await obtenerProductos();
  const categorias = await obtenerCategorias();

  return (
    <div>
      <PromoVeranoBanner />
      <div className="flex flex-col items-center justufy-top min-h-screen bg-gray-200 p-4">
        <ProductosView productos={productos} categorias={categorias} />
      </div>
    </div>
  );
}
