'use client';

import { motion } from 'framer-motion';

export default function ClientCalculatorPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto mt-10"
    >
      <h2 className="text-2xl font-bold mb-4 text-pink-500">
        Niche Profitability Calculator Coming Soon!
      </h2>
      <p className="text-gray-300">
        This tool will help you evaluate affiliate niches based on traffic, monetization potential, and competition. Stay tuned!
      </p>
    </motion.div>
  );
}
