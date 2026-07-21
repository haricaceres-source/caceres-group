import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { BackToTop } from "@/components/layout/BackToTop";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const pageTitle =
  "Grupos Caceres | Capital & Market Entry Advisory — Venezuela";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: pageTitle,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Grupos Caceres",
    "Caceres Group",
    "Grupos Cáceres",
    "Venezuela consulting",
    "market entry Venezuela",
    "Venezuela market entry",
    "market entry advisory Venezuela",
    "business advisory Venezuela",
    "Latin America consulting",
    "business licensing Venezuela",
    "Venezuela expansion",
    "Venezuela partnerships",
    "enter Venezuela market",
    "consulting firm Venezuela",
  ],
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    title: pageTitle,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-avila.jpg",
        width: 1600,
        height: 900,
        alt: "Caracas skyline — Grupos Caceres Venezuela consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: SITE.description,
    images: ["/images/hero-avila.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] antialiased">
        <JsonLd />
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
