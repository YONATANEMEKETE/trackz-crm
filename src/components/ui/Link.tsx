'use client';

import { ChevronDown } from 'lucide-react';
import React from 'react';
import { Badge } from './badge';

interface LinkProps {
  text: string;
  href?: string;
  more?: boolean;
  hiring?: boolean;
}

const Links = ({ text, href, more, hiring }: LinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (href) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (more) {
    return (
      <div className="flex items-center gap-2 cursor-pointer group" onClick={handleClick}>
        <div className="text-base text-mytext font-content font-semibold cursor-pointer group-hover:text-myaccent transition-colors duration-200">
          {text}
        </div>
        <ChevronDown className="group-hover:text-myaccent transition-colors duration-200" />
      </div>
    );
  }

  if (hiring) {
    return (
      <div className="flex items-start gap-2 group cursor-pointer" onClick={handleClick}>
        <div className="text-base text-mytext font-content font-semibold cursor-pointer group-hover:text-myaccent transition-colors duration-200">
          {text}
        </div>
        <Badge
          variant={'outline'}
          className="text-sm font-content font-medium text-myaccent bg-mylogoBorder/60 rounded-md"
        >
          Hiring
        </Badge>
      </div>
    );
  }

  return (
    <div className="text-base text-mytext font-content font-semibold cursor-pointer hover:text-myaccent transition-colors duration-200" onClick={handleClick}>
      {text}
    </div>
  );
};

export default Links;
