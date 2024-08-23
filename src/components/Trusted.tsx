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
    <Container className="px-28 py-12 space-y-10 bg-myaccent/90 rounded-2xl text-center">
      <div className="text-xl text-white font-content font-medium mx-auto">
        Trusted by World's Best Companies
      </div>

      <div className="flex flex-wrap itemsc justify-between">
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
