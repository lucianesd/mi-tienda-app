"use client"; // Esto fuerza la renderización en el cliente
import { Categoria, Producto } from "@/sanity.types";
import ProductosGrid from "./ProductosGrid";
import { SelectorCategorias } from "./selector-categorias";
import { Selector } from "./Selector";

interface ProductosViewProps {
  productos: Producto[];
  categorias: Categoria[];
}

const ProductosView = ({ productos, categorias }: ProductosViewProps) => {
  console.log(categorias.length);
  return (
    <div className="flex flex-col">
      {/* categorias 
      // TO DO: Solucionar el error de router de Next/router para selacto de categorias

      <SelectorCategorias categorias={categorias} />*/}
      {/* productos */}
      <Selector categorias={categorias} />
      <div className="flex-1">
        <div>
          <ProductosGrid productos={productos} />
          <hr className="w-1/2 sm:w-3/4" />
        </div>
      </div>
    </div>
  );
};
export default ProductosView;
