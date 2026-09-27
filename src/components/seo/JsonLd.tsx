import { Villa } from "@/types/villa";
import { Locale } from "@/lib/constants";

export function JsonLd({ schema }: { schema: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function generateVillaSchema(villa: Villa, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: villa.name,
    description: villa.description[locale],
    image: villa.images.map((img) => img.src),
    address: {
      "@type": "PostalAddress",
      addressLocality: villa.location[locale],
    },
    priceRange: `IDR ${villa.priceFrom.toLocaleString("id-ID")} - IDR ${villa.priceFrom.toLocaleString("id-ID")}`,
    amenityFeature: villa.amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity.label[locale],
      value: true,
    })),
    occupancy: {
      "@type": "QuantitativeValue",
      value: villa.guests,
    },
  };
}
