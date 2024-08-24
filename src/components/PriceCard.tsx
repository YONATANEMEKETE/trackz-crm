import Image from 'next/image';
import React from 'react';
import logo1 from '../../public/logo1.png';
import logo2 from '../../public/logo2.png';
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';

type PriceCardProps = {
  variant: 'basic' | 'premium';
  title: string;
  desciption: string;
  price: string;
};

const PriceCard = ({ variant, title, desciption, price }: PriceCardProps) => {
  if (variant === 'basic') {
    return (
      <div className="flex-1 min-w-[300px] max-w-[550px] px-12 py-12 bg-myaccent/90 rounded-2xl">
        <div className="size-12 relative ring-4 ring-mycardBg/50 rounded-tr-lg rounded-bl-lg mb-10">
          <Image
            src={logo2}
            alt="logo Trackz"
            fill
            className="object-contain"
          />
        </div>

        <h2 className="text-white text-3xl font-content font-bold text-start mb-4">
          {title}
        </h2>
        <p className="text-white text-lg font-heading font-medium text-start mb-10">
          {desciption}
        </p>

        <Button
          variant={'default'}
          size={'lg'}
          className="w-full bg-white hover:bg-white  py-8 rounded-xl flex items-center justify-between"
        >
          <p className="text-myaccent text-lg font-content font-semibold">
            {price}
          </p>
          <ArrowUpRight size={28} className="text-myaccent" />
        </Button>
      </div>
    );
  }

  if (variant === 'premium') {
    return (
      <div className="flex-1 min-w-[300px] max-w-[550px] px-12 py-12 bg-mycardBg rounded-2xl">
        <div className="size-12 relative ring-4 ring-mylogoBorder rounded-tr-lg rounded-bl-lg mb-10">
          <Image
            src={logo1}
            alt="logo Trackz"
            fill
            className="object-contain"
          />
        </div>

        <h2 className="text-mytext text-3xl font-content font-bold text-start mb-4">
          {title}
        </h2>
        <p className="text-mytext text-lg font-heading font-medium text-start mb-10">
          {desciption}
        </p>

        <Button
          variant={'default'}
          size={'lg'}
          className="w-full bg-myaccent/90 hover:bg-myaccent  py-8 rounded-xl flex items-center justify-between"
        >
          <p className="text-white text-lg font-content font-medium">{price}</p>
          <ArrowUpRight size={28} />
        </Button>
      </div>
    );
  }
};

export default PriceCard;
