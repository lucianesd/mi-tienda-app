import type { Metadata } from "next";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/ui/Header";
import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import { DesabilitarDraftMode } from "@/components/ui/DesabilitarDraftMode";

export const metadata: Metadata = {
  title: "Mi Tienda",
  description: "Creada por Luciane Damaso",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
      <html lang="es">
        <body>
          {(await draftMode()).isEnabled && (
            <>
              <DesabilitarDraftMode />
              <VisualEditing />
            </>
          )}
          <main>
            <Header />
            {children}
          </main>
          <SanityLive />
        </body>
      </html>
    </ClerkProvider>
  );
}
