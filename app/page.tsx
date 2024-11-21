import { Footer } from '../components/Footer/Footer';
import HomePage from '../components/Home/HomePage';
import { Header } from '../components/Header/Header';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container max-w-5xl mx-auto p-4">
        <Header />
      </div>
      <section className="container max-w-5xl mx-auto p-4 space-y-4 flex-grow">
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
              Lumen analyzes the contrast between two colors to determine if they meet the accessibility requirements outlined in WCAG standards. 
              Simply input hex codes or select colors, and Lumen will evaluate whether your design achieves the recommended contrast ratio for readability and inclusivity.
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