export const metadata = {
  title: "Mi Tienda App",
  description: "Creada por Luciane Damaso",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
