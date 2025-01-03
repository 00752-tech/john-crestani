'use client'

import { useState } from 'react'
import { DollarSign } from 'lucide-react'

export default function ROASCalculator() {
  const [adSpend, setAdSpend] = useState<number>(1000)
  const [revenue, setRevenue] = useState<number>(3000)

  const calculateROAS = (): number => {
    if (adSpend === 0) return 0
    return revenue / adSpend
  }

  const roasValue = calculateROAS()

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <DollarSign className="mr-2 text-pink-500" />
        Return on Ad Spend (ROAS) Calculator
      </h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="adSpend" className="block text-sm font-medium text-gray-300">
            Ad Spend ($)
          </label>
          <input
            type="number"
            id="adSpend"
            value={adSpend}
            onChange={(e) => setAdSpend(Number(e.target.value))}
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <div>
          <label htmlFor="revenue" className="block text-sm font-medium text-gray-300">
            Revenue ($)
          </label>
          <input
            type="number"
            id="revenue"
            value={revenue}
            onChange={(e) => setRevenue(Number(e.target.value))}
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
          />
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Your ROAS</h3>
        <p className="text-4xl font-bold text-pink-500">{roasValue.toFixed(2)}x</p>
      </div>
      <div className="mt-6 text-sm text-gray-400">
        <p>ROAS (Return on Ad Spend) is a marketing metric that measures the revenue generated for every dollar spent on advertising. A ROAS of 1x means you're breaking even, while anything above 1x indicates profit.</p>
        <p className="mt-2">Want to learn how to maximize your ROAS? Check out John Crestani's <a href="/api/sale" className="text-pink-500 hover:underline">Super Affiliate System Pro</a>.</p>
      </div>
    </div>
  )
}

