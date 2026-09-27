import Link from "next/link";
import { ImageReveal } from "../motion/ImageReveal";

export interface VillaCardProps {
  name: string;
  location: string;
  slug: string;
  shortDescription: string;
  guests: number;
  bedrooms: number;
  thumbnail: { src: string; alt: string };
  href: string; 
}

export function VillaCard({ name, location, shortDescription, guests, bedrooms, thumbnail, href }: VillaCardProps) {
  return (
    <Link href={href} className="group block w-full text-left">
      <div className="relative w-full aspect-[4/5] rounded-[20px] overflow-hidden mb-6 bg-bone">
        <ImageReveal
          src={thumbnail.src}
          alt={thumbnail.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          wrapperClassName="w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-2 px-2">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-heading font-medium text-black group-hover:text-olive transition-colors">
            {name}
          </h3>
          <span className="text-xs font-medium text-olive-soft uppercase tracking-wider">{location}</span>
        </div>
        <p className="text-sm text-olive-light line-clamp-2">{shortDescription}</p>
        <div className="flex gap-4 mt-2 text-xs font-medium text-black/60 uppercase tracking-wider">
          <span>{guests} Guests</span>
          <span>{bedrooms} Bedrooms</span>
        </div>
      </div>
    </Link>
  );
}
