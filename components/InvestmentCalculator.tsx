'use client'

import { useState } from 'react'
import { TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

export default function InvestmentCalculator() {
  const [initialInvestment, setInitialInvestment] = useState<number>(1000)
  const [monthlyContribution, setMonthlyContribution] = useState<number>(100)
  const [annualReturn, setAnnualReturn] = useState<number>(7)
  const [investmentLength, setInvestmentLength] = useState<number>(10)

  const calculateInvestment = (): number => {
    const monthlyRate = annualReturn / 12 / 100
    const months = investmentLength * 12
    const futureValue = initialInvestment * Math.pow(1 + monthlyRate, months) +
      monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)
    return Math.round(futureValue * 100) / 100
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <TrendingUp className="mr-2 text-pink-500" />
        Investment Calculator
      </h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="initialInvestment" className="block text-sm font-medium text-gray-300">
            Initial Investment ($)
          </label>
          <input
            type="number"
            id="initialInvestment"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(Number(e.target.value))}
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
          <label htmlFor="annualReturn" className="block text-sm font-medium text-gray-300">
            Annual Return (%)
          </label>
          <input
            type="number"
            id="annualReturn"
            value={annualReturn}
            onChange={(e) => setAnnualReturn(Number(e.target.value))}
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <div>
          <label htmlFor="investmentLength" className="block text-sm font-medium text-gray-300">
            Investment Length (years)
          </label>
          <input
            type="number"
            id="investmentLength"
            value={investmentLength}
            onChange={(e) => setInvestmentLength(Number(e.target.value))}
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
          />
        </div>
      </div>
      <motion.div 
        className="mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-xl font-semibold mb-2">Estimated Future Value</h3>
        <motion.p 
          key={calculateInvestment()}
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          className="text-4xl font-bold text-pink-500"
        >
          ${calculateInvestment().toLocaleString()}
        </motion.p>
      </motion.div>
      <motion.div 
        className="mt-6 text-sm text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p>This calculator provides an estimate based on the given inputs. Actual investment returns may vary depending on market conditions and other factors.</p>
        <p className="mt-2">{`Want to learn how to leverage your investments for affiliate marketing? Check out John Crestani's `}<a href="#" className="text-pink-500 hover:underline">Super Affiliate System Pro</a>.</p>
      </motion.div>
    </motion.div>
  )
}

