import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

export function urlImagen(source: SanityImageSource) {
  return builder.image(source);
}
/* funcion que toma una imagen del tablero de sanity 
y lo transforma en una direccion de url */
