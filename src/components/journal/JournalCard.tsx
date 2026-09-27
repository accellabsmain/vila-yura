import Link from "next/link";
import { ImageReveal } from "../motion/ImageReveal";
import { JournalPost } from "@/types/journal";
import { Locale } from "@/lib/constants";

export function JournalCard({ post, locale }: { post: JournalPost; locale: Locale }) {
  const date = new Date(post.date).toLocaleDateString(locale === "id" ? "id-ID" : "en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  return (
    <Link href={`/journal/${post.slug[locale]}`} className="group block w-full text-left">
      <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden mb-6 bg-bone">
        <ImageReveal
          src={post.coverImage.src}
          alt={post.coverImage.alt[locale]}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          wrapperClassName="w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-3 px-2">
        <span className="text-xs font-medium text-olive-soft uppercase tracking-wider">{date}</span>
        <h3 className="text-xl font-heading font-medium text-black group-hover:text-olive transition-colors line-clamp-2">
          {post.title[locale]}
        </h3>
        <p className="text-sm text-olive-light line-clamp-3">{post.excerpt[locale]}</p>
      </div>
    </Link>
  );
}
