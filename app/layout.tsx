import type { Metadata } from "next";

import { Lexend } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { RenderWakeup } from "@/components/ui/RenderWakeup";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Connective - CRM Inteligente para Gestão de Clientes",
    template: "%s | Connective CRM",
  },

  description:
    "Gerencie seus clientes de forma eficiente com Connective CRM. Quadro Kanban, gráficos analíticos e tabela completa de clientes em uma plataforma moderna e intuitiva.",

  keywords: [
    "CRM",
    "gestão de clientes",
    "customer relationship management",
    "kanban",
    "dashboard",
    "gráficos",
    "análise de clientes",
    "vendas",
    "pipeline",
    "Connective",
  ],

  authors: [{ name: "Victor Pinheiro Mello" }],
  creator: "Victor Pinheiro Mello",
  publisher: "Connective",

  metadataBase: new URL("https://connective-opal.vercel.app"),

  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      "pt-BR": "/pt-BR",
    },
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    url: "https://connective-opal.vercel.app",
    siteName: "Connective CRM",
    title: "Connective - CRM Inteligente para Gestão de Clientes",
    description:
      "Gerencie seus clientes de forma eficiente com quadro Kanban, gráficos analíticos e tabela completa de clientes.",
  },

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e293b" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],

  colorScheme: "dark light",

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",

  applicationName: "Connective CRM",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} antialiased`}>
        <RenderWakeup />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
