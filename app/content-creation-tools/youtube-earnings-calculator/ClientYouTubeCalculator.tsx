'use client';

import { useState } from 'react';
import { Users, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import ShareButtons from '@/components/ShareButtons';
import RelatedTools from '@/components/RelatedTools';

type ClientYouTubeCalculatorProps = {
  backUrl: string;
  pageUrlPath: string;
};

export default function ClientYouTubeCalculator({
  backUrl,
  pageUrlPath,
}: ClientYouTubeCalculatorProps) {
  const [followers, setFollowers] = useState<number>(10000);
  const [engagementRate, setEngagementRate] = useState<number>(3);
  const [postsPerMonth, setPostsPerMonth] = useState<number>(10);

  const calculateEarnings = () => {
    const engagements = followers * (engagementRate / 100);
    const earningsPerPost = engagements * 0.01;
    return earningsPerPost * postsPerMonth;
  };

  const earnings = calculateEarnings();

  return (
    <div className="container mx-auto max-w-2xl p-6 bg-gray-900 text-white rounded-lg min-h-screen shadow-lg">
      {/* Navigation */}
      <div className="mb-6 flex items-center space-x-2">
        <ArrowLeft className="w-5 h-5 text-pink-500" />
        <Link href={backUrl} className="hover:underline text-pink-500">
          Back to Tools
        </Link>
      </div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 text-3xl font-bold flex items-center"
      >
        <Users className="mr-3 text-pink-500" />
        YouTube Earnings Calculator
      </motion.h1>

      {/* Inputs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="space-y-5"
      >
        {/* Subscribers */}
        <div>
          <label htmlFor="followers" className="block mb-1 font-medium text-gray-300">
            Subscribers
          </label>
          <input
            id="followers"
            type="number"
            min={0}
            value={followers}
            onChange={(e) => setFollowers(Number(e.target.value))}
            className="w-full border border-gray-700 rounded bg-gray-800 p-2 text-white"
          />
        </div>

        {/* Engagement */}
        <div>
          <label htmlFor="engagementRate" className="block mb-1 font-medium text-gray-300">
            Engagement Rate (%)
          </label>
          <input
            id="engagementRate"
            type="number"
            min={0}
            step={0.1}
            value={engagementRate}
            onChange={(e) => setEngagementRate(Number(e.target.value))}
            className="w-full border border-gray-700 rounded bg-gray-800 p-2 text-white"
          />
        </div>

        {/* Monetized Videos */}
        <div>
          <label htmlFor="postsPerMonth" className="block mb-1 font-medium text-gray-300">
            Monetized Videos per Month
          </label>
          <input
            id="postsPerMonth"
            type="number"
            min={0}
            value={postsPerMonth}
            onChange={(e) => setPostsPerMonth(Number(e.target.value))}
            className="w-full border border-gray-700 rounded bg-gray-800 p-2 text-white"
          />
        </div>
      </motion.div>

      {/* Estimated Earnings */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-8"
      >
        <h2 className="mb-2 text-xl font-semibold">Estimated Monthly Revenue</h2>
        <p className="text-4xl font-bold text-pink-500">${earnings.toFixed(2)}</p>
      </motion.div>

      {/* Share Buttons */}
      <div className="my-6">
        <ShareButtons url={`https://johncrestani.me${pageUrlPath}`} title="YouTube Earnings Calculator" />
      </div>

      {/* Related Tools */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <RelatedTools currentToolUrl={pageUrlPath} category="content-creation" />
      </motion.div>
    </div>
  );
}
