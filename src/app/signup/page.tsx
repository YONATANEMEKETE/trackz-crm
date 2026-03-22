'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import logo1 from '../../../public/logo1.png';
import { ArrowUpRight, Loader2, Mail, CheckCircle } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
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
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const successVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const SignupPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear password error when user types
    if (name === 'confirmPassword' || name === 'password') {
      setPasswordError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    
    // Validate password length
    if (formData.password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return;
    }
    
    setIsLoading(true);
    console.log('Signup attempt:', formData);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsLoading(false);
    setIsSuccess(true);
  };

  return (
    <div className="min-h-screen bg-mybg flex items-center justify-center px-4 py-12">
      <motion.div
        className="w-full max-w-md"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="size-12 relative ring-4 ring-mylogoBorder rounded-tr-lg rounded-bl-lg">
              <Image src={logo1} alt="logo Trackz" fill className="object-contain" />
            </div>
            <span className="text-3xl text-mytext font-logo font-medium">Trackz</span>
          </Link>
          <h1 className="text-[2rem] text-mytext font-content font-bold mb-2">
            {isSuccess ? 'Check your email' : 'Create an account'}
          </h1>
          <p className="text-mytextgray font-heading font-semibold">
            {isSuccess ? 'We have sent you a verification link' : 'Start your journey with Trackz today'}
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-[0px_5px_15px_rgba(0,0,0,0.1)] p-8"
          variants={itemVariants}
        >
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                variants={successVariants}
                initial="hidden"
                animate="visible"
                className="text-center py-8 space-y-6"
              >
                <div className="mx-auto size-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="size-8 text-green-600" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl text-mytext font-content font-bold">
                    Verification email sent!
                  </h2>
                  <p className="text-mytextgray font-heading font-semibold">
                    We have sent a verification link to <span className="text-myaccent">{formData.email}</span>
                  </p>
                  <p className="text-mytextgray text-sm font-heading font-medium">
                    Please check your inbox and click the link to verify your account.
                  </p>
                </div>
                <Link href="/login">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-myaccent text-myaccent hover:bg-myaccent hover:text-white rounded-xl py-5 font-content font-semibold transition-colors duration-200"
                  >
                    Go to Login
                  </Button>
                </Link>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-6"
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-mytext font-heading font-semibold text-sm">
                      First Name
                    </label>
                    <Input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                      className="border border-myaccent/30 rounded-xl py-5 bg-mybg text-base text-mytext font-heading"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-mytext font-heading font-semibold text-sm">
                      Last Name
                    </label>
                    <Input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      className="border border-myaccent/30 rounded-xl py-5 bg-mybg text-base text-mytext font-heading"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-mytext font-heading font-semibold text-sm">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="border border-myaccent/30 rounded-xl py-5 bg-mybg text-base text-mytext font-heading"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-mytext font-heading font-semibold text-sm">
                      Password
                    </label>
                    <Input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create password"
                      className={`border rounded-xl py-5 bg-mybg text-base text-mytext font-heading ${passwordError ? 'border-red-500' : 'border-myaccent/30'}`}
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-mytext font-heading font-semibold text-sm">
                      Confirm Password
                    </label>
                    <Input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm password"
                      className={`border rounded-xl py-5 bg-mybg text-base text-mytext font-heading ${passwordError ? 'border-red-500' : 'border-myaccent/30'}`}
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {passwordError && (
                  <p className="text-red-500 text-sm font-heading font-medium -mt-2">
                    {passwordError}
                  </p>
                )}

                <div className="pt-4 space-y-4">
                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    className="w-full bg-myaccent hover:bg-myaccent/90 rounded-xl py-6 text-white font-content font-semibold transition-colors duration-200"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Creating account...
                      </>
                    ) : (
                      <>
                        Sign Up
                        <ArrowUpRight className="ml-2" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-mytextgray font-heading font-semibold text-sm">
                    Already have an account?{' '}
                    <Link href="/login" className="text-myaccent hover:underline">
                      Login
                    </Link>
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SignupPage;