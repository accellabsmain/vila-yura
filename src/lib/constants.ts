export const SITE_URL = "https://vilayura.com" as const;

export const WHATSAPP_CONFIG = Object.freeze({
  rawNumber: "6287778283084",
  displayNumber: "0877-7828-3084",
  formattedNumber: "+62 877-7828-3084",
  email: "contact@vilayura.com",
});

/**
 * Returns a secure, sanitized WhatsApp URL for click-to-chat.
 * Encodes pre-filled message text to prevent XSS or parameter injection.
 */
export function getWhatsAppLink(message?: string): string {
  const baseUrl = `https://wa.me/${WHATSAPP_CONFIG.rawNumber}`;
  if (!message) return baseUrl;
  const cleanMessage = String(message).trim();
  return `${baseUrl}?text=${encodeURIComponent(cleanMessage)}`;
}

export const PATH_SEGMENTS = {
  villas: { en: "villas", id: "villa" },
  facilities: { en: "facilities", id: "fasilitas" },
  journal: { en: "journal", id: "jurnal" },
} as const;

export type Locale = "en" | "id";
