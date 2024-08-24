import Anounce from '@/components/Anounce';
import Cta from '@/components/Cta';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import Plans from '@/components/Plans';
import Solutions from '@/components/Solutions';
import Stats from '@/components/Stats';
import Trusted from '@/components/Trusted';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-mybg overflow-x-clip">
      <Anounce />
      <Nav />
      <Hero />
      <Trusted />
      <Solutions />
      <Features />
      <Plans />
      <Stats />
      <Cta />
      <Footer />
    </main>
  );
}
