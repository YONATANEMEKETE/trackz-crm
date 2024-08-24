import React from 'react';
import Container from './Container';
import Image from 'next/image';
import logo1 from '../../public/logo1.png';
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';
import { Input } from './ui/input';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-mycardBg/80 mt-20">
      <Container className="py-16 px-6 md:px-12">
        <div className="flex items-center gap-x-2 cursor-pointer">
          <Image src={logo1} alt="logo" width={40} height={40} className="" />
          <div className="text-[2rem] text-mytext font-logo font-medium">
            Trackz
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col lg:flex-row gap-y-16 items-start justify-between mt-16 mb-10">
          <div className="flex flex-wrap items-start gap-y-8 gap-x-12 md:gap-x-24">
            <div className=" space-y-4">
              <div className="text-lg text-mytext font-heading font-bold">
                Invest
              </div>
              <p className="text-sm text-mytextgray font-heading font-semibold hover:underline">
                Business CRM
              </p>
              <p className="text-sm text-mytextgray font-heading font-semibold hover:underline">
                Email Marketing
              </p>
              <p className="text-sm text-mytextgray font-heading font-semibold hover:underline">
                Sales Automation
              </p>
              <p className="text-sm text-mytextgray font-heading font-semibold hover:underline">
                Fundraising
              </p>
            </div>
            <div className=" space-y-4">
              <div className="text-lg text-mytext font-heading font-bold">
                Pricing
              </div>
              <p className="text-sm text-mytextgray font-heading font-semibold hover:underline">
                CRM for service
              </p>
              <p className="text-sm text-mytextgray font-heading font-semibold hover:underline">
                CRM for sales
              </p>
              <p className="text-sm text-mytextgray font-heading font-semibold hover:underline">
                Custome Pricing
              </p>
            </div>
            <div className=" space-y-4">
              <div className="text-lg text-mytext font-heading font-bold">
                Company
              </div>
              <p className="text-sm text-mytextgray font-heading font-semibold hover:underline">
                About Us
              </p>
              <p className="text-sm text-mytextgray font-heading font-semibold hover:underline">
                Contacts
              </p>
              <p className="text-sm text-mytextgray font-heading font-semibold hover:underline">
                Careers
              </p>
              <p className="text-sm text-mytextgray font-heading font-semibold hover:underline">
                Help center
              </p>
            </div>
          </div>

          <div className="">
            <div className="text-lg text-mytext font-heading font-semibold">
              Subscribe
            </div>
            <p className="text-sm text-mytextgray font-heading font-semibold">
              Update for our latest newslater
            </p>

            <div className="mt-8 space-y-3">
              <Input
                placeholder="Your email adress"
                className="border border-myaccent rounded-xl min-w-[250px] md:min-w-[350px] py-5 bg-mybg text-base text-mytext font-heading font-semibold"
              />
              <Button
                variant={'default'}
                size={'lg'}
                className="min-w-[250px] md:min-w-[350px] flex items-center bg-myaccent/90 hover:bg-myaccent rounded-xl text-white text-base font-content font-semibold"
              >
                <p>Sign Up</p>
                <ArrowUpRight />
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-mytextgray mb-10"></div>
        <div className="flex w-full items-center justify-between">
          <p className="text-xs text-mytextgray font-heading font-semibold">
            Trackz copyright 2024. All rights Reserved
          </p>
          <div className="flex items-center gap-4 text-lg min-[500px]:text-2xl text-myaccent">
            <FaTwitter />
            <FaLinkedin />
            <FaFacebook />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
