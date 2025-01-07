import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const obtenerProductoPorAlias = async (alias: string) => {
  const OBTENER_PRODUCTO_POR_ALIAS = defineQuery(`
        *[
            _type == "producto" && alias match $alias
        ] | order(nombre asc) [0]
        `);

  try {
    // usa sanitFech para enviar la consulta con el alias
    const producto = await sanityFetch({
      query: OBTENER_PRODUCTO_POR_ALIAS,
      params: {
        alias,
      },
    });
    return producto.data || null; // retorna un producto o nulo
  } catch (error) {
    console.error("Error al buscar los productos por alias:", error);
    return null;
  }
};
