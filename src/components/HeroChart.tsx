'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { ScrollParallax } from 'react-just-parallax';

const HeroChart = () => {
  return (
    <ScrollParallax strength={0.06}>
      <div className="relative w-[350px] h-[250px] bg-white rounded-xl shadow-2xl py-4 px-6">
        <h2 className="text-lg text-mytext font-heading font-semibold mb-10">
          Business Growth
        </h2>
        <div className="space-y-4">
          <Ycolumn text={500} />
          <Ycolumn text={250} />
          <Ycolumn text={100} />
          <Ycolumn text={0} />
        </div>
        <Xcolumn text="2 June" h1="h-12" h2="h-10" left="left-[15%]" />
        <Xcolumn text="9 June" h1="h-[4.5rem]" h2="h-8" left="left-[35%]" />
        <Xcolumn text="16 June" h1="h-[3.5rem]" h2="h-12" left="left-[55%]" />
        <Xcolumn text="23 June" h1="h-8" h2="h-20" left="left-[75%]" />
      </div>
    </ScrollParallax>
  );
};

export default HeroChart;

const Ycolumn = ({ text }: { text: number }) => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-xs text-mytextgray font-heading font-semibold">
        {text}
      </p>
      <div className="basis-[90%] h-[1px] bg-mylogoBorder"></div>
    </div>
  );
};

const Xcolumn = ({
  text,
  h1,
  h2,
  left,
}: {
  text: string;
  h1: string;
  h2: string;
  left: string;
}) => {
  return (
    <div
      className={cn(
        'absolute bottom-[31px]  flex flex-col items-center gap-4',
        left
      )}
    >
      <div className="flex items-end gap-2">
        <div className={cn('w-4  bg-mylogoBorder rounded-t-sm', h1)}></div>
        <div className={cn('w-4 bg-myaccent/80 rounded-t-sm', h2)}></div>
      </div>

      <p className="text-xs text-mytextgray font-heading font-semibold">
        {text}
      </p>
    </div>
  );
};
