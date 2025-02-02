/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type Order = {
  _id: string;
  _type: "order";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  orderNumber?: string;
  stripeCkeckoutSesionId?: string;
  stripeCustomerId?: string;
  clerkUserId?: string;
  customerName?: string;
  email?: string;
  stripePaymentIntentId?: string;
  productos?: Array<{
    producto?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "producto";
    };
    cantidad?: number;
    _key: string;
  }>;
  totalPrice?: number;
  currency?: string;
  amountDiscount?: number;
  status?: "pending" | "paid" | "sent" | "delivered" | "canceled";
  orderDate?: string;
};

export type Promocion = {
  _id: string;
  _type: "promocion";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  titulo?: string;
  descripcion?: string;
  descuento?: number;
  codigoCupon?: string;
  validoDesde?: string;
  validoHasta?: string;
  estaActiva?: boolean;
};

export type Producto = {
  _id: string;
  _type: "producto";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  nombre?: string;
  alias?: string;
  imagen?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  descripcion?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  moneda?: string;
  precio?: number;
  categorias?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "categoria";
  }>;
  stock?: number;
};

export type Categoria = {
  _id: string;
  _type: "categoria";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  titulo?: string;
  alias?: string;
  descripcion?: string;
};

export type BlockContent = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  listItem?: "bullet";
  markDefs?: Array<{
    href?: string;
    _type: "link";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
} | {
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  alt?: string;
  _type: "image";
  _key: string;
}>;

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | Slug | Order | Promocion | Producto | Categoria | BlockContent | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./sanity/lib/productos/buscarProductosPorNombre.ts
// Variable: BUSCAR_PRODUCTO_POR_NOMBRE
// Query: *[            _type == "producto"             && nombre match $paramBusqueda        ] | order(nombre asc)
export type BUSCAR_PRODUCTO_POR_NOMBREResult = Array<{
  _id: string;
  _type: "producto";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  nombre?: string;
  alias?: string;
  imagen?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  descripcion?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  moneda?: string;
  precio?: number;
  categorias?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "categoria";
  }>;
  stock?: number;
}>;

// Source: ./sanity/lib/productos/obtenerCategorias.ts
// Variable: OBTENER_CATEGORIAS
// Query: * [     _type == "categoria"     ] | order(titulo asc)
export type OBTENER_CATEGORIASResult = Array<{
  _id: string;
  _type: "categoria";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  titulo?: string;
  alias?: string;
  descripcion?: string;
}>;

// Source: ./sanity/lib/productos/obtenerProductoPorAlias.ts
// Variable: OBTENER_PRODUCTO_POR_ALIAS
// Query: *[            _type == "producto" && alias match $alias        ] | order(nombre asc) [0]
export type OBTENER_PRODUCTO_POR_ALIASResult = {
  _id: string;
  _type: "producto";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  nombre?: string;
  alias?: string;
  imagen?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  descripcion?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  moneda?: string;
  precio?: number;
  categorias?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "categoria";
  }>;
  stock?: number;
} | null;

// Source: ./sanity/lib/productos/obtenerProductos.ts
// Variable: OBTENER_PRODUCTOS
// Query: * [     _type == "producto"     ] | order(nombre asc)
export type OBTENER_PRODUCTOSResult = Array<{
  _id: string;
  _type: "producto";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  nombre?: string;
  alias?: string;
  imagen?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  descripcion?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  moneda?: string;
  precio?: number;
  categorias?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "categoria";
  }>;
  stock?: number;
}>;

// Source: ./sanity/lib/productos/obtenerProductosPorCategoria.tsx
// Variable: OBTENER_PRODUCTOS_POR_CATEGORIA
// Query: *[        _type == "producto"        && references(*[            _type == "categoria" && alias == $aliasCategoria]._id)        ]         {          _id,          nombre,           alias,           imagen,           moneda,           precio,          descripcion        }| order(nombre asc)
export type OBTENER_PRODUCTOS_POR_CATEGORIAResult = Array<{
  _id: string;
  nombre: string | null;
  alias: string | null;
  imagen: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  moneda: string | null;
  precio: number | null;
  descripcion: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }> | null;
}>;

// Source: ./sanity/lib/ordenes/obtenerMisOrdenes.tsx
// Variable: OBTENER_MIS_ORDENES
// Query: *[ _type == "order" && clerkUserId == $userId ] | order(orderDate desc) {         ...,        products[]{            ...,            product->        }    }
export type OBTENER_MIS_ORDENESResult = Array<{
  _id: string;
  _type: "order";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  orderNumber?: string;
  stripeCkeckoutSesionId?: string;
  stripeCustomerId?: string;
  clerkUserId?: string;
  customerName?: string;
  email?: string;
  stripePaymentIntentId?: string;
  productos?: Array<{
    producto?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "producto";
    };
    cantidad?: number;
    _key: string;
  }>;
  totalPrice?: number;
  currency?: string;
  amountDiscount?: number;
  status?: "canceled" | "delivered" | "paid" | "pending" | "sent";
  orderDate?: string;
  products: null;
}>;

// Source: ./sanity/lib/promocion/obtenerPromocionesActivasPorCupon.ts
// Variable: OBTENER_PROMOCIONES_ACTIVAS_POR_CUPON
// Query: *[         _type == "promocion"        && estaActiva == true        && codigoCupon == $codigoCupon    ] | order(validoDesde desc)[0]
export type OBTENER_PROMOCIONES_ACTIVAS_POR_CUPONResult = {
  _id: string;
  _type: "promocion";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  titulo?: string;
  descripcion?: string;
  descuento?: number;
  codigoCupon?: string;
  validoDesde?: string;
  validoHasta?: string;
  estaActiva?: boolean;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "\n        *[\n            _type == \"producto\" \n            && nombre match $paramBusqueda\n        ] | order(nombre asc)\n        ": BUSCAR_PRODUCTO_POR_NOMBREResult;
    "* [\n     _type == \"categoria\" \n    ] | order(titulo asc) ": OBTENER_CATEGORIASResult;
    "\n        *[\n            _type == \"producto\" && alias match $alias\n        ] | order(nombre asc) [0]\n        ": OBTENER_PRODUCTO_POR_ALIASResult;
    "* [\n     _type == \"producto\" \n    ] | order(nombre asc) ": OBTENER_PRODUCTOSResult;
    "\n      *[\n        _type == \"producto\"\n        && references(*[\n            _type == \"categoria\" && alias == $aliasCategoria]._id)\n        ] \n        {\n          _id,\n          nombre, \n          alias, \n          imagen, \n          moneda, \n          precio,\n          descripcion\n        }| order(nombre asc)\n    ": OBTENER_PRODUCTOS_POR_CATEGORIAResult;
    "\n    *[ _type == \"order\" && clerkUserId == $userId ] | order(orderDate desc) {\n         ...,\n        products[]{\n            ...,\n            product->\n        }\n    }\n  ": OBTENER_MIS_ORDENESResult;
    "\n  *[\n         _type == \"promocion\"\n        && estaActiva == true\n        && codigoCupon == $codigoCupon\n    ] | order(validoDesde desc)[0]    \n  ": OBTENER_PROMOCIONES_ACTIVAS_POR_CUPONResult;
  }
}
