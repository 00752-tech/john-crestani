"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { JsonLd } from "react-schemaorg";             // keep react-schemaorg import
import RelatedTools from "@/components/RelatedTools";
import { motion } from "framer-motion";

interface ClientYouTubeCalculatorProps {
  backUrl?: string;
  pageUrlPath?: string;
}

export default function ClientYouTubeCalculator({
  backUrl = "/free-tools",
  pageUrlPath = "/content-creation-tools/youtube-earnings-calculator",
}: ClientYouTubeCalculatorProps) {
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

  const results = calculateEarnings();

  return (
    <div className="container mx-auto p-4">
      {/* Back navigation */}
      <div className="mb-4 flex items-center space-x-2">
        <ArrowLeft className="w-5 h-5 text-pink-500" />
        <a href={backUrl} className="text-pink-500 hover:underline">
          Back to Tools
        </a>
      </div>

      {/* JSON-LD structured data without schema-dts typings */}
      <JsonLd
        // Removed typing here; using any or no generic parameters to avoid schema-dts import
        item={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "YouTube Earnings Calculator",
          operatingSystem: "All",
          applicationCategory: "FinanceApplication",
          description:
            "Calculate your estimated YouTube earnings based on views, CTR, CPM, and videos per month.",
          url: "https://johncrestani.me/content-creation-tools/youtube-earnings-calculator",
        }}
      />

      {/* Calculator UI */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
        className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold mb-4 flex items-center"
        >
          <Youtube className="mr-2 text-pink-500" />
          YouTube AdSense Earnings Calculator
        </motion.h2>

        <motion.div className="space-y-4">
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
              min={0}
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
              min={0}
              step={0.1}
              onChange={(e) => setCtr(Number(e.target.value))}
              className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
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
              min={0}
              step={0.1}
              onChange={(e) => setCpm(Number(e.target.value))}
              className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
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
              min={0}
              onChange={(e) => setVideosPerMonth(Number(e.target.value))}
              className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
            />
          </div>
        </motion.div>

        <motion.div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Monthly Earnings</h3>
            <p className="text-2xl font-bold text-pink-500">
              ${results.monthlyEarnings}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Yearly Earnings</h3>
            <p className="text-2xl font-bold text-green-500">
              ${results.yearlyEarnings}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Clicks per Video</h3>
            <p className="text-2xl font-bold text-blue-500">
              {results.clicksPerVideo}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Monthly Views</h3>
            <p className="text-2xl font-bold text-purple-500">
              {results.totalViews.toLocaleString()}
            </p>
          </div>
        </motion.div>

        <div className="mt-6 text-sm text-gray-400">
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
        </div>
      </motion.div>

      {/* RelatedTools component to keep */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-8"
      >
        <RelatedTools currentPath={pageUrlPath} />
      </motion.div>
    </div>
  );
}
