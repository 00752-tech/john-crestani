/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion } from "framer-motion";
import YouTubeCalculator from "@/components/YouTubeCalculator";
import ShareButtons from "@/components/ShareButtons";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { JsonLd } from "react-schemaorg";
import RelatedTools from "@/components/RelatedTools";

export default function ClientYouTubeCalculator({
  backUrl = "/free-tools",
  pageUrlPath = "/content-creation-tools/youtube-earnings-calculator",
}: {
  backUrl?: string;
  pageUrlPath?: string;
}) {
  // Affiliate link, click handler, page info
  const ctaAffiliateLink =
    "https://4147arbzmafm0s762q695w2v7q.hop.clickbank.net/?&traffic_source=youtube_earnings_calc";

  const pageUrl = `https://johncrestani.me${pageUrlPath}`;
  const pageTitle = "Predict Your YouTube Income: Free AdSense Calculator";

  const handleCtaClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(ctaAffiliateLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      {/* Global button style */}
      <style jsx global>{`
        .no-hover,
        .no-hover:hover,
        .no-hover:active,
        .no-hover:focus,
        .no-hover:visited {
          background: linear-gradient(to right, #ec4899, #a21caf) !important;
          color: #fff !important;
          outline: none;
          box-shadow: none !important;
          text-decoration: none !important;
          cursor: pointer !important;
          transition: none !important;
          filter: none !important;
        }
        .gradient-text {
          background: linear-gradient(to right, #ec4899, #a21caf);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
      `}</style>

      <div className="container mx-auto px-4">
        {/* Back Link */}
        <Link
          href={backUrl}
          className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Tools
        </Link>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text leading-relaxed pb-4"
        >
          Reclaim Your Financial Future: Free YouTube AdSense Earnings Calculator
        </motion.h1>

        {/* Introductory Paragraph */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl text-center mb-8 text-gray-300">
            Are you tired of guessing your YouTube income potential? Our Free
            YouTube AdSense Earnings Calculator is designed to{" "}
            <strong>remove uncertainty</strong> and
