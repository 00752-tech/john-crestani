"use client";

import { useState } from "react";
import { Users } from "lucide-react";
import { motion } from "framer-motion";

export default function InfluencerEarningsCalculator() {
  const [followers, setFollowers] = useState<number>(10000);
  const [engagementRate, setEngagementRate] = useState<number>(3);
  const [postsPerMonth, setPostsPerMonth] = useState<number>(10);

  const calculateEarnings = (): number => {
    const validFollowers = followers > 0 ? followers : 0;
    const validEngagementRate =
      engagementRate > 0 && engagementRate <= 100 ? engagementRate : 0;
    const validPostsPerMonth = postsPerMonth > 0 ? postsPerMonth : 0;

    const engagements = validFollowers * (validEngagementRate / 100);
    const earningsPerPost = engagements * 0.01; // $0.01 per engagement
    return earningsPerPost * validPostsPerMonth;
  };

  const earnings = calculateEarnings();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-2xl font-bold mb-4 flex items-center"
      >
        <Users className="mr-2 text-pink-500" />
        Influencer Earnings Calculator
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="space-y-4"
      >
        <div>
          <label
            htmlFor="followers"
            className="block text-sm font-medium text-gray-300"
          >
            Number of Followers
          </label>
          <input
            type="number"
            id="followers"
            min={0}
            step={1}
            value={followers}
            onChange={(e) => {
              const val = e.target.value;
              setFollowers(val === "" ? 0 : Number(val));
            }}
            className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            aria-label="Number of Followers"
          />
        </div>
        <div>
          <label
            htmlFor="engagementRate"
            className="block text-sm font-medium text-gray-300"
          >
            Engagement Rate (%)
          </label>
          <input
            type="number"
            id="engagementRate"
            min={0}
            max={100}
            step={0.1}
            value={engagementRate}
            onChange={(e) => {
              const val = e.target.value;
              setEngagementRate(val === "" ? 0 : Number(val));
            }}
            className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            aria-label="Engagement Rate"
          />
        </div>
        <div>
          <label
            htmlFor="postsPerMonth"
            className="block text-sm font-medium text-gray-300"
          >
            Sponsored Posts per Month
          </label>
          <input
            type="number"
            id="postsPerMonth"
            min={0}
            step={1}
            value={postsPerMonth}
            onChange={(e) => {
              const val = e.target.value;
              setPostsPerMonth(val === "" ? 0 : Number(val));
            }}
            className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            aria-label="Sponsored Posts per Month"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-6"
        aria-live="polite"
        role="status"
      >
        <h3 className="text-xl font-semibold mb-2">Estimated Monthly Earnings</h3>
        <motion.p
          className="text-4xl font-bold text-pink-500"
          whileInView={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.5 }}
        >
          ${earnings.toFixed(2)}
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-6 text-sm text-gray-400"
      >
        <h4 className="font-semibold mb-2">Understanding Your Results:</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>This estimate is based on an average rate of $0.01 per engagement.</li>
          <li>Actual earnings can vary based on your niche, audience quality, and individual brand deals.</li>
          <li>Higher engagement rates typically lead to better earning potential.</li>
          <li>Consistent posting and audience growth can increase your earnings over time.</li>
        </ul>
        <p className="mt-4">
          {`Want to learn how to maximize your influence and earnings? Check out John Crestani's `}{" "}
          <a href="/api/sale" className="text-pink-500 hover:underline">
            Super Affiliate System Pro
          </a>
          .
        </p>
      </motion.div>
    </motion.div>
  );
}
