'use client'

import { useState } from 'react'
import { Maximize2 } from 'lucide-react'

export default function AffiliateLinkCTROptimizer() {
  const [currentCTR, setCurrentCTR] = useState<number>(2)
  const [linkPlacement, setLinkPlacement] = useState<string>('middle')
  const [anchorTextRelevance, setAnchorTextRelevance] = useState<number>(5)
  const [surroundingContentQuality, setSurroundingContentQuality] = useState<number>(5)

  const calculateOptimizedCTR = () => {
    let optimizedCTR = currentCTR

    // Link placement impact
    if (linkPlacement === 'top') optimizedCTR *= 1.1
    else if (linkPlacement === 'bottom') optimizedCTR *= 0.9

    // Anchor text relevance impact (1-10 scale)
    optimizedCTR *= (1 + (anchorTextRelevance - 5) * 0.05)

    // Surrounding content quality impact (1-10 scale)
    optimizedCTR *= (1 + (surroundingContentQuality - 5) * 0.03)

    return optimizedCTR.toFixed(2)
  }

  const optimizedCTR = calculateOptimizedCTR()

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Maximize2 className="mr-2 text-pink-500" />
        Affiliate Link CTR Optimizer
      </h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="currentCTR" className="block text-sm font-medium text-gray-300">
            Current Click-Through Rate (%)
          </label>
          <input
            type="number"
            id="currentCTR"
            value={currentCTR}
            onChange={(e) => setCurrentCTR(Number(e.target.value))}
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
            step="0.1"
          />
        </div>
        <div>
          <label htmlFor="linkPlacement" className="block text-sm font-medium text-gray-300">
            Link Placement
          </label>
          <select
            id="linkPlacement"
            value={linkPlacement}
            onChange={(e) => setLinkPlacement(e.target.value)}
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
          >
            <option value="top">Top of Content</option>
            <option value="middle">Middle of Content</option>
            <option value="bottom">Bottom of Content</option>
          </select>
        </div>
        <div>
          <label htmlFor="anchorTextRelevance" className="block text-sm font-medium text-gray-300">
            Anchor Text Relevance (1-10)
          </label>
          <input
            type="range"
            id="anchorTextRelevance"
            min="1"
            max="10"
            value={anchorTextRelevance}
            onChange={(e) => setAnchorTextRelevance(Number(e.target.value))}
            className="mt-1 block w-full"
          />
          <span className="text-sm text-gray-400">{anchorTextRelevance}</span>
        </div>
        <div>
          <label htmlFor="surroundingContentQuality" className="block text-sm font-medium text-gray-300">
            Surrounding Content Quality (1-10)
          </label>
          <input
            type="range"
            id="surroundingContentQuality"
            min="1"
            max="10"
            value={surroundingContentQuality}
            onChange={(e) => setSurroundingContentQuality(Number(e.target.value))}
            className="mt-1 block w-full"
          />
          <span className="text-sm text-gray-400">{surroundingContentQuality}</span>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Estimated Optimized CTR</h3>
        <p className="text-4xl font-bold text-pink-500">{optimizedCTR}%</p>
        <p className="text-sm text-gray-400 mt-2">
          Potential improvement: {((Number(optimizedCTR) - currentCTR) / currentCTR * 100).toFixed(2)}%
        </p>
      </div>
      <div className="mt-6 text-sm text-gray-400">
        <p>This optimizer provides estimates based on general best practices. Actual results may vary depending on your specific niche, audience, and content.</p>
        <p className="mt-2">Want to learn advanced techniques for optimizing your affiliate links? Check out John Crestani's <a href="/api/sale" className="text-pink-500 hover:underline">Super Affiliate System Pro</a>.</p>
      </div>
    </div>
  )
}

