import { Producto } from "@/sanity.types";
import { promises } from "dns";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ItemCesto {
  producyo: Producto;
  cantidad: number;
}

interface EstadoCesto {
  items: ItemCesto[];
  agregarItem: (producto: Producto) => void;
  removerItem: (productoId: string) => void;
  limpiarCesto: () => void;
  obtenerPrecioTotal: () => number;
  obtenerCantidadItems: (productoId: string) => number;
  obtenerItemsAgrupados: () => ItemCesto[];
}
