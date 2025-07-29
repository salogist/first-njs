'use client'
import React from 'react';
import { motion } from 'framer-motion';

const SeoOptimizationCreative = () => {
  const chartData = [
    { label: 'فروردین', value: 30 },
    { label: 'اردیبهشت', value: 50 },
    { label: 'خرداد', value: 65 },
    { label: 'تیر', value: 90 },
  ];

  const chartVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const barVariants = {
    hidden: { height: '0%', opacity: 0 },
    visible: (custom) => ({
      height: `${custom}%`,
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section className="bg-white text-black min-h-screen px-8 py-16 h-screen flex items-center justify-center">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:grid lg:grid-cols-2 lg:gap-24 items-center">
        {/* بخش محتوا */}
        <div>
          <motion.h2
            className="text-4xl font-extrabold sm:text-6xl bg-gradient-to-r from-black via-white to-black bg-clip-text text-transparent py-3"
            initial={{ backgroundPosition: '0% 50%' }}
            animate={{ backgroundPosition: '100% 50%' }}
            transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
            style={{ backgroundSize: '300% auto' }}
          >
            دیجیتال مارکتینگ
          </motion.h2>
          <p className="mt-4 text-black max-w-lg">
          ما وب‌سایت شما را به یک آهنربای قدرتمند برای موتورهای جستجو تبدیل می‌کنیم. از طریق استراتژی‌های مبتنی بر داده، رتبه شما را بالا می‌بریم، ترافیک ارگانیک را افزایش می‌دهیم و نتایج قابل اندازه‌گیری ارائه می‌دهیم.          </p>
        </div>
        {/* بخش نمودار */}
        <motion.div
          className="mt-12 lg:mt-0 h-64 w-full flex items-end justify-around gap-4 p-4 border-b-2 border-l-2 border-black"
          variants={chartVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {chartData.map((item) => (
            <div key={item.label} className="w-full h-full flex flex-col justify-end items-center">
              <motion.div
                className="w-3/4 bg-black rounded-t-md"
                custom={item.value}
                variants={barVariants}
              ></motion.div>
              <span className="mt-2 font-semibold">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SeoOptimizationCreative;