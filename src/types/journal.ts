export interface JournalPost {
  slug: { en: string; id: string };
  title: { en: string; id: string };
  excerpt: { en: string; id: string };
  date: string; // ISO 8601
  coverImage: { src: string; alt: { en: string; id: string } };
  content: { en: string; id: string }; // Markdown string
  author: string;
}
