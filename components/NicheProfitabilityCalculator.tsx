'use client'

import { useState } from 'react'
import { TrendingUp } from 'lucide-react'

export default function NicheProfitabilityCalculator() {
  const [monthlySearchVolume, setMonthlySearchVolume] = useState<number>(10000)
  const [averageCPC, setAverageCPC] = useState<number>(0.5)
  const [conversionRate, setConversionRate] = useState<number>(2)
  const [averageCommission, setAverageCommission] = useState<number>(50)

  const calculateProfitability = () => {
    const clicks = monthlySearchVolume * 0.01 // Assuming 1% CTR
    const cost = clicks * averageCPC
    const conversions = clicks * (conversionRate / 100)
    const revenue = conversions * averageCommission
    const profit = revenue - cost

    return {
      clicks: Math.round(clicks),
      cost: cost.toFixed(2),
      conversions: Math.round(conversions),
      revenue: revenue.toFixed(2),
      profit: profit.toFixed(2)
    }
  }

  const results = calculateProfitability()

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <TrendingUp className="mr-2 text-pink-500" />
        Niche Profitability Calculator
      </h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="monthlySearchVolume" className="block text-sm font-medium text-gray-300">
            Monthly Search Volume
          </label>
          <input
            type="number"
            id="monthlySearchVolume"
            value={monthlySearchVolume}
            onChange={(e) => setMonthlySearchVolume(Number(e.target.value))}
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <div>
          <label htmlFor="averageCPC" className="block text-sm font-medium text-gray-300">
            Average CPC ($)
          </label>
          <input
            type="number"
            id="averageCPC"
            value={averageCPC}
            onChange={(e) => setAverageCPC(Number(e.target.value))}
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
            step="0.01"
          />
        </div>
        <div>
          <label htmlFor="conversionRate" className="block text-sm font-medium text-gray-300">
            Conversion Rate (%)
          </label>
          <input
            type="number"
            id="conversionRate"
            value={conversionRate}
            onChange={(e) => setConversionRate(Number(e.target.value))}
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
            step="0.1"
          />
        </div>
        <div>
          <label htmlFor="averageCommission" className="block text-sm font-medium text-gray-300">
            Average Commission ($)
          </label>
          <input
            type="number"
            id="averageCommission"
            value={averageCommission}
            onChange={(e) => setAverageCommission(Number(e.target.value))}
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
          />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Estimated Clicks</h3>
          <p className="text-2xl font-bold text-blue-500">{results.clicks}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Ad Cost</h3>
          <p className="text-2xl font-bold text-red-500">${results.cost}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Conversions</h3>
          <p className="text-2xl font-bold text-green-500">{results.conversions}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Revenue</h3>
          <p className="text-2xl font-bold text-yellow-500">${results.revenue}</p>
        </div>
        <div className="col-span-2">
          <h3 className="text-lg font-semibold mb-2">Estimated Profit</h3>
          <p className="text-3xl font-bold text-pink-500">${results.profit}</p>
        </div>
      </div>
      <div className="mt-6 text-sm text-gray-400">
        <p>This calculator provides estimates based on the given inputs. Actual profitability may vary depending on various factors such as competition, market trends, and your marketing strategy.</p>
        <p className="mt-2">Want to learn how to find and dominate profitable niches? Check out John Crestani's <a href="/api/sale" className="text-pink-500 hover:underline">Super Affiliate System Pro</a>.</p>
      </div>
    </div>
  )
}

