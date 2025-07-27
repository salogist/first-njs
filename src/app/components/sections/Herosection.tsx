"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Metadata } from "next";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 14,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

// انیمیشن تایپی ساده
const useTypedText = (text: string, speed = 80) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text]);
  return displayed;
};


export default function Herosection() {
  const typedTitle = useTypedText("Use Mind!");

  return (
    <section className="px-8 py-16 flex flex-row items-center justify-center text-white">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >


        {/* بخش معرفی */}
        <motion.div className="space-y-6" variants={itemVariants}>
          <h1 className="text-5xl font-extrabold text-black">
            {typedTitle}
          </h1>
          <p className="text-lg text-black">
            my new personal project with Next.JS
          </p>
          <motion.div className="flex gap-6">
            <Link href="/shop">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-black"
              >
                🛍️ Shop
              </motion.span>
            </Link>
            <Link href="/about-us">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-black"
              >
                ℹ️ About Us
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* فرم ثبت‌نام */}
        <motion.div
          className="bg-black p-6 rounded-2xl shadow-2xl w-full max-w-sm"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-semibold text-center mb-4">Join Us</h2>
          <form className="flex flex-col gap-4">
            <motion.input
              type="text"
              placeholder="Your Name"
              className="bg-white text-black p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
              whileFocus={{ scale: 1.02 }}
              variants={itemVariants}
            />
            <motion.input
              type="text"
              placeholder="Your Last Name"
              className="bg-white text-black p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
              whileFocus={{ scale: 1.02 }}
              variants={itemVariants}
            />
            <motion.button
              type="submit"
              className="bg-black hover:bg-white hover:text-black text-white font-semibold py-2 rounded-md transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}