'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from './Container';
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
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
      duration: 0.7,
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
};

const Cta = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <Container className="mx-2 min-[1200px]:mx-auto relative z-10 mt-24 bg-myctaBg rounded-3xl overflow-clip py-16 text-center">
        <motion.h2
          className="text-[1.75rem] md:text-[2.5rem] text-white font-content font-semibold"
          variants={itemVariants}
        >
          Lets get you growing.
        </motion.h2>
        <motion.h2
          className="text-[1.75rem] md:text-[2.5rem] text-white font-content font-semibold"
          variants={itemVariants}
        >
          Without the pains.
        </motion.h2>
        <motion.p
          className="text-mybg/70 text-sm font-heading font-semibold max-w-[500px] mx-auto mt-3"
          variants={itemVariants}
        >
          CRM that works for you, not the other way arround its lightweight,
          customizable and powered by AI.
        </motion.p>
        {/*  */}
        <div className="flex flex-col min-[500px]:flex-row items-center gap-6 mx-auto w-max mt-12">
          <motion.div variants={buttonVariants}>
            <Link href="/login">
              <Button
                variant={'default'}
                size={'lg'}
                className="text-lg font-heading font-semibold text-white bg-myaccent/80 hover:bg-myaccent rounded-xl py-6 transition-colors duration-200"
              >
                Start Free Now
              </Button>
            </Link>
          </motion.div>
          <motion.div variants={buttonVariants}>
            <Link href="/login">
              <Button
                variant={'default'}
                size={'lg'}
                className="text-lg font-heading font-semibold text-mytext bg-mybg hover:bg-gray-200 rounded-xl py-6 transition-colors duration-200"
              >
                Contact Sales
                <ArrowUpRight />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="absolute -z-20 inset-0  overflow-clip">
          <div className="absolute -top-1/3 -left-[95%] size-[1500px] rounded-full bg-myctaBg ring-[60px] ring-myaccent/30"></div>
          <div className="absolute -top-1/3 -right-[90%] size-[1500px] rounded-full bg-myctaBg ring-[60px] ring-myaccent/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-myctaBg via-myctaBg to-transparent"></div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Cta;
