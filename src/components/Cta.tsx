import React from 'react';
import Container from './Container';
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';

const Cta = () => {
  return (
    <Container className="relative z-10 mt-40 bg-myctaBg rounded-3xl overflow-clip py-24 text-center">
      <h2 className="text-[3rem] text-white font-content font-semibold">
        Lets get you growing.
      </h2>
      <h2 className="text-[3rem] text-white font-content font-semibold">
        Without the pains.
      </h2>
      <p className="text-mybg/70 text-base font-heading font-semibold max-w-[500px] mx-auto mt-4">
        CRM that works for you, not the other way arround its lightweight,
        customizable and powered by AI.
      </p>
      {/*  */}
      <div className="flex items-center gap-6 mx-auto w-max mt-12">
        <Button
          variant={'default'}
          size={'lg'}
          className="text-lg font-heading font- text-white bg-myaccent/80 hover:bg-myaccent/90 rounded-xl py-6"
        >
          Start Free Now
        </Button>
        <Button
          variant={'default'}
          size={'lg'}
          className="text-lg font-heading font-semibold text-mytext bg-mybg hover:bg-mybg rounded-xl py-6"
        >
          Contact Sales
          <ArrowUpRight />
        </Button>
      </div>

      <div className="absolute -z-20 inset-0  overflow-clip">
        <div className="absolute -top-1/3 -left-[95%] size-[1500px] rounded-full bg-myctaBg ring-[60px] ring-myaccent/30"></div>
        <div className="absolute -top-1/3 -right-[90%] size-[1500px] rounded-full bg-myctaBg ring-[60px] ring-myaccent/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-myctaBg via-myctaBg to-transparent"></div>
      </div>
    </Container>
  );
};

export default Cta;
