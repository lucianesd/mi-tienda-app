export const CODIGOS_CUPONES = {
  NAVIDAD24: "NAVIDAD24",
  VERANO25: "VERANO25",
  CARNAVAL25: "CARNAVAL25",
} as const;

export type CodigoCupon = keyof typeof CODIGOS_CUPONES;
