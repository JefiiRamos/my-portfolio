import type { Metadata } from "next";
import localFont from "next/font/local";
import { LanguageProvider } from "@/lib/i18n/context";
import "./globals.css";

const spaceGrotesk = localFont({
  src: "./fonts/space-grotesk-latin.woff2",
  variable: "--font-space-grotesk",
  display: "swap",
  weight: "300 700",
});

export const metadata: Metadata = {
  title: "Jefii — Jeferson Ramos | Código com intenção",
  description:
    "Código com intenção. Interface com personalidade. Conheça os projetos de Jeferson Ramos, o Jefii: desenvolvedor front-end em Curitiba, com foco em React, Next.js e experiências digitais.",
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
  openGraph: {
    title: "Jefii — Código com intenção. Interface com personalidade.",
    description: "O espaço criativo de Jeferson Ramos. Projetos reais, olhar de produto e cuidado com os detalhes.",
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
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
