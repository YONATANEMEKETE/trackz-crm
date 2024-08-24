import React from 'react';
import Container from './Container';
import { Button } from './ui/button';
import Feature from './Feature';
import { BiSolidBellRing } from 'react-icons/bi';
import { FaChartPie } from 'react-icons/fa';
import { BsToggles } from 'react-icons/bs';
import { BsLightningChargeFill } from 'react-icons/bs';
import { BsStars } from 'react-icons/bs';
import { ArrowUpRight } from 'lucide-react';

const Features = () => {
  return (
    <div className="lg:mx-10 pt-20 pb-20 px-2 min-h-screen bg-mycardBg rounded-2xl text-center overflow-clip">
      <Button
        variant={'outline'}
        size={'lg'}
        className="rounded-xl bg-transparent hover:bg-transparent hover:text-myaccent text-lg text-myaccent border-myaccent/80 font-heading font-semibold mb-8"
      >
        Features
      </Button>

      <h2 className="text-[2rem] md:text-[3rem] text-mytext font-heading font-semibold max-w-[700px] mx-auto mb-4">
        Your Customers are always Connected.
      </h2>

      <p className="text-mytextgray text-base md:text-lg font-content font-semibold max-w-[500px] mx-auto">
        Customer relationship Managment tool for everyone who values
        collaboration
      </p>
      {/*  */}
      <Container className="border pt-10 flex items-center gap-8 flex-wrap justify-center mb-24">
        <Feature
          icon={<FaChartPie size={28} className="text-myaccent" />}
          title="Contact Analysis"
          description="Get Deeper into your contacts at a single glance"
        />
        <Feature
          icon={<BsToggles size={28} className="text-myaccent" />}
          title="Tiered Sorting"
          description="Organize your contacts in any way that comes to tour mind"
        />
        <Feature
          icon={<BiSolidBellRing size={28} className="text-myaccent" />}
          title="Automatic Enrichment"
          description="Get notified when someone sends you a message"
        />
        <Feature
          icon={<BsLightningChargeFill size={28} className="text-myaccent" />}
          title="Quick Actions"
          description="streamline your workflow with easy and cutomizabe shortcuts"
        />
        <Feature
          icon={<BsStars size={28} className="text-myaccent" />}
          title="Powered by AI"
          description="AI content assistant is the extra pair of helping hands you need"
        />
      </Container>

      <Button
        variant={'default'}
        size={'lg'}
        className="flex items-center bg-myaccent/80 py-8 hover:bg-myaccent/90 rounded-xl text-white text-base font-content font-semibold mx-auto"
      >
        <p>Learn More</p>
        <ArrowUpRight />
      </Button>
    </div>
  );
};

export default Features;
