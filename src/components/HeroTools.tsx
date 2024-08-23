import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface HeroToolsProps {
  text: string;
  image: any;
}

const HeroTools = ({ text, image }: HeroToolsProps) => {
  return (
    <div className="h-28 w-24 bg-white shadow-2xl rounded-lg px-4 py-4 space-y-3 cursor-pointer">
      <Image
        src={image}
        alt="icon tools"
        width={40}
        height={40}
        className="mx-auto"
      />
      <p className="mx-auto text-sm text-mytext font-content font-semibold text-center">
        {text}
      </p>
    </div>
  );
};

export default HeroTools;
