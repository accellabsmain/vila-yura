export interface Villa {
  id: string;
  slug: { en: string; id: string };
  name: string;
  location: { en: string; id: string };
  title: { en: string; id: string };       // SEO title
  description: { en: string; id: string };   // long-form
  shortDescription: { en: string; id: string }; // for card
  guests: number;
  bedrooms: number;
  bathrooms: number;
  priceFrom: number;              // IDR
  amenities: Amenity[];
  images: VillaImage[];
  featured?: boolean;
}

export interface VillaImage {
  src: string;
  alt: { en: string; id: string };
  width: number;
  height: number;
}

export interface Amenity {
  icon: string;
  label: { en: string; id: string };
}
