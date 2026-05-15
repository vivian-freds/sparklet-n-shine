import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { CTASection, Footer } from "@/components/sections";
import { Metadata } from "next";
import { posts } from "./data";

export const metadata: Metadata = {
  title: "Cleaning Blog & Tips | Sparklet & Shine",
  description: "Read the latest tips, guides, and news about professional cleaning, Airbnb turnovers, and eco-friendly home maintenance across Nairobi.",
  openGraph: {
    title: "Cleaning Blog & Tips | Sparklet & Shine",
    description: "Read the latest tips, guides, and news about professional cleaning, Airbnb turnovers, and eco-friendly home maintenance across Nairobi.",
    type: "website",
  }
};

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Sparklet & Shine Cleaning Blog",
    "description": "Expert advice, tips, and insights on residential and commercial cleaning in Nairobi.",
    "url": "https://sparkletandshine.co.ke/blog",
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Organization",
        "name": "Sparklet & Shine Co."
      }
    }))
  };

  return (
    <main className="flex min-h-screen flex-col bg-slate-50/50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Page Header */}
      <section className="relative px-4 pt-32 pb-16 md:px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Cleaning Tips & <span className="text-blue-600">Insights</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Read the latest guides, home maintenance advice, and news from the experts at Sparklet & Shine.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-24 px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-lg">
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-blue-700 backdrop-blur">
                    {post.category}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
                    <CalendarDays className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <h2 className="mb-3 text-xl font-bold leading-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.id}`} className="inline-flex items-center text-sm font-bold text-yellow-600 transition-colors hover:text-yellow-500">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      
      <Footer />
    </main>
  );
}
