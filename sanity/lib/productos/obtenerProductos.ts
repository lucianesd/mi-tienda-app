import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const obtenerProductos = async () => {
  const OBTENER_PRODUCTOS = defineQuery(
    `* [
     _type == "producto" 
    ] | order(nombre asc) `
  );

  /* utilizamos consulta del tipo GRO, se puede usar 
Graphql entre otras opciones*/
  try {
    // usa sanitFech para enviar la consulta
    const productos = await sanityFetch({
      query: OBTENER_PRODUCTOS,
    });
    // retorna una lista de productos o un array vacio
    return productos.data || [];
  } catch (error) {
    console.error("Error al buscar los productos:", error);
    return [];
  }
};
