import React from 'react';
import Container from './Container';

function Stats() {
  return (
    <Container className="pt-24 flex items-center justify-between px-32">
      <Stat stat="12+" description="Years of Experience" />
      <Stat stat="286%" description="Average ROI" />
      <Stat stat="25M" description="Net Present Value" />
      <Stat stat="60+" description="markets served" />
    </Container>
  );
}

export default Stats;

interface Props {
  stat: string;
  description: string;
}

const Stat = ({ stat, description }: Props) => {
  return (
    <div className="text-center space-y-4">
      <div className="text-mytext text-[3rem] font-heading font-semibold">
        {stat}
      </div>
      <p className="text-mytextgray text-base font-content font-semibold">
        {description}
      </p>
    </div>
  );
};
