import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const buscarProductosPorNombre = async (paramBusqueda: string) => {
  const BUSCAR_PRODUCTO_POR_NOMBRE = defineQuery(`
        *[
            _type == "producto" 
            && nombre match $paramBusqueda
        ] | order(nombre asc)
        `);

  try {
    // usa sanitFech para enviar la consulta y pasar un parametro comodin
    const productos = await sanityFetch({
      query: BUSCAR_PRODUCTO_POR_NOMBRE,
      params: {
        paramBusqueda: `${paramBusqueda}*`, //- habilita una busqueda parcial
      },
    });
    // retorna una lista de productos o un array vacio
    return productos.data || [];
  } catch (error) {
    console.error("Error al buscar los productos por nombre:", error);
    return [];
  }
};
