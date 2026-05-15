import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Tag } from "lucide-react";
import { CTASection, Footer } from "@/components/sections";
import { posts } from "../data";

// Generate static params for SSG
export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const post = posts.find((p) => p.id === resolvedParams.id);
  if (!post) {
    return {
      title: "Blog Not Found | Sparklet & Shine",
    };
  }
  return {
    title: `${post.title} | Sparklet & Shine Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const post = posts.find((p) => p.id === resolvedParams.id);

  if (!post) {
    notFound();
  }

  // Format the content paragraphs
  const paragraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Article Header */}
      <section className="px-4 pt-32 pb-10 md:px-6 md:pt-40 bg-slate-50 border-b border-slate-100">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all articles
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2 text-blue-600 font-medium">
              <Tag className="h-4 w-4" />
              <span>{post.category}</span>
            </div>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl leading-tight mb-8">
            {post.title}
          </h1>

          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full overflow-hidden rounded-3xl shadow-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-lg prose-slate prose-blue max-w-none">
            <p className="text-xl leading-relaxed text-slate-600 mb-10 font-medium">
              {post.excerpt}
            </p>
            
            <div className="space-y-8 text-slate-700 leading-relaxed">
              {paragraphs.map((paragraph, index) => {
                // simple markdown-like bold handling for the demo content
                let formattedHtml = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                // handle single newlines as line breaks
                formattedHtml = formattedHtml.replace(/\n/g, '<br />');
                return (
                  <p key={index} dangerouslySetInnerHTML={{ __html: formattedHtml }} />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
