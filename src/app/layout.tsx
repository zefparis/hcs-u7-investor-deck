import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HCS-U7 | Signature Cognitive Humaine - Pitch Deck Investisseur",
  description: "Authentification biométrique cognitive résistante à l'IA générative. 2 Brevets Déposés. IA SOLUTION Levée Seed Décembre 2025.",
  openGraph: {
    title: "HCS-U7 | Signature Cognitive Humaine",
    description: "Authentification biométrique cognitive résistante à l'IA générative",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-surface text-ink`}
      >
        {children}
      </body>
    </html>
  );
}
