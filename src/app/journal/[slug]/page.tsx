import { notFound } from "next/navigation";
import { journalPosts } from "@/data/journal";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Locale } from "@/lib/constants";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const loc: Locale = "id";
  const post = journalPosts.find((p) => p.slug.en === slug || p.slug.id === slug);
  
  if (!post) return {};
  
  return {
    title: post.title[loc],
    description: post.excerpt[loc],
  };
}

export default async function JournalPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loc: Locale = "id";
  const post = journalPosts.find((p) => p.slug.en === slug || p.slug.id === slug);
  
  if (!post) notFound();

  const date = new Date(post.date).toLocaleDateString(loc === "id" ? "id-ID" : "en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  return (
    <article className="pt-32 pb-32">
      <Container className="max-w-3xl">
        <Reveal>
          <div className="mb-12 text-center">
            <span className="text-sm font-medium text-olive-soft uppercase tracking-wider mb-6 block">
              {date} • {post.author}
            </span>
            <h1 className="text-h1 font-heading mb-8">{post.title[loc]}</h1>
          </div>
        </Reveal>
      </Container>
      
      <Container className="max-w-5xl">
        <Reveal delay={0.2} className="w-full aspect-[16/9] min-h-[400px] mb-16 rounded-[28px] overflow-hidden relative bg-bone">
          <ImageReveal 
            src={post.coverImage.src} 
            alt={post.coverImage.alt[loc]} 
            fill
            sizes="100vw"
            className="object-cover"
            wrapperClassName="w-full h-full"
            priority
          />
        </Reveal>
      </Container>
      
      <Container className="max-w-3xl">
        <Reveal>
          <div className="prose prose-lg prose-olive mx-auto whitespace-pre-wrap">
            {post.content[loc]}
          </div>
        </Reveal>
      </Container>
    </article>
  );
}
