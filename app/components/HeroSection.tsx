"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-black"
        >
          EcoForge
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:flex items-center space-x-6 mr-16"
        >
          <a
            href="#learn"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Learn
          </a>
          <a
            href="#results"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Results
          </a>
          <a
            href="#services"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Services
          </a>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-sm"
        >
          Join Now
        </motion.button>
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row items-start justify-start px-6 lg:px-12 pt-8 pb-0 gap-8 lg:gap-12">
        {/* Left Side - Text Content */}
        <div className="flex-1 max-w-2xl lg:text-left text-center flex flex-col justify-start pt-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#166534] mb-4 leading-tight tracking-tight font-inter"
          >
            Powering founders to scale with sustainability
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed font-medium tracking-wide"
          >
            EcoForge delivers tailored solutions for startups to launch, grow,
            and scale with a focus on long-term impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4"
          >
            <button className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-md">
              Get Onboarded
            </button>
            <button className="bg-white text-black border border-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md">
              Learn More
            </button>
          </motion.div>
        </div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex-1 flex justify-center lg:justify-end items-start -mt-28"
        >
          <Image
            src="/asset-Photoroom.png"
            alt="Sustainable ecosystem"
            width={800}
            height={400}
            className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
            priority
          />
        </motion.div>
      </div>

      {/* Trusted By Text - Centered below hero image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="px-6 lg:px-12 pt-2 pb-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 text-lg md:text-xl font-semibold">
            We've been trusted by founders from leading organizations
          </p>
        </div>
      </motion.div>

      {/* Company Logos */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="px-6 lg:px-12 pb-16 pt-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12">
            {/* Company logos */}
            <div className="text-gray-500 text-base md:text-lg font-medium hover:text-gray-700 transition-colors">
              Google
            </div>
            <div className="text-gray-500 text-base md:text-lg font-medium hover:text-gray-700 transition-colors">
              AWS
            </div>
            <div className="text-gray-500 text-base md:text-lg font-medium hover:text-gray-700 transition-colors">
              Microsoft
            </div>
            <div className="text-gray-500 text-base md:text-lg font-medium hover:text-gray-700 transition-colors">
              Techstars
            </div>
            <div className="text-gray-500 text-base md:text-lg font-medium hover:text-gray-700 transition-colors">
              YC
            </div>
            <div className="text-gray-500 text-base md:text-lg font-medium hover:text-gray-700 transition-colors">
              Stanford
            </div>
            <div className="text-gray-500 text-base md:text-lg font-medium hover:text-gray-700 transition-colors">
              500 Startups
            </div>
            <div className="text-gray-500 text-base md:text-lg font-medium hover:text-gray-700 transition-colors">
              Virgin
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
