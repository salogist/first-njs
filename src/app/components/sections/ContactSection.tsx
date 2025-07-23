"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const cards = [
  {
    title: "Fast Support",
    desc: "Our team is always ready to answer your questions quickly.",
  },
  {
    title: "Direct Communication",
    desc: "Contact us via email and social media directly.",
  },
  {
    title: "Free Consultation",
    desc: "Get a free consultation before making any decisions.",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full flex justify-center items-center min-h-screen ">
      <div className="flex flex-col md:flex-row gap-12 w-full max-w-5xl items-stretch">
        {/* Left: Info & Cards */}
        <motion.div
          className="flex-1 flex flex-col justify-center gap-8"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 14 }}
        >
          <h2 className="text-3xl font-bold text-blue-400 mb-2">Contact Us</h2>
          <p className="text-gray-300 mb-4 max-w-md">For support, consultation, or any questions, simply fill out the form or use one of the methods below to reach us.</p>
          <div className="flex flex-col gap-4">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-800 rounded-xl p-5 shadow-lg border-l-4 border-blue-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-blue-300 mb-1">{card.title}</h3>
                <p className="text-gray-400 text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Right: Contact Form */}
        <motion.div
          className="flex-1 bg-gray-800 rounded-2xl shadow-2xl p-8 flex flex-col justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 14 }}
        >
          <h2 className="text-2xl font-bold text-blue-400 mb-6 text-center">Contact Form</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
              value={form.message}
              onChange={handleChange}
              required
            />
            <motion.button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded-md transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={submitted}
            >
              {submitted ? "Sent!" : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
} 