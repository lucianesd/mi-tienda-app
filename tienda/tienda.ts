import { Producto } from "@/sanity.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}

interface EstadoCarrito {
  items: ItemCarrito[];
  agregarItem: (producto: Producto) => void;
  removerItem: (productoId: string) => void;
  limpiarCarrito: () => void;
  obtenerPrecioTotal: () => number;
  obtenerCantidadItems: (productoId: string) => number;
  obtenerItemsAgrupados: () => ItemCarrito[];
}

const useCarritoCompras = create<EstadoCarrito>()(
  persist(
    (set, get) => ({
      //guarda los productos seleccionados
      items: [],
      // agrupa los items de um mismo producto y la cantidad seleccionada de ellos
      agregarItem: (producto) =>
        set((estado) => {
          const itemAgregado = estado.items.find(
            (item) => item.producto._id === producto._id
          );
          if (itemAgregado) {
            return {
              items: estado.items.map((item) =>
                item.producto._id === producto._id
                  ? { ...item, cantidad: item.cantidad + 1 }
                  : item
              ),
            };
          } else {
            return { items: [...estado.items, { producto, cantidad: 1 }] };
          }
        }),

      /* remueve unidades de la cantidad de productos de un mismo id 
      o todos los productos de ese id */
      removerItem: (productoId) =>
        set((estado) => ({
          items: estado.items.reduce((acc, item) => {
            if (item.producto._id === productoId) {
              if (item.cantidad > 1) {
                acc.push({ ...item, cantidad: item.cantidad - 1 });
              }
            } else {
              acc.push(item);
            }
            return acc;
          }, [] as ItemCarrito[]),
        })),
      //remueve todos los productos del carrito
      limpiarCarrito: () => set({ items: [] }),
      // calcula el monto total inicial por producto con su cantidad
      obtenerPrecioTotal: () => {
        return get().items.reduce(
          (total, item) => total + (item.producto.precio ?? 0) * item.cantidad,
          0
        );
      },
      // devuelve el cantidad de itens seleccionados de un mismo producto
      obtenerCantidadItems: (productoId) => {
        const item = get().items.find(
          (item) => item.producto._id === productoId
        );
        return item ? item.cantidad : 0;
      },
      // lista todos los items seleccionados
      obtenerItemsAgrupados: () => get().items,
    }),
    {
      name: "carrito-compras",
    }
  )
);

export default useCarritoCompras;
