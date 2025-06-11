import { Footer } from '../components/Footer/Footer';
import HomePage from '../components/Home/HomePage';
import { Header } from '../components/Header/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Header Section */}
      <div className="border-b border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container max-w-6xl mx-auto px-6 py-4">
          <Header />
        </div>
      </div>

      {/* Hero Section */}
      <section className="container max-w-6xl mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl tracking-tighter font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
            Lumen - Fast, Accessible Color Contrast Checker
          </h1>
          <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Check WCAG accessibility compliance instantly with Lumen
          </p>
        </div>

        {/* Main Tool Section */}
        <HomePage />
      </section>

      {/* Footer Section */}
      <div className="border-t border-slate-200/60 dark:border-slate-800/60 bg-white/60 dark:bg-slate-950/60 backdrop-blur-sm mt-12">
        <div className="container max-w-6xl mx-auto px-6 py-8">
          <Footer />
        </div>
      </div>
    </div>
  );
}