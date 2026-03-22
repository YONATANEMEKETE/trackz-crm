'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from './Container';
import { Button } from './ui/button';
import Feature from './Feature';
import { BiSolidBellRing } from 'react-icons/bi';
import { FaChartPie } from 'react-icons/fa';
import { BsToggles } from 'react-icons/bs';
import { BsLightningChargeFill } from 'react-icons/bs';
import { BsStars } from 'react-icons/bs';
import { ArrowUpRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
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

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const Features = () => {
  return (
    <motion.div
      className="lg:mx-10 pt-20 pb-20 px-2 min-h-screen bg-mycardBg rounded-2xl text-center overflow-clip"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div variants={itemVariants}>
        <Button
          variant={'outline'}
          size={'lg'}
          className="rounded-xl bg-transparent hover:bg-transparent hover:text-myaccent text-lg text-myaccent border-myaccent/80 font-heading font-semibold mb-8"
        >
          Features
        </Button>
      </motion.div>

      <motion.h2
        className="text-[2rem] md:text-[3rem] text-mytext font-heading font-semibold max-w-[700px] mx-auto mb-4"
        variants={itemVariants}
      >
        Your Customers are always Connected.
      </motion.h2>

      <motion.p
        className="text-mytextgray text-base md:text-lg font-content font-semibold max-w-[500px] mx-auto"
        variants={itemVariants}
      >
        Customer relationship Managment tool for everyone who values
        collaboration
      </motion.p>
      {/*  */}
      <Container className="border pt-10 flex items-center gap-8 flex-wrap justify-center mb-24">
        <motion.div variants={cardVariants}>
          <Feature
            icon={<FaChartPie size={28} className="text-myaccent" />}
            title="Contact Analysis"
            description="Get Deeper into your contacts at a single glance"
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <Feature
            icon={<BsToggles size={28} className="text-myaccent" />}
            title="Tiered Sorting"
            description="Organize your contacts in any way that comes to tour mind"
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <Feature
            icon={<BiSolidBellRing size={28} className="text-myaccent" />}
            title="Automatic Enrichment"
            description="Get notified when someone sends you a message"
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <Feature
            icon={<BsLightningChargeFill size={28} className="text-myaccent" />}
            title="Quick Actions"
            description="streamline your workflow with easy and cutomizabe shortcuts"
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <Feature
            icon={<BsStars size={28} className="text-myaccent" />}
            title="Powered by AI"
            description="AI content assistant is the extra pair of helping hands you need"
          />
        </motion.div>
      </Container>

      <motion.div variants={itemVariants}>
        <Button
          variant={'default'}
          size={'lg'}
          className="flex items-center bg-myaccent/80 py-8 hover:bg-myaccent rounded-xl text-white text-base font-content font-semibold mx-auto transition-colors duration-200"
        >
          <p>Learn More</p>
          <ArrowUpRight />
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Features;
