import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const obtenerCategorias = async () => {
  const OBTENER_CATEGORIAS = defineQuery(
    `* [
     _type == "categoria" 
    ] | order(titulo asc) `
  );

  try {
    // usa sanitFech para enviar la consulta
    const categorias = await sanityFetch({
      query: OBTENER_CATEGORIAS,
    });
    // retorna una lista de categorias o un array vacio
    return categorias.data || [];
  } catch (error) {
    console.error("Error al buscar las categorias:", error);
    return [];
  }
};
