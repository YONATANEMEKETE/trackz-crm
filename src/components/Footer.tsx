'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from './Container';
import Image from 'next/image';
import logo1 from '../../public/logo1.png';
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';
import { Input } from './ui/input';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const Footer = () => {
  return (
    <motion.div
      className="w-full bg-mycardBg/80 mt-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <Container className="py-16 px-6 md:px-12">
        <motion.div
          className="flex items-center gap-x-2 cursor-pointer"
          variants={itemVariants}
        >
          <Image src={logo1} alt="logo" width={40} height={40} className="" />
          <div className="text-[2rem] text-mytext font-logo font-medium">
            Trackz
          </div>
        </motion.div>
        {/*  */}
        <div className="flex flex-col lg:flex-row gap-y-16 items-start justify-between mt-16 mb-10">
          <motion.div
            className="flex flex-wrap items-start gap-y-8 gap-x-12 md:gap-x-24"
            variants={columnVariants}
          >
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
          </motion.div>

          <motion.div className="" variants={columnVariants}>
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
                className="min-w-[250px] md:min-w-[350px] flex items-center bg-myaccent/90 hover:bg-myaccent rounded-xl text-white text-base font-content font-semibold transition-colors duration-200"
              >
                <p>Sign Up</p>
                <ArrowUpRight />
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="w-full h-[1px] bg-mytextgray mb-10"
          variants={itemVariants}
        ></motion.div>
        <motion.div
          className="flex w-full items-center justify-between"
          variants={itemVariants}
        >
          <p className="text-xs text-mytextgray font-heading font-semibold">
            Trackz copyright 2024. All rights Reserved
          </p>
          <div className="flex items-center gap-4 text-lg min-[500px]:text-2xl text-myaccent">
            <FaTwitter />
            <FaLinkedin />
            <FaFacebook />
          </div>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Footer;
