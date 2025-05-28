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
      <section className="container max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl tracking-tight font-semibold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-slate-100 dark:via-slate-300 dark:to-slate-100 bg-clip-text text-transparent mb-2">
            Color Accessibility Made Simple
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Ensure your designs are accessible to everyone with our powerful contrast ratio checker
          </p>
        </div>

        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/60 dark:border-slate-800/60 shadow-sm hover:shadow-md dark:hover:shadow-slate-900/50 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-4"></div>
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">
                About Lumen
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Lumen is an accessibility-focused tool for designers and developers to check if their color choices meet accessibility standards quickly and accurately.
            </p>
          </div>
          
          <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/60 dark:border-slate-800/60 shadow-sm hover:shadow-md dark:hover:shadow-slate-900/50 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full mr-4"></div>
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">
                How it works
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Lumen analyzes the contrast between two colors to determine if they meet the accessibility requirements outlined in WCAG standards. 
              Simply input hex codes or select colors, and Lumen will evaluate whether your design achieves the recommended contrast ratio for readability and inclusivity.
            </p>
          </div>
        </div>

        {/* Main Tool Section */}
        <HomePage />
      </section>

      {/* Footer Section */}
      <div className="border-t border-slate-200/60 dark:border-slate-800/60 bg-white/60 dark:bg-slate-950/60 backdrop-blur-sm">
        <div className="container max-w-6xl mx-auto px-6 py-8">
          <Footer />
        </div>
      </div>
    </div>
  );
}