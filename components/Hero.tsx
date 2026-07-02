"use client";

import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-28">

      {/* Glow Background */}
      <div className="absolute -top-40 -left-40 w-[450px] h-[450px] bg-cyan-500 rounded-full blur-[180px] opacity-20"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[200px] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Side */}
        <div>

          <span className="inline-block bg-cyan-500/20 border border-cyan-500 text-cyan-300 px-5 py-2 rounded-full">
            🚀 AI Powered Social Platform
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-extrabold leading-tight mt-8"
          >
            The Future Of
            <br />
            <span className="text-cyan-400">
              Social Media
            </span>
          </motion.h1>

          <p className="text-gray-400 text-xl leading-9 mt-10 max-w-xl">
            Nova is the next generation social media platform where AI,
            communities and creators come together in one intelligent ecosystem.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-6 mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-500 px-8 py-4 rounded-xl font-bold shadow-lg shadow-cyan-500/40"
            >
              Get Started
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/20 px-8 py-4 rounded-xl hover:bg-white hover:text-black transition"
            >
              Watch Demo
            </motion.button>
          </motion.div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <PhoneMockup />
        </div>

      </div>

    </section>
  );
}