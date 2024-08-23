import Anounce from '@/components/Anounce';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import Trusted from '@/components/Trusted';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-mybg pb-40">
      <Anounce />
      <Nav />
      <Hero />
      <Trusted />
    </main>
  );
}
