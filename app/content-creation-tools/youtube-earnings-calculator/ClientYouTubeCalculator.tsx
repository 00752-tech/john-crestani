"use client";

import { useState } from "react";
import { Users, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import ShareButtons from "@/components/ShareButtons";
import RelatedTools from "@/components/RelatedTools";
import Link from "next/link";

export default function ClientInfluencerEarningsCalculator() {
  const [followers, setFollowers] = useState<number>(10000);
  const [engagementRate, setEngagementRate] = useState<number>(3);
  const [postsPerMonth, setPostsPerMonth] = useState<number>(10);

  const calculateEarnings = () => {
    const engagements = followers * (engagementRate / 100);
    const earningsPerPost = engagements * 0.01; // assumed $0.01 per engagement
    return earningsPerPost * postsPerMonth;
  };

  const earnings = calculateEarnings();

  const shareUrl = "https://johncrestani.me/influencer-marketing-tools/earnings-calculator";
  const shareTitle = "Influencer Earnings Calculator";

  return (
    <div className="container mx-auto p-6 max-w-2xl bg-gray-900 text-white rounded-lg shadow-lg">
      {/* Back Link */}
      <div className="mb-6 flex items-center space-x-2">
        <ArrowLeft className="w-5 h-5 text-pink-500" />
        <Link href="/free-tools" className="text-pink-500 hover:underline">
          Back to Tools
        </Link>
      </div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6 flex items-center"
      >
        <Users className="mr-3 text-pink-500" /> Influencer Earnings Calculator
      </motion.h1>

      {/* Input fields */}
      <motion.div className="space-y-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
        <div>
          <label htmlFor="followers" className="block mb-1 font-medium text-gray-300">
            Number of Followers
          </label>
          <input
            type="number"
            id="followers"
            min={0}
            value={followers}
            onChange={(e) => setFollowers(Number(e.target.value))}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white"
          />
        </div>

        <div>
          <label htmlFor="engagementRate" className="block mb-1 font-medium text-gray-300">
            Engagement Rate (%)
          </label>
          <input
            type="number"
            id="engagementRate"
            min={0}
            step={0.1}
            value={engagementRate}
            onChange={(e) => setEngagementRate(Number(e.target.value))}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white"
          />
        </div>

        <div>
          <label htmlFor="postsPerMonth" className="block mb-1 font-medium text-gray-300">
            Sponsored Posts per Month
          </label>
          <input
            type="number"
            id="postsPerMonth"
            min={0}
            value={postsPerMonth}
            onChange={(e) => setPostsPerMonth(Number(e.target.value))}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white"
          />
        </div>
      </motion.div>

      {/* Earnings display */}
      <motion.div className="mt-8" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
        <h2 className="text-xl font-semibold mb-2">Estimated Monthly Earnings</h2>
        <p className="text-4xl font-bold text-pink-500">${earnings.toFixed(2)}</p>
      </motion.div>

      {/* Share Buttons */}
      <div className="my-6">
        <ShareButtons url={shareUrl} title={shareTitle} />
      </div>

      {/* Related Tools */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <RelatedTools currentPath="/influencer-marketing-tools/earnings-calculator" />
      </motion.div>
    </div>
  );
}
