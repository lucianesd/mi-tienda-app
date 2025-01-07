import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const productoType = defineType({
  name: "producto",
  title: "Producto",
  type: "document",
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: "nombre",
      title: "Nombre Producto",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "alias",
      title: "Alias",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "imagen",
      title: "Imagen del Producto",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "descripcion",
      title: "Descripcion",
      type: "blockContent",
    }),
    defineField({
      name: "moneda",
      title: "Moneda",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "precio",
      title: "Precio",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "categorias",
      title: "Categorias",
      type: "array",
      of: [{ type: "reference", to: { type: "categoria" } }],
    }),
    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
  ],
  preview: {
    select: {
      title: "nombre",
      media: "imagen",
      precio: "precio",
    },
    prepare(select) {
      return {
        title: select.title,
        subtitle: `$${select.precio}`,
        media: select.media,
      };
    },
  },
});
