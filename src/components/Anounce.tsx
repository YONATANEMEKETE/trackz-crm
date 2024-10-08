import React from 'react';
import { Button } from './ui/button';
import { X } from 'lucide-react';

const Anounce = () => {
  return (
    <div className="fixed z-40 top-0 inset-x-0 h-10 bg-myctaBg/90 hidden min-[500px]:grid place-content-center">
      <div className="md:text-base text-xs text-white font-content font-normal">
        A New Breakthrough AI bot. --- Resolve 50% of your questions. Instantly
      </div>
      <Button
        variant={'outline'}
        size={'icon'}
        className="group absolute right-4 size-4 md:size-6 bg-transparent top-1/2 -translate-y-1/2 rounded-none"
      >
        <X className="text-white group-hover:text-mytext" />
      </Button>
    </div>
  );
};

export default Anounce;
