import React from 'react';
import Container from './Container';
import Image from 'next/image';
import trustedHubspot from '../../public/trustedHubspot.svg';
import trustedInstacart from '../../public/trustedInstacart.svg';
import trustedFedEX from '../../public/trustedFedEx.svg';
import trustedShpify from '../../public/trustedShopify.svg';
import trustedSlack from '../../public/trustedSlack.svg';

const Trusted = () => {
  return (
    <Container className="mx-4 min-[1200px]:mx-auto px-6 md:px-12 lg:px-28 py-10 md:py-20 space-y-16 bg-myaccent/90 rounded-2xl text-center">
      <div className="text-xl text-white font-content font-medium mx-auto">
        Trusted by Worlds Best Companies
      </div>

      <div className="flex flex-wrap items-center gap-4 gap-y-6 justify-center min-[530px]:justify-between">
        <Companies image={trustedInstacart} />
        <Companies image={trustedSlack} />
        <Companies image={trustedHubspot} />
        <Companies image={trustedShpify} />
        <Companies image={trustedFedEX} />
      </div>
    </Container>
  );
};

export default Trusted;

const Companies = ({ image }: { image: any }) => {
  return (
    <Image src={image} alt="logo companies" width={120} className="h-auto" />
  );
};
