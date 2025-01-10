import { obtenerMisOrdenes } from "@/sanity/lib/ordenes/obtenerMisOrdenes";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import TarjetaOrden from "@/components/ui/TarjetaOrden";

async function Ordenes() {
  const { userId } = await auth();
  if (!userId) return redirect("/");

  const orders = await obtenerMisOrdenes(userId);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-4 sm:p-8 rounded-xl shadow-lg w-full max-w-4xl">
        <h1 className="text-3xl font-bold  text-gray-900 tracking-tight mb-8">
          Mis Ordenes de Compra
        </h1>
        {orders.length === 0 ? (
          <div className="text-center text-gray-600">
            "No hay ordenes de compras registradas a su nombre todavia"
          </div>
        ) : (
          <div className="space-y-6 sm:space-y-8">
            {orders.map((order) => (
              <TarjetaOrden key={order._id} order={order} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default Ordenes;
