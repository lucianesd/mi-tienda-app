import { CODIGOS_CUPONES } from "@/sanity/lib/promocion/codigosCupones";
import { obtenerPromocionesActivasPorCupon } from "@/sanity/lib/promocion/obtenerPromocionesActivasPorCupon";

async function PromoVeranoBanner() {
  const promocion = await obtenerPromocionesActivasPorCupon(
    CODIGOS_CUPONES.VERANO25
  );
  if (!promocion?.estaActiva) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-10 mx-4 mt-2 rounded-lg shadow-lg">
      <div className="container mx-auto flex items -center justify-between">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-left mb-4 ">
            {promocion.titulo}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 my-2">
            <p className="text-left text-xl sm:text-2xl sm: mb-3 font-semibold ">
              {promocion.descripcion}
            </p>
            <div className="bg-white text-blue-950 py-3 px-6 rounded-full shadow-md transform hover:scale-105 transition duration-300">
              <span className="font-bold text-base sm:text-xl">
                Descuentos de {promocion.descuento}% de con el cupon: {""}
              </span>
              <span className="text-blue-500 text-lg font-semibold">
                {promocion.codigoCupon}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromoVeranoBanner;
