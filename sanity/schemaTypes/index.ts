import { type SchemaTypeDefinition } from "sanity";
import { blockContentType } from "./blockContentType";
import { productoType } from "./productoType";
import { categoriaTypes } from "./categoriaTypes";

import { promocionType } from "./promocionType";
import { orderType } from "./orderType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoriaTypes,
    productoType,
    promocionType,
    orderType,
  ],
};
