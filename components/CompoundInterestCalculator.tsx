'use client'

import { useState } from 'react'
import { TrendingUp } from 'lucide-react'

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState<number>(10000)
  const [monthlyContribution, setMonthlyContribution] = useState<number>(500)
  const [annualRate, setAnnualRate] = useState<number>(8)
  const [years, setYears] = useState<number>(10)
  const [compoundingFrequency, setCompoundingFrequency] = useState<string>("monthly")

  const calculateCompoundInterest = () => {
    const periodsPerYear = {
      daily: 365,
      weekly: 52,
      monthly: 12,
      quarterly: 4,
      annually: 1,
    }[compoundingFrequency] ?? 1; // Default to 1 if compoundingFrequency is invalid
    
    const r = annualRate / 100 / periodsPerYear;
    const n = periodsPerYear * years;
    const monthlyToPerPeriod = monthlyContribution * 12 / periodsPerYear;

    const amount = principal * Math.pow(1 + r, n) +
      monthlyToPerPeriod * (Math.pow(1 + r, n) - 1) / r

    const totalContributions = principal + (monthlyContribution * 12 * years)
    const interestEarned = amount - totalContributions

    return {
      futureValue: amount.toFixed(2),
      totalContributions: totalContributions.toFixed(2),
      interestEarned: interestEarned.toFixed(2)
    }
  }

  const results = calculateCompoundInterest()

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <TrendingUp className="mr-2 text-pink-500" />
        Compound Interest Calculator
      </h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="principal" className="block text-sm font-medium text-gray-300">
            Initial Investment ($)
          </label>
          <input
            type="number"
            id="principal"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <div>
          <label htmlFor="monthlyContribution" className="block text-sm font-medium text-gray-300">
            Monthly Contribution ($)
          </label>
          <input
            type="number"
            id="monthlyContribution"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(Number(e.target.value))}
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <div>
          <label htmlFor="annualRate" className="block text-sm font-medium text-gray-300">
            Annual Interest Rate (%)
          </label>
          <input
            type="number"
            id="annualRate"
            value={annualRate}
            onChange={(e) => setAnnualRate(Number(e.target.value))}
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
            step="0.1"
          />
        </div>
        <div>
          <label htmlFor="years" className="block text-sm font-medium text-gray-300">
            Time Period (Years)
          </label>
          <input
            type="number"
            id="years"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <div>
          <label htmlFor="compoundingFrequency" className="block text-sm font-medium text-gray-300">
            Compounding Frequency
          </label>
          <select
            id="compoundingFrequency"
            value={compoundingFrequency}
            onChange={(e) => setCompoundingFrequency(e.target.value)}
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="annually">Annually</option>
          </select>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-black p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Future Value</h3>
          <p className="text-2xl font-bold text-pink-500">${results.futureValue}</p>
        </div>
        <div className="bg-black p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Total Contributions</h3>
          <p className="text-2xl font-bold text-blue-500">${results.totalContributions}</p>
        </div>
        <div className="bg-black p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Interest Earned</h3>
          <p className="text-2xl font-bold text-green-500">${results.interestEarned}</p>
        </div>
      </div>
      <div className="mt-6 text-sm text-gray-400">
        <p>This calculator shows the power of compound interest over time. While traditional investments can grow your wealth slowly, consider accelerating your earnings through affiliate marketing.</p>
        <p className="mt-2">{`Want to learn how to generate higher returns? Check out John Crestani's`} <a href="/api/sale" className="text-pink-500 hover:underline">Super Affiliate System Pro</a>.</p>
      </div>
    </div>
  )
}

