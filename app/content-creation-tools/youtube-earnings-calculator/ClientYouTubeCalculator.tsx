/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";

export default function ClientInfluencerEarningsCalculator() {
  const handleLearnMore = () => {
    window.open(
      "https://3bcbcue6q69w0u3g4p91bo0m3w.hop.clickbank.net/?&traffic_source=influ_earnings_calc_pg",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      {/* Global no-hover button styles */}
      <style jsx global>{`
        .no-hover,
        .no-hover:hover,
        .no-hover:focus,
        .no-hover:active,
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
      `}</style>

      <div className="container mx-auto px-4">
        {/* Replace the following placeholder with your actual InfluencerEarningsCalculator component */}
        <div>
          {/* Your Influencer Earnings Calculator component goes here */}
          {/* Add relevant markup or import and render your actual calculator component */}
          <p className="text-center text-gray-300 text-lg my-12">
            [Influencer Earnings Calculator Component Placeholder]
          </p>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleLearnMore}
            className="no-hover inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold select-none"
            type="button"
            aria-label="Unlock My Predictable AI Income Blueprint Now!"
            style={{
              boxShadow: "none",
              textDecoration: "none",
              outline: "none",
              filter: "none",
              cursor: "pointer",
            }}
          >
            Unlock My Predictable AI Income Blueprint Now!
          </button>
          <p className="text-sm text-gray-400 mt-4 max-w-xl mx-auto">
            Join the AI Marketing Club for $27, then upgrade to the full Super
            Affiliate System Pro for just $197 (original price $997).
          </p>
        </div>
      </div>
    </div>
  );
}
