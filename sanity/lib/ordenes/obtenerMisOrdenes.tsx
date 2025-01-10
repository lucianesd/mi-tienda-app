import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export async function obtenerMisOrdenes(userId: string) {
  if (!userId) {
    throw new Error("Id de usuario es obligatorio");
  }
  const OBTENER_MIS_ORDENES = defineQuery(`
    *[ _type == "order" && clerkUserId == $userId ] | order(orderDate desc) {
         ...,
        products[]{
            ...,
            product->
        }
    }
  `);
  try {
    const orders = await sanityFetch({
      query: OBTENER_MIS_ORDENES,
      params: { userId },
    });
    return orders.data || [];
  } catch (error) {
    console.error("Error consultando ordenes:", error);
    throw new Error("Error consultando ordenes");
  }
}
