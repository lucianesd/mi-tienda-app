import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";

export const categoriaTypes = defineType({
  name: "categoria",
  title: "Categoria",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "titulo",
      type: "string",
    }),
    defineField({
      name: "alias",
      type: "string",
    }),
    defineField({
      name: "descripcion",
      type: "text",
    }),
  ],
});
