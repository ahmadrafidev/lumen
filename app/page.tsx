import { Footer } from '../components/Footer/Footer';
import HomePage from '../components/Home/HomePage';
import { Header } from '../components/Header/Header';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container max-w-5xl mx-auto p-4">
        <Header />
      </div>
      <section className="container max-w-5xl mx-auto p-4 space-y-6 flex-grow">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col text-justify">
            <h2 className="text-lg text-gray-700 font-semibold tracking-tight">
              About Lumen
            </h2>
            <p className="text-gray-600">
              Lumen is an accessibility-focused tool for designers or developers to check if their color choices meet accessibility standards quickly and accurately.
            </p>
          </div>
          <div className="flex flex-col text-justify">
            <h2 className="text-lg text-gray-700 font-semibold tracking-tight">
              How it works?
            </h2>
            <p className="text-gray-600">
              Lumen checks if two colors have enough contrast for accessibility. 
              Enter hex codes or pick colors to see if they meet WCAG standards. 
              If they do not pass, Lumen suggests adjustments to make your design more readable.
            </p>
          </div>
        </div>
        <HomePage />
      </section>
      <div className="container max-w-5xl mx-auto p-4">
        <Footer />
      </div>
    </div>
  );
}