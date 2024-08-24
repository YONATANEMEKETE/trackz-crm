import React from 'react';
import Container from './Container';
import { Button } from './ui/button';
import PriceCard from './PriceCard';

const Plans = () => {
  return (
    <Container className="pt-28 text-center">
      <Button
        variant={'outline'}
        size={'lg'}
        className="rounded-xl bg-transparent hover:bg-transparent hover:text-myaccent text-lg text-myaccent border-myaccent/80 font-heading font-semibold mb-8"
      >
        Plans
      </Button>

      <h2 className="text-[3rem] text-mytext font-heading font-semibold max-w-[700px] mx-auto mb-4">
        From nothing to Something
      </h2>

      <p className="text-mytextgray text-lg font-content font-semibold max-w-[500px] mx-auto">
        Designed for every stage of your journey. start today, no credit card
        required
      </p>

      <div className="flex gap-10 justify-center pt-20">
        <PriceCard
          variant="basic"
          title="CRM For Services"
          desciption="Our service solution lets you personalize customers experiances, Building loyality and Revenue"
          price="$49 / Month"
        />
        <PriceCard
          variant="premium"
          title="CRM For Sales"
          desciption="Our sales frees tou to maximize productivity, maintain pipeline vissiblity, and grow revenue"
          price="$99 / Month"
        />
      </div>
    </Container>
  );
};

export default Plans;
