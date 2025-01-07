import { TagIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const promocionType = defineType({
  name: "promocion",
  title: "Promocion",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "titulo",
      title: "Titulo de la Promocion",
      type: "string",
    }),
    defineField({
      name: "descripcion",
      title: "Descripcion de la Promocion",
      type: "text",
    }),
    defineField({
      name: "descuento",
      title: "Valor de Descuento",
      type: "number",
    }),
    defineField({
      name: "codigoCupon",
      title: "Código del Cupon",
      type: "string",
    }),
    defineField({
      name: "validoDesde",
      title: "Valido Desde",
      type: "datetime",
    }),
    defineField({
      name: "validoHasta",
      title: "Valido Hasta",
      type: "datetime",
    }),
    defineField({
      name: "estaActiva",
      title: "Esta Activa",
      description: "Toogle para activar/desactivar la promocion",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      titulo: "titulo",
      descuento: "descuento",
      codigoCupon: "codigoCupon",
      estaActiva: "estaActiva",
    },
    prepare(selection) {
      const { titulo, descuento, codigoCupon, estaActiva } = selection;
      const estado = estaActiva ? "Activa" : "Inactiva";
      return {
        titulo,
        subtitle: `${descuento}% de descuento - Codigo: ${codigoCupon} - ${estado}`,
      };
    },
  },
});
