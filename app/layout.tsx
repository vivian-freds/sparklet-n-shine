import type { Metadata } from "next";
import { Sora, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";

/* ── Premium SaaS font stack ──────────────────────────────────────
   Sora  → headings  (sharp, modern, used by top SaaS products)
   Outfit → body     (geometric, crisp, highly legible)
──────────────────────────────────────────────────────────────── */
const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sparklet & Shine | Professional Cleaning Services",
  description:
    "Premium residential and commercial cleaning services in Nairobi. Book online via WhatsApp today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
