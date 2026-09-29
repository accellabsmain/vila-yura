import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { getMessages } from "@/lib/i18n";
import { Locale } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://vilayura.com";

export async function generateMetadata(): Promise<Metadata> {
  const loc: Locale = "id";
  const messages = getMessages(loc);

  const title = "Yura Villa Tawangmangu | Rest & Healing Sanctuary Privat di Perbukitan";

  const description = messages.footer.description ||
    "Yura Villa Tawangmangu adalah sanctuary peristirahatan privat dengan 5 kamar tidur suite, kolam renang privat, lounge biliar, dan kolam koi di perbukitan sejuk Tawangmangu.";

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      template: "%s | Yura Villa Tawangmangu",
      default: title,
    },
    description: description,
    keywords: [
      "Yura Villa", "Yura Villa Tawangmangu", "Sewa Villa Tawangmangu", 
      "Villa Kolam Renang Privat Tawangmangu", "Penginapan Tawangmangu 5 Kamar", 
      "Sanctuary Healing Tawangmangu", "Villa Mewah Karanganyar"
    ],
    authors: [{ name: "Yura Villa Team", url: SITE_URL }],
    creator: "Yura Villa Tawangmangu",
    publisher: "Yura Villa Tawangmangu",
    alternates: {
      canonical: SITE_URL,
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
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google-site-verification-placeholder",
      other: {
        "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "bing-site-verification-placeholder",
      },
    },
    openGraph: {
      title: title,
      description: description,
      url: SITE_URL,
      siteName: "Yura Villa Tawangmangu",
      images: [
        {
          url: `${SITE_URL}/images/depan1.jpg`,
          width: 1200,
          height: 630,
          alt: "Yura Villa Tawangmangu Rest Sanctuary",
        },
      ],
      locale: "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [`${SITE_URL}/images/depan1.jpg`],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loc: Locale = "id";
  const messages = getMessages(loc);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Yura Villa Tawangmangu",
    "image": `${SITE_URL}/images/depan1.jpg`,
    "@id": SITE_URL,
    "url": SITE_URL,
    "telephone": "+6287778283084",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Pancot Lor No.rt02/05, Jetis, Kalisoro",
      "addressLocality": "Tawangmangu",
      "addressRegion": "Jawa Tengah",
      "postalCode": "57792",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -7.6579629,
      "longitude": 111.1418094
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Private Swimming Pool", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "5 Executive Bedrooms", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Billiard Lounge", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Zen Koi Pond", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Private Carport", "value": true }
    ]
  };

  return (
    <html lang={loc} className={inter.variable} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-sans flex flex-col min-h-screen">
        <Navbar messages={messages.nav} locale={loc} />
        <main className="flex-1 w-full">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer messages={messages.footer} locale={loc} />
      </body>
    </html>
  );
}

