'use client';

import { useState } from 'react';
import { Calculator } from 'lucide-react';
import { motion } from 'framer-motion';

type Props = {
  pageUrlPath: string;
  backUrl: string;
};

export default function ClientCalculatorPage({ pageUrlPath, backUrl }: Props) {
  const [traffic, setTraffic] = useState<number>(1000);
  const [conversionRate, setConversionRate] = useState<number>(2);
  const [averageCommission, setAverageCommission] = useState<number>(50);

  const calculateEarnings = (): number => {
    const conversions = (traffic * conversionRate) / 100;
    return conversions * averageCommission;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto mt-10"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold mb-4 flex items-center"
      >
        <Calculator className="mr-2 text-pink-500" />
        Affiliate Marketing Earnings Calculator
      </motion.h2>

      <div className="space-y-4">
        <div>
          <label htmlFor="traffic" className="block text-sm font-medium text-gray-300">
            Monthly Traffic
          </label>
          <input
            type="number"
            id="traffic"
            value={traffic}
            onChange={(e) => setTraffic(Number(e.target.value))}
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <div>
          <label htmlFor="conversionRate" className="block text-sm font-medium text-gray-300">
            Conversion Rate (%)
          </label>
          <input
            type="number"
            id="conversionRate"
            value={conversionRate}
            onChange={(e) => setConversionRate(Number(e.target.value))}
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <div>
          <label htmlFor="averageCommission" className="block text-sm font-medium text-gray-300">
            Average Commission ($)
          </label>
          <input
            type="number"
            id="averageCommission"
            value={averageCommission}
            onChange={(e) => setAverageCommission(Number(e.target.value))}
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-6"
      >
        <h3 className="text-xl font-semibold mb-2">Estimated Monthly Earnings</h3>
        <p className="text-4xl font-bold text-pink-500">${calculateEarnings().toFixed(2)}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-6 text-sm text-gray-400"
      >
        <p>
          This calculator provides an estimate based on the inputs provided. Actual earnings may
          vary depending on factors such as niche, product quality, and marketing strategy.
        </p>
        <p className="mt-2">
          Page path: <code>{pageUrlPath}</code> |{' '}
          <a href={backUrl} className="text-pink-500 hover:underline">
            Go back
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
}
