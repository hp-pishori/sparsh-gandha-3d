import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sparsh Gandha — Senses Beyond Scent | Luxury Fragrance",
  description: "An exploration of fragrance through sight, touch, and scent. The Scent You Can See — from invisible to tangible.",
  keywords: ["Sparsh Gandha", "Luxury Perfume", "Artisanal Fragrance", "Rose", "Mogra", "Kasturi", "Lemon", "Sandalwood", "Senses Beyond Scent"],
  authors: [{ name: "Sparsh Gandha" }],
  openGraph: {
    title: "Sparsh Gandha — Senses Beyond Scent",
    description: "The Scent You Can See. Exploring the relationship between scent, touch, sight, material, and memory.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#090807",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth bg-[#090807]">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Montserrat:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#090807] text-[#F3EBDD] min-h-screen selection:bg-[#B49A6A] selection:text-[#090807]">
        {children}
      </body>
    </html>
  );
}
