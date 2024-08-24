import React from 'react';
import { Button } from './ui/button';
import { CirclePlay } from 'lucide-react';
import { MdOutlinePlayCircleFilled } from 'react-icons/md';
import Container from './Container';

import HeroChart from './HeroChart';
import HeroChart2 from './HeroChart2';
import logo1 from '../../public/logo1.png';
import Image from 'next/image';
import HeroToolsJoined from './HeroToolsJoined';

const Hero = () => {
  return (
    <main className="relative z-10 min-h-screen pt-40 min-[500px]:pt-52 pb-32 px-4 space-y-12">
      <div className="max-w-[800px] mx-auto text-center">
        <div className=" text-[3rem] md:text-[4rem] leading-tight tracking-wide text-mytext font-content font-bold mb-8">
          One smart solution tool for your business
        </div>

        <p className="max-w-[600px] mx-auto text-lg md:text-xl leading-normal text-mytextgray font-heading font-medium mb-12">
          CRM that works for you. not the other way arround, it is Lightweight,
          Customizable and Powered by AI
        </p>

        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 flex-wrap items-center gap-4 mx-auto w-max">
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

      <Container className="flex items-center justify-center lg:justify-between pt-10 max-w-[1100px] mx-auto">
        <HeroToolsJoined />
        {/*  */}
        <div className="hidden lg:block size-20 relative ring-8 ring-mylogoBorder rounded-tr-2xl rounded-bl-2xl">
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
      {/*  */}

      <div className="absolute -z-20 inset-0 h-[90vh] overflow-clip">
        <div className="absolute -top-1/3 -left-[95%] size-[1800px] rounded-full bg-mybg ring-[70px] ring-myaccent/10"></div>
        <div className="absolute -top-1/3 -right-[90%] size-[1700px] rounded-full bg-mybg ring-[70px] ring-myaccent/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-mybg via-mybg to-transparent"></div>
      </div>
    </main>
  );
};

export default Hero;
