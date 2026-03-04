import type { Metadata } from "next";
import { fraunces, dmSans } from "@/lib/fonts";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "GLEZFIT — MODAFITNESS",
  description:
    "Ropa fitness premium que moldea y estiliza tu figura sin sacrificar comodidad. Leggings, tops y sets disenados con telas ribbed de alta calidad.",
  keywords: ["fitness", "moda", "leggings", "activewear", "GLEZFIT"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
