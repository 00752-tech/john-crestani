"use client";

import { useState } from "react";
import { Youtube } from "lucide-react";
import { motion } from "framer-motion";

export default function YouTubeCalculator() {
  const [views, setViews] = useState<number>(10000);
  const [ctr, setCtr] = useState<number>(2);
  const [cpm, setCpm] = useState<number>(4);
  const [videosPerMonth, setVideosPerMonth] = useState<number>(8);

  const calculateEarnings = () => {
    // Calculate monthly earnings based on views, CTR, and CPM
    const clicksPerVideo = views * (ctr / 100);
    const earningsPerVideo = (clicksPerVideo * cpm) / 1000;
    const monthlyEarnings = earningsPerVideo * videosPerMonth;

    return {
      monthlyEarnings: monthlyEarnings.toFixed(2),
      yearlyEarnings: (monthlyEarnings * 12).toFixed(2),
      clicksPerVideo: Math.round(clicksPerVideo),
      totalViews: views * videosPerMonth,
    };
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const results = calculateEarnings();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto"
    >
      <motion.h2
        variants={itemVariants}
        className="text-2xl font-bold mb-4 flex items-center"
      >
        <Youtube className="mr-2 text-pink-500" />
        YouTube AdSense Earnings Calculator
      </motion.h2>

      <motion.div variants={itemVariants} className="space-y-4">
        <div>
          <label
            htmlFor="views"
            className="block text-sm font-medium text-gray-300"
          >
            Average Views per Video
          </label>
          <input
            type="number"
            id="views"
            value={views}
            onChange={(e) => setViews(Number(e.target.value))}
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <div>
          <label
            htmlFor="ctr"
            className="block text-sm font-medium text-gray-300"
          >
            Click-Through Rate (CTR) %
          </label>
          <input
            type="number"
            id="ctr"
            value={ctr}
            onChange={(e) => setCtr(Number(e.target.value))}
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
            step="0.1"
          />
        </div>
        <div>
          <label
            htmlFor="cpm"
            className="block text-sm font-medium text-gray-300"
          >
            CPM (Cost Per 1000 clicks) $
          </label>
          <input
            type="number"
            id="cpm"
            value={cpm}
            onChange={(e) => setCpm(Number(e.target.value))}
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
            step="0.1"
          />
        </div>
        <div>
          <label
            htmlFor="videosPerMonth"
            className="block text-sm font-medium text-gray-300"
          >
            Videos Published per Month
          </label>
          <input
            type="number"
            id="videosPerMonth"
            value={videosPerMonth}
            onChange={(e) => setVideosPerMonth(Number(e.target.value))}
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
          />
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-6 grid grid-cols-2 gap-4"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-lg font-semibold mb-2">Monthly Earnings</h3>
          <motion.p
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className="text-2xl font-bold text-pink-500"
          >
            ${results.monthlyEarnings}
          </motion.p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-lg font-semibold mb-2">Yearly Earnings</h3>
          <motion.p
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className="text-2xl font-bold text-green-500"
          >
            ${results.yearlyEarnings}
          </motion.p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-lg font-semibold mb-2">Clicks per Video</h3>
          <motion.p
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className="text-2xl font-bold text-blue-500"
          >
            {results.clicksPerVideo}
          </motion.p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-lg font-semibold mb-2">Monthly Views</h3>
          <motion.p
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className="text-2xl font-bold text-purple-500"
          >
            {results.totalViews.toLocaleString()}
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-6 text-sm text-gray-400"
      >
        <p>
          This calculator provides estimates based on average YouTube AdSense
          rates. Actual earnings can vary based on factors such as niche,
          audience location, and seasonality.
        </p>
        <p className="mt-2">
          {`Want to learn how to monetize your YouTube channel beyond AdSense? Check out John Crestani's`}{" "}
          <a href="/api/sale" className="text-pink-500 hover:underline">
            Super Affiliate System Pro
          </a>
          .
        </p>
      </motion.div>
    </motion.div>
  );
}
