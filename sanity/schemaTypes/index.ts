import { type SchemaTypeDefinition } from "sanity";
import { blockContentType } from "./blockContentType";
import { productoType } from "./productoType";
import { categoriaTypes } from "./categoriaTypes";
import { pedidoType } from "./pedidoType";
import { promocionType } from "./promocionType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoriaTypes,
    pedidoType,
    productoType,
    promocionType,
  ],
};
