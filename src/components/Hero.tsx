import React from 'react';
import { Button } from './ui/button';
import { CirclePlay } from 'lucide-react';
import { MdOutlinePlayCircleFilled } from 'react-icons/md';
import Container from './Container';
import HeroTools from './HeroTools';
import gmail from '../../public/gmail.svg';
import dropbox from '../../public/dropbox.svg';
import paypal from '../../public/paypal.svg';
import slack from '../../public/slack.svg';
import wallet from '../../public/wallet.svg';
import discord from '../../public/discord.svg';
import shopify from '../../public/shopify.svg';
import HeroChart from './HeroChart';
import HeroChart2 from './HeroChart2';
import logo1 from '../../public/logo1.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <main className="min-h-screen pt-52 pb-40 space-y-12">
      <div className="max-w-[800px] mx-auto text-center">
        <div className="text-[4rem] leading-tight tracking-wide text-mytext font-content font-bold mb-8">
          One smart solution tool for your business
        </div>

        <p className="max-w-[600px] mx-auto text-xl leading-normal text-mytextgray font-heading font-medium mb-12">
          CRM that works for you. not the other way arround, it is Lightweight,
          Customizable and Powered by AI
        </p>

        <div className="flex items-center gap-4 mx-auto w-max">
          <Button
            variant={'default'}
            size={'lg'}
            className="text-lg font-heading font-semibold text-white bg-myaccent hover:bg-myaccent/90 rounded-2xl py-8"
          >
            Start Free Now
          </Button>
          <Button
            variant={'outline'}
            size={'lg'}
            className="bg-transparent hover:bg-transparent border-myaccent/50 rounded-2xl py-8 text-lg text-mytext font-heading font-semibold flex items-center gap-2"
          >
            <MdOutlinePlayCircleFilled size={28} />
            <p>Watch Demo</p>
          </Button>
        </div>
      </div>

      <Container className="flex items-center justify-between pt-10">
        <div className="flex items-center gap-4">
          <div className="space-y-3 -translate-y-10">
            <HeroTools text="Emailing" image={gmail} />
            <HeroTools text="Storage" image={dropbox} />
          </div>
          <div className="space-y-3">
            <HeroTools text="Billing" image={paypal} />
            <HeroTools text="Texting" image={slack} />
            <HeroTools text="Manage" image={wallet} />
          </div>
          <div className="space-y-3">
            <HeroTools text="Voicemail" image={discord} />
            <HeroTools text="Marketing" image={shopify} />
          </div>
        </div>
        {/*  */}
        <div className="size-20 relative ring-8 ring-mylogoBorder rounded-tr-2xl rounded-bl-2xl">
          <Image
            src={logo1}
            alt="logo Trackz"
            fill
            className="object-contain"
          />
        </div>
        {/*  */}
        <div className="relative px-4 py-4">
          <HeroChart />
          <HeroChart2 />
        </div>
      </Container>
    </main>
  );
};

export default Hero;
