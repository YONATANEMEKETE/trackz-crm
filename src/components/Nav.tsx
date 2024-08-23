import React from 'react';
import Container from './Container';
import Image from 'next/image';
import logo1 from '../../public/logo1.png';
import Links from './ui/Link';
import { Button } from './ui/button';
import { ArrowUpRight, MoveUpRight } from 'lucide-react';

const Nav = () => {
  return (
    <Container className="fixed z-40 top-16 left-1/2 -translate-x-1/2 bg-white rounded-md shadow-[0px_5px_15px_rgba(0,0,0,0.35)]  w-full">
      <nav className="size-full  flex items-center justify-between  px-4 py-3">
        <div className="flex items-center gap-x-2 cursor-pointer">
          <Image src={logo1} alt="logo" width={50} height={50} className="" />
          <div className="text-3xl text-mytext font-logo font-medium">
            Trackz
          </div>
        </div>

        <div className="flex items-center gap-x-8">
          <Links text="Solution" more={true} />
          <Links text="Pricing" />
          <Links text="Blog" />
          <Links text="Company" hiring={true} />
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant={'outline'}
            size={'lg'}
            className="bg-transparent hover:bg-myaccent hover:text-white rounded-xl  border-myaccent text-mytext text-base font-content font-semibold"
          >
            Login
          </Button>
          <Button
            variant={'default'}
            size={'lg'}
            className="flex items-center bg-myaccent hover:bg-myaccent/90 rounded-xl text-white text-base font-content font-semibold"
          >
            <p>Sign Up</p>
            <ArrowUpRight />
          </Button>
        </div>
      </nav>
    </Container>
  );
};

export default Nav;
