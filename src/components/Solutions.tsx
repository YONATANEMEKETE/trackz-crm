import React from 'react';
import Container from './Container';
import { Button } from './ui/button';
import { Layers } from 'lucide-react';
import { FaLayerGroup } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';

const Solutions = () => {
  return (
    <Container className="py-16 pt-28 px-8">
      <Button
        variant={'outline'}
        size={'lg'}
        className="rounded-xl bg-transparent hover:bg-transparent hover:text-myaccent text-lg text-myaccent border-myaccent/80 font-heading font-semibold mb-8"
      >
        Solutions
      </Button>

      <div className="flex items-center justify-between mb-20">
        <h2 className="text-[2.5rem] max-w-[40%] text-mytext font-content font-bold">
          Build A Solution That's truly Your own
        </h2>
        <p className="text-base text-mytextgray  font-heading font-semibold max-w-[45%] w-max">
          Manage All things equity in one place, with Trackz you get the all in
          one sales and marketing automation plateform designed to help your
          small business to grow.
        </p>
      </div>
      {/*  */}
      <div className="flex justify-between gap-20">
        <div className="bg-mycardBg rounded-xl flex-1"></div>
        <div className="space-y-6">
          <Solution
            heading="Business CRM"
            description="Get organized and automate follow-up with keap’s client managment software"
            icon={
              <FaLayerGroup size={24} className="group-hover:text-myaccent" />
            }
          />
          <Solution
            heading="Email Marketing"
            description="Convert more leads with easy-to-build emails, plus automation and CRM"
            icon={<IoIosMail size={24} className="group-hover:text-myaccent" />}
          />
          <Solution
            heading="Sales Automation"
            description="Automation capabilities were built to  amplify evry stage of your sales cycle"
            icon={
              <RiMoneyDollarCircleFill
                size={24}
                className="group-hover:text-myaccent"
              />
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default Solutions;

interface Props {
  heading: string;
  description: string;
  icon: any;
}

const Solution = ({ heading, description, icon }: Props) => {
  return (
    <div className="group flex items-center gap-10 cursor-pointer">
      <div className="w-1 h-32 bg-mycardBg group-hover:bg-myaccent rounded-full"></div>
      <div className="flex items-start gap-4">
        {icon}
        <div className="space-y-2">
          <h1 className="group-hover:text-myaccent text-xl text-mytext font-content font-semibold">
            {heading}
          </h1>
          <p className="text-base text-mytextgray font-heading font-semibold max-w-[350px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
