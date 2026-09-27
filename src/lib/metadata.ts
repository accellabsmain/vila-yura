import { Metadata } from "next";
import { Villa } from "@/types/villa";
import { Locale, PATH_SEGMENTS } from "./constants";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://vilayura.com";

export function generateVillaMetadata(villa: Villa, locale: Locale): Metadata {
  return {
    title: villa.title[locale],
    description: villa.description[locale].substring(0, 160),
    alternates: {
      canonical: `${BASE_URL}/${locale}/${PATH_SEGMENTS.villas[locale]}/${villa.slug[locale]}`,
      languages: {
        en: `${BASE_URL}/en/${PATH_SEGMENTS.villas.en}/${villa.slug.en}`,
        id: `${BASE_URL}/id/${PATH_SEGMENTS.villas.id}/${villa.slug.id}`,
      },
    },
    openGraph: {
      title: villa.title[locale],
      description: villa.description[locale].substring(0, 160),
      images: [villa.images[0].src],
      locale: locale,
      type: "website",
    },
  };
}
