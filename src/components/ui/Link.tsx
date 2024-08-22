import { ChevronDown } from 'lucide-react';
import React from 'react';
import { Badge } from './badge';

interface LinkProps {
  text: string;
  more?: boolean;
  hiring?: boolean;
}

const Links = ({ text, more, hiring }: LinkProps) => {
  if (more) {
    return (
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="text-base text-mytext font-content font-semibold cursor-pointer">
          {text}
        </div>
        <ChevronDown />
      </div>
    );
  }

  if (hiring) {
    return (
      <div className="flex items-start gap-2">
        <div className="text-base text-mytext font-content font-semibold cursor-pointer">
          {text}
        </div>
        <Badge
          variant={'outline'}
          className="text-sm font-content font-medium text-myaccent bg-mylogoBorder rounded-md"
        >
          Hiring
        </Badge>
      </div>
    );
  }

  return (
    <div className="text-base text-mytext font-content font-semibold cursor-pointer">
      {text}
    </div>
  );
};

export default Links;
