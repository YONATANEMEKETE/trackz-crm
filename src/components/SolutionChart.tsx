'use client';

import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ScrollParallax } from 'react-just-parallax';

const SolutionChart = () => {
  return (
    <div className="relative w-[270px] h-[220px] bg-white rounded-2xl px-6 py-4 pt-8 translate-x-24 translate-y-28">
      <p className="text-mytextgray text-sm font-heading font-semibold mb-1">
        Subject Line
      </p>
      <h2 className="text-mytext text-base font-content font-semibold mb-4">
        Branding Project
      </h2>
      <p className="text-mytextgray text-sm font-heading font-semibold mb-4">
        Hi, Joe
      </p>
      <div className="w-full h-3 bg-mycardBg rounded-md mb-2"></div>
      <div className="w-3/4 h-3 bg-mycardBg rounded-md"></div>
      <p className="text-sm text-mytextgray font-heading font-semibold mt-4">
        {' '}
        Cheers
      </p>
      {/*  */}
      <Button
        variant={'default'}
        size={'sm'}
        className="absolute top-2 right-3 bg-myctaBg hover:bg-myctaBg/90 text-base text-white font-heading"
      >
        Accept
      </Button>
      <Badge className="absolute -top-2 left-4 bg-myaccent hover:bg-myaccent/90 rounded-md text-xs text-white font-heading">
        Clients
      </Badge>
    </div>
  );
};

export default SolutionChart;
