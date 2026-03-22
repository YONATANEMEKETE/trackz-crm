'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from './Container';
import { Button } from './ui/button';
import { Layers } from 'lucide-react';
import { FaLayerGroup } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import SolutionChart from './SolutionChart';
import SolutionChart2 from './SolutionChart2';

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

const chartVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      delay: 0.3,
    },
  },
};

const solutionVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const Solutions = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <Container className="py-12 pt-20 px-8 mb-8">
        <motion.div className="w-max mx-auto lg:ml-0" variants={itemVariants}>
          <Button
            variant={'outline'}
            size={'lg'}
            className="text-center rounded-xl bg-transparent hover:bg-transparent hover:text-myaccent text-lg text-myaccent border-myaccent/80 font-heading font-semibold mb-6"
          >
            Solutions
          </Button>
        </motion.div>

        <div className="flex flex-col gap-y-4 lg:flex-row items-center justify-center lg:justify-between mb-12 w-full">
          <motion.h2
            className="text-[2rem] text-center lg:text-start max-w-[500px] lg:max-w-[40%] text-mytext font-content font-bold"
            variants={itemVariants}
          >
            Build A Solution Thats truly Your own
          </motion.h2>
          <motion.p
            className="text-base text-mytextgray text-center lg:text-start  font-heading font-semibold max-w-[500px] lg:max-w-[45%]"
            variants={itemVariants}
          >
            Manage All things equity in one place, with Trackz you get the all in
            one sales and marketing automation plateform designed to help your
            small business to grow.
          </motion.p>
        </div>
        {/*  */}
        <div className="flex justify-between gap-20">
          <motion.div
            className="hidden lg:block relative bg-mycardBg rounded-xl flex-1 min-w-[500px]"
            variants={chartVariants}
          >
            <SolutionChart />
            <SolutionChart2 />
            <Circle />
          </motion.div>
          <div className="space-y-6 grid grid-cols-1 md:grid-cols-2 lg:block place-content-center mx-auto">
            <motion.div variants={solutionVariants}>
              <Solution
                heading="Business CRM"
                description="Get organized and automate follow-up with keaps client managment software"
                icon={
                  <FaLayerGroup size={24} className="group-hover:text-myaccent" />
                }
              />
            </motion.div>
            <motion.div variants={solutionVariants}>
              <Solution
                heading="Email Marketing"
                description="Convert more leads with easy-to-build emails, plus automation and CRM"
                icon={<IoIosMail size={24} className="group-hover:text-myaccent" />}
              />
            </motion.div>
            <motion.div variants={solutionVariants}>
              <Solution
                heading="Sales Automation"
                description="Automation capabilities were built to  amplify evry stage of your sales cycle"
                icon={
                  <RiMoneyDollarCircleFill
                    size={24}
                    className="group-hover:text-myaccent"
                  />
                }
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Solutions;

interface Props {
  heading: string;
  description: string;
  icon: any;
}

const Solution = ({ heading, description, icon }: Props) => {
  return (
    <div className="group flex items-center gap-10 cursor-pointer">
      <div className="w-1 h-32 bg-mycardBg group-hover:bg-myaccent rounded-full"></div>
      <div className="flex items-start gap-4">
        {icon}
        <div className="space-y-2">
          <h1 className="group-hover:text-myaccent text-xl text-mytext font-content font-semibold">
            {heading}
          </h1>
          <p className="text-base text-mytextgray font-heading font-semibold max-w-[350px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Circle = () => {
  return (
    <div className="hidden min-[1200px]:block size-24 rounded-full bg-mylogoBorder ring-myaccent ring-2 ring-offset-1 absolute  right-[25%] top-[25%]"></div>
  );
};
