"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const cards = [
  {
    title: "پشتیبانی سریع",
    desc: "تیم ما کاملا آماده پاسخگویی به سوالات و ابهامات شما هستند",
  },
  {
    title: "۲۴/۷ بودیم و هستیم",
    desc: "در هر موقعیت از شبانه روز میتوانید با ما در تماس باشید",
  },
  {
    title: "مشاوره رایگان",
    desc: "با استفاده از تماس و یا فرم روبرو میتونید درخواستتون رو ثبت کنید",
  },
];

export default function ContactSection() {
  // State برای نگهداری مقادیر فرم
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  
  // State برای مدیریت وضعیت ارسال (در حال ارسال، موفق، خطا)
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // تابع اصلی برای ارسال فرم
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // جلوگیری از رفرش شدن صفحه
    setIsLoading(true); // نمایش وضعیت "در حال ارسال"
    setStatusMessage(""); // پاک کردن پیام قبلی

    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form), // ارسال داده‌های فرم به صورت JSON
      });

      const result = await response.json();

      if (response.ok) {
        setStatusMessage("Message sent successfully!");
        setForm({ name: "", email: "", message: "" }); // پاک کردن فرم پس از ارسال موفق
      } else {
        // نمایش خطای دریافتی از سرور
        setStatusMessage(result.error || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatusMessage("Failed to connect to the server. Please check your connection.");
    } finally {
      setIsLoading(false); // پایان وضعیت "در حال ارسال"
    }
  };

  return (
    <section className=" bg-white flex justify-center items-center px-8 py-20">
      <div className="flex flex-col md:flex-row gap-12 w-full max-w-5xl items-stretch">
        {/* Left: Info & Cards */}
        <motion.div
          className="flex-1 flex flex-col justify-center gap-8"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 14 }}
        >
          <h2 className="text-3xl font-bold text-black mb-2">ارتباط با دیکاردو</h2>
          <p className="text-black mb-4 max-w-md">برای پشتیبانی، مشاوره یا هرگونه سوال، کافیست فرم را پر کنید یا از یکی از روش‌های زیر برای ارتباط با ما استفاده کنید.</p>
          <div className="flex flex-col gap-4">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl p-5 shadow-lg border-l-4 border-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-black mb-1">{card.title}</h3>
                <p className="text-black text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Right: Contact Form */}
        <motion.div
          className="flex-1 bg-black rounded-2xl shadow-2xl p-8 flex flex-col justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 14 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Contact Form</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="bg-white text-black p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="bg-white text-black p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="bg-white text-black p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700 min-h-[100px]"
              value={form.message}
              onChange={handleChange}
              required
            />
            <motion.button
              type="submit"
              className="bg-white hover:bg-black text-black hover:text-white font-semibold py-2 rounded-md transition-all disabled:opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
          {/* نمایش پیام وضعیت به کاربر */}
          {statusMessage && (
            <p className={`mt-4 text-center ${statusMessage.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
              {statusMessage}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
