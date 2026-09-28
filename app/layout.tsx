import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Amanda Lam | Freelance IT Project Manager & Business Analyst",
    template: "%s | Amanda Lam",
  },
  description:
    "Amanda Lam is a freelance IT project manager and business analyst in Hong Kong, delivering digital products, workflow automation, AI chatbots, and platform work for startups and enterprises.",
  authors: [{ name: "Amanda Lam" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`} data-scroll-behavior="smooth">
      <body className={sans.className}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
