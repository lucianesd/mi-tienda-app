import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const obtenerProductosPorCategoria = async (aliasCategoria: string) => {
  const OBTENER_PRODUCTOS_POR_CATEGORIA = defineQuery(`
      *[
        _type == "producto"
        && references(*[
            _type == "categoria" && alias == $aliasCategoria]._id)
        ] 
        {
          _id,
          nombre, 
          alias, 
          imagen, 
          moneda, 
          precio,
          descripcion
        }| order(nombre asc)
    `);

  try {
    // usa sanitFech para enviar la consulta y pasar el alias de categoria
    const productos = await sanityFetch({
      query: OBTENER_PRODUCTOS_POR_CATEGORIA,
      params: {
        aliasCategoria,
      },
    });
    // retorna una lista de productos o un array vacio
    return productos.data || [];
  } catch (error) {
    console.error("Error al buscar los productos por categoria:", error);
    return [];
  }
};
