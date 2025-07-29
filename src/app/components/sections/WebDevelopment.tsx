'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const WebDevelopmentCreative = () => {
  const codeSnippets = ['<section>', '  <h1>...</h1>', '  <p>...</p>', '</section>'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-white text-black min-h-screen px-8 py-16 h-screen flex items-center justify-center">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        {/* بخش محتوا */}
        <div>
          <motion.h2
            className="text-4xl font-extrabold sm:text-6xl bg-gradient-to-r from-black via-white to-black bg-clip-text text-transparent"
            initial={{ backgroundPosition: '0% 50%' }}
            animate={{ backgroundPosition: '100% 50%' }}
            transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
            style={{ backgroundSize: '300% auto' }}
          >
            تــوســـــعـــه وب
          </motion.h2>
          <p className="mt-4 text-black max-w-lg">
          ما تجربیات دیجیتالی قوی را معماری و ایجاد می‌کنیم. کد ما تمیز، عملکرد ما بی‌نظیر و محصولات ما برای دوام و مقیاس‌پذیری ساخته شده‌اند.
          </p>
          <Link href="/about" className="inline-block rounded-md border border-black px-12 py-3 text-sm font-medium text-black hover:bg-black hover:text-white focus:outline-none focus:ring active:bg-blue-500 sm:w-auto mt-4">شروع پروژه</Link>
        </div>
        {/* بخش انیمیشن کد */}
        <motion.div
          className="mt-12 lg:mt-0 font-mono bg-black text-white p-6 rounded-lg shadow-2xl text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {codeSnippets.map((line, index) => (
            <motion.p key={index} className="tracking-wider" variants={itemVariants}>
              {line}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WebDevelopmentCreative;