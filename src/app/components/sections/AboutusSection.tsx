import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <section className="bg-white text-black px-8 py-16 h-screen">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-xl sm:h-80 lg:order-last lg:h-full">
            {/* You can place an <Image> component here */}
            <div className="absolute inset-0 h-full w-full bg-black"></div>
          </div>
            <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">Who We Are</h2>
            <p className="mt-4 text-gray-600">
              We are a team of passionate developers and designers dedicated to
              creating high-quality digital products. Our philosophy is simple:
              combine clean code with elegant design to deliver an exceptional
              user experience. From small businesses to large enterprises, we tailor our approach
              to meet your unique needs and challenges.
            </p>
            <Link href="/about-us" className="mt-8 inline-block rounded-md bg-black px-12 py-3 text-sm font-medium text-white transition">Know More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
