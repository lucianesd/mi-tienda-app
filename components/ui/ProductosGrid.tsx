"use client";
import { Producto } from "@/sanity.types";
import { AnimatePresence, motion } from "framer-motion";
import TarjetaProducto from "./TarjetaProducto";

function ProductosGrid({ productos }: { productos: Producto[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {productos?.map((producto) => {
        return (
          <AnimatePresence key={producto._id}>
            <motion.div
              layout
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center"
            >
              <TarjetaProducto key={producto._id} producto={producto} />
            </motion.div>
          </AnimatePresence>
        );
      })}
    </div>
  );
}
export default ProductosGrid;
