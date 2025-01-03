'use client'

export default function CTA() {
  const handleEnrollClick = () => {
    window.location.href = '/api/sale'
  }

  const handleWebinarClick = () => {
    window.location.href = '/api/webinar'
  }

  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Master Affiliate Marketing in 2025?</h2>
        <p className="text-xl mb-8">Join thousands of successful affiliates who have transformed their lives with Super Affiliate System Pro</p>
        <div className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Limited Time Offer</h3>
          <p className="text-2xl text-gray-600 mb-6">Get 50% OFF Today!</p>
          <div className="flex justify-center items-center space-x-4 mb-6">
            <span className="text-4xl font-bold text-gray-400 line-through">$1,994</span>
            <span className="text-5xl font-bold text-pink-500">$997</span>
          </div>
          <button 
            onClick={handleEnrollClick}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 px-12 rounded-full text-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300 transform hover:scale-105"
          >
            Enroll Now
          </button>
          <p className="mt-4 text-sm text-gray-600">30-Day Money-Back Guarantee</p>
        </div>
        <div className="mt-8">
          <button
            onClick={handleWebinarClick}
            className="text-white underline hover:text-pink-200 transition duration-300"
          >
            Or Join Our Free Webinar to Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

