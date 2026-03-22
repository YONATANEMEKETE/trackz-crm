'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { CirclePlay } from 'lucide-react';
import { MdOutlinePlayCircleFilled } from 'react-icons/md';
import Container from './Container';

import HeroChart from './HeroChart';
import HeroChart2 from './HeroChart2';
import logo1 from '../../public/logo1.png';
import Image from 'next/image';
import HeroToolsJoined from './HeroToolsJoined';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
  tap: {
    scale: 0.98,
  },
};

const chartVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      delay: 0.6,
    },
  },
};

const Hero = () => {
  return (
    <motion.main
      className="relative z-10 min-h-screen pt-40 min-[500px]:pt-52 pb-32 px-4 space-y-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-[800px] mx-auto text-center">
        <motion.div
          className="text-[3rem] md:text-[4rem] leading-tight tracking-wide text-mytext font-content font-bold mb-8"
          variants={itemVariants}
        >
          One smart solution tool for your business
        </motion.div>

        <motion.p
          className="max-w-[600px] mx-auto text-lg md:text-xl leading-normal text-mytextgray font-heading font-medium mb-12"
          variants={itemVariants}
        >
          CRM that works for you. not the other way arround, it is Lightweight,
          Customizable and Powered by AI
        </motion.p>

        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 flex-wrap items-center gap-4 mx-auto w-max">
          <motion.div variants={buttonVariants}>
            <Button
              variant={'default'}
              size={'lg'}
              className="text-lg font-heading font-semibold text-white bg-myaccent hover:bg-myaccent/90 rounded-2xl py-8 transition-colors duration-200"
            >
              Start Free Now
            </Button>
          </motion.div>
          <motion.div variants={buttonVariants}>
            <Button
              variant={'outline'}
              size={'lg'}
              className="bg-transparent hover:bg-myaccent hover:text-white border-myaccent/50 rounded-2xl py-8 text-lg font-heading font-semibold flex items-center gap-2 transition-colors duration-200"
            >
              <MdOutlinePlayCircleFilled size={28} />
              <p>Watch Demo</p>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div variants={chartVariants}>
        <Container className="flex items-center justify-center lg:justify-between pt-10 max-w-[1100px] mx-auto">
          <motion.div variants={itemVariants}>
            <HeroToolsJoined />
          </motion.div>
          {/*  */}
          <motion.div
            className="hidden lg:block size-20 relative ring-8 ring-mylogoBorder rounded-tr-2xl rounded-bl-2xl"
            variants={itemVariants}
          >
            <Image
              src={logo1}
              alt="logo Trackz"
              fill
              className="object-contain"
            />
          </motion.div>
          {/*  */}
          <motion.div className="relative px-4 py-4" variants={itemVariants}>
            <HeroChart />
            <HeroChart2 />
          </motion.div>
        </Container>
      </motion.div>
      {/*  */}

      <div className="absolute -z-20 inset-0 h-[90vh] overflow-clip">
        <div className="absolute -top-1/3 -left-[95%] size-[1800px] rounded-full bg-mybg ring-[70px] ring-myaccent/10"></div>
        <div className="absolute -top-1/3 -right-[90%] size-[1700px] rounded-full bg-mybg ring-[70px] ring-myaccent/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-mybg via-mybg to-transparent"></div>
      </div>
    </motion.main>
  );
};

export default Hero;
