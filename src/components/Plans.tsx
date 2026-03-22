'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from './Container';
import { Button } from './ui/button';
import PriceCard from './PriceCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const Plans = () => {
  return (
    <motion.div
      id="pricing"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <Container className="pt-20 px-2 text-center">
        <motion.div variants={itemVariants}>
          <Button
            variant={'outline'}
            size={'lg'}
            className="rounded-xl bg-transparent hover:bg-transparent hover:text-myaccent text-lg text-myaccent border-myaccent/80 font-heading font-semibold mb-6"
          >
            Plans
          </Button>
        </motion.div>

        <motion.h2
          className="text-[1.75rem] md:text-[2.5rem] text-mytext font-heading font-semibold max-w-[700px] mx-auto mb-3"
          variants={itemVariants}
        >
          From nothing to Something
        </motion.h2>

        <motion.p
          className="text-mytextgray text-sm md:text-base font-content font-semibold max-w-[500px] mx-auto"
          variants={itemVariants}
        >
          Designed for every stage of your journey. start today, no credit card
          required
        </motion.p>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 justify-center pt-12">
          <motion.div variants={cardVariants}>
            <PriceCard
              variant="basic"
              title="CRM For Services"
              desciption="Our service solution lets you personalize customers experiances, Building loyality and Revenue"
              price="$49 / Month"
            />
          </motion.div>
          <motion.div variants={cardVariants}>
            <PriceCard
              variant="premium"
              title="CRM For Sales"
              desciption="Our sales frees tou to maximize productivity, maintain pipeline vissiblity, and grow revenue"
              price="$99 / Month"
            />
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Plans;
