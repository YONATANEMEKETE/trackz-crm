'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from './Container';
import Image from 'next/image';
import trustedHubspot from '../../public/trustedHubspot.svg';
import trustedInstacart from '../../public/trustedInstacart.svg';
import trustedFedEX from '../../public/trustedFedEx.svg';
import trustedShpify from '../../public/trustedShopify.svg';
import trustedSlack from '../../public/trustedSlack.svg';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const Trusted = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <Container className="mx-4 min-[1200px]:mx-auto px-6 md:px-12 lg:px-28 py-6 md:py-10 space-y-8 bg-myaccent/90 rounded-2xl text-center">
        <motion.div
          className="text-lg text-white font-content font-medium mx-auto"
          variants={itemVariants}
        >
          Trusted by Worlds Best Companies
        </motion.div>

        <div className="flex flex-wrap items-center gap-4 gap-y-6 justify-center min-[530px]:justify-between">
          <motion.div variants={logoVariants}>
            <Companies image={trustedInstacart} />
          </motion.div>
          <motion.div variants={logoVariants}>
            <Companies image={trustedSlack} />
          </motion.div>
          <motion.div variants={logoVariants}>
            <Companies image={trustedHubspot} />
          </motion.div>
          <motion.div variants={logoVariants}>
            <Companies image={trustedShpify} />
          </motion.div>
          <motion.div variants={logoVariants}>
            <Companies image={trustedFedEX} />
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Trusted;

const Companies = ({ image }: { image: any }) => {
  return (
    <Image src={image} alt="logo companies" width={120} className="h-auto" />
  );
};
