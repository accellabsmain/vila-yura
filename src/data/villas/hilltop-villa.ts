import { Villa } from "@/types/villa";

export const hilltopVilla: Villa = {
  id: "hilltop-villa",
  slug: { en: "hilltop-villa", id: "villa-bukit" },
  name: "Hilltop Villa",
  location: { en: "Ubud, Bali", id: "Ubud, Bali" },
  title: { en: "Hilltop Villa | Private Luxury Escape", id: "Villa Bukit | Pelarian Mewah Privat" },
  description: {
    en: "Experience absolute tranquility in this stunning hilltop sanctuary. Offering sweeping views of the lush Ubud valleys and designed with organic materials that blend seamlessly into the natural landscape. Every corner is crafted for peaceful reflection.",
    id: "Nikmati ketenangan mutlak di tempat peristirahatan puncak bukit yang memukau ini. Menawarkan pemandangan luas lembah Ubud yang subur dan dirancang dengan bahan organik yang menyatu dengan lanskap alam. Setiap sudut diciptakan untuk refleksi yang damai."
  },
  shortDescription: {
    en: "A hilltop sanctuary offering sweeping valley views and complete privacy.",
    id: "Tempat peristirahatan puncak bukit dengan pemandangan lembah dan privasi penuh."
  },
  guests: 4,
  bedrooms: 2,
  bathrooms: 2,
  priceFrom: 4500000,
  amenities: [
    { icon: "pool", label: { en: "Private Pool", id: "Kolam Renang Privat" } },
    { icon: "wifi", label: { en: "High-Speed WiFi", id: "WiFi Berkecepatan Tinggi" } }
  ],
  images: [
    { src: "/images/depan2.jpg", alt: { en: "Vila Yura - Exterior Front 2", id: "Vila Yura - Tampak Depan 2" }, width: 1920, height: 1080 },
    { src: "/images/kolam.jpg", alt: { en: "Vila Yura - Relaxing Pool", id: "Vila Yura - Area Kolam Santai" }, width: 1920, height: 1080 },
    { src: "/images/kamar1.jpg", alt: { en: "Vila Yura - Cozy Bedroom", id: "Vila Yura - Kamar Tidur Nyaman" }, width: 1920, height: 1080 },
    { src: "/images/initlounge.jpg", alt: { en: "Vila Yura - Inner Lounge", id: "Vila Yura - Lounge Dalam" }, width: 1920, height: 1080 },
    { src: "/images/bonsai.jpg", alt: { en: "Vila Yura - Bonsai Garden", id: "Vila Yura - Taman Bonsai" }, width: 1920, height: 1080 }
  ],
  featured: true
};
