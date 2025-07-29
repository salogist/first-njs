'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="bg-white text-black flex items-center justify-center px-8 py-16 h-screen">
      <div className="text-center max-w-5xl">
        <motion.h1
          className="bg-gradient-to-r from-black via-white to-black bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl py-2.5"
          initial={{ backgroundPosition: '0% 50%' }}
          animate={{ backgroundPosition: '100% 50%' }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          style={{
            backgroundSize: '300% auto',
          }}
        >
          زیبایی در سادگیـــست
        </motion.h1>
        <p className="mx-auto mt-4 max-w-2xl sm:text-xl/relaxed">
          به وجود آمدیم تا در برند شما را در دنیای دیجیتال خلق و گسترش بدیم، بهبودی فراتر از دنیای واقعی
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/about" className="block w-full rounded-md border border-black bg-black px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">درخواست مشاوره</Link>
          <Link href="/about" className="block w-full rounded-md border border-black px-12 py-3 text-sm font-medium text-black hover:bg-black hover:text-white focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">درباره دیکاردو</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;