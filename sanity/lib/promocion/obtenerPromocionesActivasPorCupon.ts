import { defineQuery } from "next-sanity";
import { CodigoCupon } from "./codigosCupones";
import { sanityFetch } from "../live";

export const obtenerPromocionesActivasPorCupon = async (
  codigoCupon: CodigoCupon
) => {
  const OBTENER_PROMOCIONES_ACTIVAS_POR_CUPON = defineQuery(`
  *[
         _type == "promocion"
        && estaActiva == true
        && codigoCupon == $codigoCupon
    ] | order(validoDesde desc)[0]    
  `);

  try {
    const promocionActiva = await sanityFetch({
      query: OBTENER_PROMOCIONES_ACTIVAS_POR_CUPON,
      params: {
        codigoCupon,
      }, //recibe el codigo de cupon como parametro
    });
    return promocionActiva ? promocionActiva.data : null;
  } catch (error) {
    console.error(
      "Error buscando promocion activa por codigo de cupon:",
      error
    );
    return null;
  }
};
