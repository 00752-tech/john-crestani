'use client';

import { useState } from 'react';
import { Users, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import ShareButtons from '@/components/ShareButtons';
import RelatedTools from '@/components/RelatedTools';

export default function ClientYouTubeCalculator() {
  const [views, setViews] = useState<number>(100000);
  const [rpm, setRpm] = useState<number>(5);

  const calculateIncome = () => {
    return (views / 1000) * rpm;
  };

  const income = calculateIncome();

  const shareUrl = 'https://johncrestani.me/content-creation-tools/youtube-earnings-calculator';
  const shareTitle = 'Predict Your YouTube Income: Free AdSense Earnings Calculator';

  return (
    <div className="container mx-auto max-w-2xl p-6 bg-gray-900 text-white rounded-lg min-h-screen shadow-lg">
      {/* Navigation */}
      <div className="mb-6 flex items-center space-x-2">
        <ArrowLeft className="w-5 h-5 text-pink-500" />
        <Link href="/content-creation-tools" className="hover:underline text-pink-500">
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

      {/* Input Fields */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="space-y-5"
      >
        <div>
          <label htmlFor="views" className="block mb-1 font-medium text-gray-300">
            Monthly Views
          </label>
          <input
            id="views"
            type="number"
            min={0}
            value={views}
            onChange={(e) => setViews(Number(e.target.value))}
            className="w-full border border-gray-700 rounded bg-gray-800 p-2 text-white"
          />
        </div>

        <div>
          <label htmlFor="rpm" className="block mb-1 font-medium text-gray-300">
            RPM (Revenue per 1000 views)
          </label>
          <input
            id="rpm"
            type="number"
            min={0}
            step={0.01}
            value={rpm}
            onChange={(e) => setRpm(Number(e.target.value))}
            className="w-full border border-gray-700 rounded bg-gray-800 p-2 text-white"
          />
        </div>
      </motion.div>

      {/* Earnings Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-8"
      >
        <h2 className="mb-2 text-xl font-semibold">Estimated Monthly Income</h2>
        <p className="text-4xl font-bold text-pink-500">${income.toFixed(2)}</p>
      </motion.div>

      {/* Share Buttons */}
      <div className="my-6">
        <ShareButtons url={shareUrl} title={shareTitle} />
      </div>

      {/* Related Tools */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <RelatedTools
          currentToolUrl="/content-creation-tools/youtube-earnings-calculator"
          category="Content Creation"
        />
      </motion.div>
    </div>
  );
}
