import React from 'react';
import Container from './Container';
import Image from 'next/image';
import logo1 from '../../public/logo1.png';

const Nav = () => {
  return (
    <Container className="fixed top-20 left-1/2 -translate-x-1/2 bg-mybg rounded-md shadow-xl  w-full">
      <nav className="size-full  flex items-center justify-between  px-4 py-3">
        <div className="flex items-center gap-x-2">
          <Image src={logo1} alt="logo" width={50} height={50} className="" />
          <div className="text-3xl text-mytext font-logo font-medium">
            TrackZ
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Nav;
