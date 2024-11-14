import { Footer } from '../components/Footer/Footer';
import HomePage from '../components/Home/HomePage';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container max-w-5xl mx-auto p-4">
      <section className="flex flex-row mb-8 items-center">
        <h1 className="text-6xl font-semibold justify-start tracking-tighter">
          Lumen
        </h1>
        <Image alt="lumen icon" src="/images/prism.png" height={40} width={40}/>
      </section>
      <div className="flex items-center justify-center">
        <div className="w-full">
          <HomePage />
        </div>
        <Footer />
      </div>
    </div>
  );
}
