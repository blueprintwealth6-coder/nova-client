"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "50M+",
    title: "Active Users",
  },
  {
    number: "1.2B+",
    title: "Posts Created",
  },
  {
    number: "200+",
    title: "Countries",
  },
  {
    number: "99.9%",
    title: "AI Accuracy",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-[#070b18]">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="bg-[#10182d] rounded-3xl p-10 text-center border border-white/10 hover:border-cyan-500 transition"
            >

              <h2 className="text-5xl font-black text-cyan-400">
                {item.number}
              </h2>

              <p className="text-gray-400 mt-4 text-lg">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}