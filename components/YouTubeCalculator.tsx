'use client'

import { useState } from 'react'
import { Youtube } from 'lucide-react'

export default function YouTubeCalculator() {
  const [views, setViews] = useState<number>(10000)
  const [ctr, setCtr] = useState<number>(2)
  const [cpm, setCpm] = useState<number>(4)
  const [videosPerMonth, setVideosPerMonth] = useState<number>(8)

  const calculateEarnings = () => {
    // Calculate monthly earnings based on views, CTR, and CPM
    const clicksPerVideo = views * (ctr / 100)
    const earningsPerVideo = (clicksPerVideo * cpm) / 1000
    const monthlyEarnings = earningsPerVideo * videosPerMonth

    return {
      monthlyEarnings: monthlyEarnings.toFixed(2),
      yearlyEarnings: (monthlyEarnings * 12).toFixed(2),
      clicksPerVideo: Math.round(clicksPerVideo),
      totalViews: views * videosPerMonth
    }
  }

  const results = calculateEarnings()

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Youtube className="mr-2 text-pink-500" />
        YouTube AdSense Earnings Calculator
      </h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="views" className="block text-sm font-medium text-gray-300">
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
          <label htmlFor="ctr" className="block text-sm font-medium text-gray-300">
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
          <label htmlFor="cpm" className="block text-sm font-medium text-gray-300">
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
          <label htmlFor="videosPerMonth" className="block text-sm font-medium text-gray-300">
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
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Monthly Earnings</h3>
          <p className="text-2xl font-bold text-pink-500">${results.monthlyEarnings}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Yearly Earnings</h3>
          <p className="text-2xl font-bold text-green-500">${results.yearlyEarnings}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Clicks per Video</h3>
          <p className="text-2xl font-bold text-blue-500">{results.clicksPerVideo}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Monthly Views</h3>
          <p className="text-2xl font-bold text-purple-500">{results.totalViews.toLocaleString()}</p>
        </div>
      </div>
      <div className="mt-6 text-sm text-gray-400">
        <p>This calculator provides estimates based on average YouTube AdSense rates. Actual earnings can vary based on factors such as niche, audience location, and seasonality.</p>
        <p className="mt-2">{`Want to learn how to monetize your YouTube channel beyond AdSense? Check out John Crestani's`} <a href="/api/sale" className="text-pink-500 hover:underline">Super Affiliate System Pro</a>.</p>
      </div>
    </div>
  )
}

