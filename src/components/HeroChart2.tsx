import { ArrowUpRight } from 'lucide-react';
import React from 'react';

const HeroChart2 = () => {
  return (
    <div className="absolute -top-6 -right-4 w-[170px] h-[100px] bg-white rounded-xl shadow-xl px-6 py-4">
      <div className="w-12 h-1 bg-myaccent/70 rounded-md mb-2"></div>
      <div className="flex items-center gap-4">
        <p className="text-3xl text-mytext font-heading font-semibold">150%</p>
        <ArrowUpRight />
      </div>
      <p className="text-base text-mytextgray font-heading font-semibold">
        Increase Rate
      </p>
    </div>
  );
};

export default HeroChart2;
