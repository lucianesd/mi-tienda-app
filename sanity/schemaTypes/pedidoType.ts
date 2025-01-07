import { BasketIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";
import { productoType } from "./productoType";

export const pedidoType = defineType({
  name: "pedido",
  title: "Pedido",
  type: "document",
  icon: BasketIcon,
  fields: [
    defineField({
      name: "numeroPedido",
      title: "Numero del Pedido",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "idSesionStripeCkeckout",
      title: "Id de Sesion de Stripe Ckeckout",
      type: "string",
    }),
    defineField({
      name: "idCliente",
      title: "Id del Cliente ",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "idClienteStripe",
      title: "Id del Cliente Stripe",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "idUsuarioClerk",
      title: "Id del Usuario de la Tienda",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "nombreCliente",
      title: "Nombre del Cliente ",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email del Cliente",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "idIntentoPagoStripe",
      title: "Id de Intento de Pago en Stripe",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "productos",
      title: "Productos",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "producto",
              title: "Producto Comprado",
              type: "reference",
              to: { type: "producto" },
            }),
            defineField({
              name: "cantidad",
              title: "Cantidad",
              type: "number",
            }),
          ],
          preview: {
            select: {
              producto: "producto.nombre",
              cantidad: "cantidad",
              imagen: "producto.imagen",
              precio: "producto.precio",
              moneda: "producto.moneda",
            },
            prepare(select) {
              return {
                title: `${select.producto} x ${select.cantidad}`,
                subtitle: `${select.precio * select.cantidad}`,
                media: select.imagen,
              };
            },
          },
        }),
      ],
    }),
    defineField({
      name: "precioToTal",
      title: "Precio Total",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "moneda",
      title: "Moneda",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "descuento",
      title: "Descuento",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "estado",
      title: "Estado del Pedido",
      type: "string",
      options: {
        list: [
          { title: "Pendiente", value: "pendiente" },
          { title: "Pagado", value: "pagado" },
          { title: "Enviado", value: "enviado" },
          { title: "Entregado", value: "entregado" },
          { title: "Cancelado", value: "cancelado" },
        ],
      },
    }),
    defineField({
      name: "fechaPedido",
      title: "Fecha del Pedido",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      nombre: "nombreCliente",
      valor: "precioTotal",
      moneda: "moneda",
      idPedido: "numeroPedido",
      email: "email",
    },
    prepare(select) {
      const fragmentoIdPedido = `${select.idPedido.slice(0, 5)}...${select.idPedido.slice(-5)}`;
      return {
        title: `${select.nombre} (${fragmentoIdPedido})`,
        subtitle: `${select.moneda} ${select.valor},  ${select.email}`,
        media: BasketIcon,
      };
    },
  },
});
