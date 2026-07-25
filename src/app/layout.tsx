import type { Metadata } from "next";
import "@fontsource/alfa-slab-one/400.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "São João de Campina Grande — Contagem Regressiva",
  description:
    "Quanto falta para o Maior São João do Mundo? Contagem regressiva em tempo real para o São João de Campina Grande, na Paraíba.",
  openGraph: {
    title: "São João de Campina Grande — Contagem Regressiva",
    description:
      "Quanto falta para o Maior São João do Mundo? Contagem regressiva em tempo real para o São João de Campina Grande.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
