import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";
import { Footer } from "@/components/sections";
import { Logo } from "@/components/ui/logo";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <div className="flex-1 flex flex-col items-center justify-center p-4 pt-32 pb-24 text-center">
        {/* Animated Icon */}
        <div className="relative mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-blue-100 shadow-inner">
          <div className="absolute inset-0 animate-ping rounded-full bg-blue-100 opacity-20"></div>
          <Search className="h-12 w-12 text-blue-600" />
        </div>

        <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-blue-600">404</h1>
        <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Page Not Found</h2>
        
        <p className="mb-10 max-w-md text-lg text-slate-600">
          Oops! It looks like we swept this page away. The link you followed might be broken, or the page may have been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link 
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-700 shadow-md border border-slate-200 transition-all hover:bg-slate-50 hover:shadow-lg hover:-translate-y-1"
          >
            View Our Services
          </Link>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
