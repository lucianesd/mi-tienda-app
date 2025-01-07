import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Mi Ti3nda")
    .items([
      // S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("categoria").title("Categorias"),
      S.documentTypeListItem("producto").title("Productos"),
      S.documentTypeListItem("promocion").title("Promociones"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["producto", "categoria", "promocion"].includes(item.getId()!)
      ),
    ]);
