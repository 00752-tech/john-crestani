// File: app/influencer-marketing-tools/earnings-calculator/ClientInfluencerEarningsCalculator.tsx
"use client";

import React, { useState } from "react";

export default function ClientInfluencerEarningsCalculator() {
  // State for inputs
  const [followers, setFollowers] = useState<number | "">("");
  const [engagementRate, setEngagementRate] = useState<number | "">("");
  const [earningsPerEngagement, setEarningsPerEngagement] = useState<number | "">("");
  const [estimatedEarnings, setEstimatedEarnings] = useState<number | null>(null);

  const handleCalculate = () => {
    if (
      typeof followers === "number" &&
      typeof engagementRate === "number" &&
      typeof earningsPerEngagement === "number" &&
      followers > 0 &&
      engagementRate > 0 &&
      earningsPerEngagement > 0
    ) {
      const earnings = followers * (engagementRate / 100) * earningsPerEngagement;
      setEstimatedEarnings(earnings);
    } else {
      setEstimatedEarnings(null);
      alert("Please enter valid positive numbers for all fields.");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8">
      <div className="w-full max-w-lg bg-gray-900 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6 gradient-text text-center">
          Influencer Earnings Calculator
        </h1>
        <p className="text-gray-400 mb-8 text-center">
          Predict your potential influencer earnings based on followers and engagement.
        </p>

        <div className="space-y-6">
          <div>
            <label htmlFor="followers" className="block text-gray-300 font-semibold mb-2">
              Number of Followers
            </label>
            <input
              id="followers"
              type="number"
              min={0}
              step={1}
              value={followers}
              onChange={(e) => setFollowers(e.target.value === "" ? "" : Number(e.target.value))}
              className="w-full rounded-md bg-gray-800 border border-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="e.g. 10000"
              aria-label="Number of Followers"
            />
          </div>

          <div>
            <label htmlFor="engagementRate" className="block text-gray-300 font-semibold mb-2">
              Average Engagement Rate (%)
            </label>
            <input
              id="engagementRate"
              type="number"
              min={0}
              max={100}
              step={0.1}
              value={engagementRate}
              onChange={(e) => setEngagementRate(e.target.value === "" ? "" : Number(e.target.value))}
              className="w-full rounded-md bg-gray-800 border border-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="e.g. 5.5"
              aria-label="Average Engagement Rate"
            />
          </div>

          <div>
            <label htmlFor="earningsPerEngagement" className="block text-gray-300 font-semibold mb-2">
              Estimated Earnings per Engagement ($)
            </label>
            <input
              id="earningsPerEngagement"
              type="number"
              min={0}
              step={0.01}
              value={earningsPerEngagement}
              onChange={(e) => setEarningsPerEngagement(e.target.value === "" ? "" : Number(e.target.value))}
              className="w-full rounded-md bg-gray-800 border border-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="e.g. 0.10"
              aria-label="Estimated Earnings per Engagement"
            />
          </div>

          <button
            onClick={handleCalculate}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 py-3 rounded-full font-bold text-white text-xl hover:brightness-110 transition"
            type="button"
            aria-label="Calculate Influencer Earnings"
          >
            Calculate Earnings
          </button>

          {estimatedEarnings !== null && (
            <div className="mt-6 text-center text-2xl font-semibold text-pink-400" aria-live="polite" role="status">
              Estimated Earnings: ${estimatedEarnings.toFixed(2)}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(90deg, #ec4899, #a21caf);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </main>
  );
}
