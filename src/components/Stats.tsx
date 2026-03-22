'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from './Container';

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

function Stats() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <Container className="pt-16 pb-8 flex flex-wrap gap-4 items-center justify-center md:justify-between px-10 lg:px-32">
        <motion.div variants={itemVariants}>
          <Stat stat="12+" description="Years of Experience" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Stat stat="286%" description="Average ROI" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Stat stat="25M" description="Net Present Value" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Stat stat="60+" description="markets served" />
        </motion.div>
      </Container>
    </motion.div>
  );
}

export default Stats;

interface Props {
  stat: string;
  description: string;
}

const Stat = ({ stat, description }: Props) => {
  return (
    <div className="text-center space-y-4">
      <div className="text-mytext text-[2rem] md:text-[3rem] font-heading font-semibold">
        {stat}
      </div>
      <p className="text-mytextgray text-sm md:text-base font-content font-semibold">
        {description}
      </p>
    </div>
  );
};
