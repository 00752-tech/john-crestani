'use client'

import { useState } from 'react'
import { DollarSign } from 'lucide-react'

export default function DropshippingCalculator() {
  const [productCost, setProductCost] = useState<number>(10)
  const [shippingCost, setShippingCost] = useState<number>(5)
  const [sellingPrice, setSellingPrice] = useState<number>(30)
  const [monthlyOrders, setMonthlyOrders] = useState<number>(100)
  const [marketingCost, setMarketingCost] = useState<number>(300)

  const calculateProfits = () => {
    const revenue = sellingPrice * monthlyOrders
    const totalCost = (productCost + shippingCost) * monthlyOrders + marketingCost
    const profit = revenue - totalCost
    const profitMargin = (profit / revenue) * 100

    return {
      revenue: revenue.toFixed(2),
      totalCost: totalCost.toFixed(2),
      profit: profit.toFixed(2),
      profitMargin: profitMargin.toFixed(1)
    }
  }

  const results = calculateProfits()

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <DollarSign className="mr-2 text-pink-500" />
        Dropshipping Profit Calculator
      </h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="productCost" className="block text-sm font-medium text-gray-300">
            Product Cost ($)
          </label>
          <input
            type="number"
            id="productCost"
            value={productCost}
            onChange={(e) => setProductCost(Number(e.target.value))}
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <div>
          <label htmlFor="shippingCost" className="block text-sm font-medium text-gray-300">
            Shipping Cost ($)
          </label>
          <input
            type="number"
            id="shippingCost"
            value={shippingCost}
            onChange={(e) => setShippingCost(Number(e.target.value))}
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <div>
          <label htmlFor="sellingPrice" className="block text-sm font-medium text-gray-300">
            Selling Price ($)
          </label>
          <input
            type="number"
            id="sellingPrice"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(Number(e.target.value))}
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <div>
          <label htmlFor="monthlyOrders" className="block text-sm font-medium text-gray-300">
            Expected Monthly Orders
          </label>
          <input
            type="number"
            id="monthlyOrders"
            value={monthlyOrders}
            onChange={(e) => setMonthlyOrders(Number(e.target.value))}
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <div>
          <label htmlFor="marketingCost" className="block text-sm font-medium text-gray-300">
            Monthly Marketing Cost ($)
          </label>
          <input
            type="number"
            id="marketingCost"
            value={marketingCost}
            onChange={(e) => setMarketingCost(Number(e.target.value))}
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
          />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Monthly Revenue</h3>
          <p className="text-2xl font-bold text-green-500">${results.revenue}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Total Costs</h3>
          <p className="text-2xl font-bold text-red-500">${results.totalCost}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Net Profit</h3>
          <p className="text-2xl font-bold text-pink-500">${results.profit}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Profit Margin</h3>
          <p className="text-2xl font-bold text-blue-500">{results.profitMargin}%</p>
        </div>
      </div>
      <div className="mt-6 text-sm text-gray-400">
        <p>This calculator provides estimates based on the given inputs. Actual profits may vary depending on various factors such as platform fees, refunds, and market conditions.</p>
        <p className="mt-2">Want to learn proven dropshipping strategies? Check out John Crestani's <a href="/api/sale" className="text-pink-500 hover:underline">Super Affiliate System Pro</a>.</p>
      </div>
    </div>
  )
}

