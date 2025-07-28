'use client'
import React from 'react';
import { motion } from 'framer-motion';

const UiUxDesignCreative = () => {
  const cardVariants = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', bounce: 0.4, duration: 1.2 },
    },
  };

  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-8 py-16 h-screen">
      {/* بخش عنوان */}
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-extrabold sm:text-6xl bg-gradient-to-r from-white via-black to-white bg-clip-text text-transparent pb-3"
          initial={{ backgroundPosition: '0% 50%' }}
          animate={{ backgroundPosition: '100% 50%' }}
          transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
          style={{ backgroundSize: '300% auto' }}
        >
          UI/UX Design
        </motion.h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          We craft human-centered designs that are both beautiful and intuitive. We believe that great design is not just what it looks like, but how it works and feels.
        </p>
      </div>
      {/* بخش وایرفریم */}
      <motion.div
        className="w-full max-w-4xl h-80 bg-white/5 border border-white/20 rounded-xl p-6 flex gap-6"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="w-1/3 bg-white/10 rounded-lg" variants={cardVariants}></motion.div>
        <div className="w-2/3 flex flex-col gap-6">
          <motion.div className="h-1/3 bg-white/10 rounded-lg" variants={cardVariants}></motion.div>
          <div className="h-2/3 flex gap-6">
            <motion.div className="w-1/2 bg-white/10 rounded-lg" variants={cardVariants}></motion.div>
            <motion.div className="w-1/2 bg-white/10 rounded-lg" variants={cardVariants}></motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default UiUxDesignCreative;