import Link from 'next/link'

export default function ToolsCTA() {
  return (
    <div className="bg-gray-900 p-8 rounded-lg mt-12">
      <h2 className="text-2xl font-semibold mb-4 text-white">Access Your Money-Making Matrix</h2>
      <p className="text-gray-300 mb-6">
        Discover our full suite of free affiliate marketing tools and calculators to boost your success.
      </p>
      <Link 
        href="/free-tools"
        className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300"
      >
        Unveil Your Conversion Catalysts
      </Link>
    </div>
  )
}

