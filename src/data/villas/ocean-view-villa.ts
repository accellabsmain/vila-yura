import { Villa } from "@/types/villa";

export const oceanViewVilla: Villa = {
  id: "ocean-view-villa",
  slug: { en: "ocean-view-villa", id: "villa-samudra" },
  name: "Ocean View Villa",
  location: { en: "Uluwatu, Bali", id: "Uluwatu, Bali" },
  title: { en: "Ocean View Villa | Cliffside Luxury", id: "Villa Samudra | Kemewahan di Tepi Tebing" },
  description: {
    en: "Perched on the dramatic cliffs of Uluwatu, this villa offers uninterrupted 180-degree ocean views. Let the sound of crashing waves become the soundtrack to your escape, accompanied by breathtaking sunsets every evening.",
    id: "Terletak di tebing Uluwatu yang dramatis, villa ini menawarkan pemandangan laut 180 derajat tanpa halangan. Biarkan suara ombak menjadi latar pelarian Anda, ditemani matahari terbenam yang menakjubkan setiap sore."
  },
  shortDescription: {
    en: "Cliffside luxury with uninterrupted 180-degree ocean views and dramatic sunsets.",
    id: "Kemewahan tepi tebing dengan pemandangan laut 180 derajat dan matahari terbenam."
  },
  guests: 6,
  bedrooms: 3,
  bathrooms: 3,
  priceFrom: 8500000,
  amenities: [
    { icon: "pool", label: { en: "Private Swimming Pool", id: "Kolam Renang Privat" } },
    { icon: "view", label: { en: "Ocean View", id: "Pemandangan Laut" } }
  ],
  images: [
    { src: "/images/depan1.jpg", alt: { en: "Yura Villa - Main Exterior Front", id: "Yura Villa - Tampak Depan Utama" }, width: 1920, height: 1080 },
    { src: "/images/kolamrenang1.jpg", alt: { en: "Yura Villa - Swimming Pool", id: "Yura Villa - Kolam Renang" }, width: 1920, height: 1080 },
    { src: "/images/mainlounge.jpg", alt: { en: "Yura Villa - Main Lounge", id: "Yura Villa - Lounge Utama" }, width: 1920, height: 1080 },
    { src: "/images/kamarlandscape.jpg", alt: { en: "Yura Villa - Bedroom Suite", id: "Yura Villa - Kamar Tidur Utama" }, width: 1920, height: 1080 },
    { src: "/images/mejabl.jpg", alt: { en: "Yura Villa - Billiard & Entertainment Area", id: "Yura Villa - Area Meja Biliar" }, width: 1920, height: 1080 }
  ],
  featured: true
};
