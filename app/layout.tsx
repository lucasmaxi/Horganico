import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Horgânico Soluções Ecológicas",
  description:
    "Soluções técnicas, jurídicas e sustentáveis: engenharia ambiental, segurança do trabalho, vigilância sanitária, defesa de multas e gestão estratégica.",
  themeColor: "#12271b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${archivo.variable} font-sans bg-white text-forest antialiased`}>
        {children}
      </body>
    </html>
  );
}
