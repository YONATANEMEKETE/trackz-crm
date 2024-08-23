import Anounce from '@/components/Anounce';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-mybg/90">
      <Anounce />
      <Nav />
      <Hero />
    </main>
  );
}
