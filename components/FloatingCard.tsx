"use client";

import { motion } from "framer-motion";

export default function FloatingCard() {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 w-80"
    >
      <h3 className="text-2xl font-bold text-cyan-400">
        🤖 Nova AI
      </h3>

      <p className="mt-4 text-gray-400">
        Ask anything. Create posts. Translate languages. Generate ideas instantly.
      </p>
    </motion.div>
  );
}