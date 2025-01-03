'use client'

import Image from 'next/image'

export default function Hero() {
  const handleGetStarted = () => {
    window.location.href = '/api/sale'
  }

  const handleWatchVideo = () => {
    window.location.href = '/api/webinar'
  }

  return (
    <section className="pt-32 pb-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Master Affiliate Marketing in 2025
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            <span className="gradient-text-purple">John Crestani's Super</span>{' '}
            <span className="gradient-text-green">Affiliate System Pro</span>
          </h2>
          <p className="text-xl mb-8">Now Updated for the Digital Landscape of 2025</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleGetStarted}
              className="bg-[#ff00ff] text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#ff33ff] transition duration-300"
            >
              Get Started Now
            </button>
            <button 
              onClick={handleWatchVideo}
              className="border-2 border-white text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition duration-300"
            >
              Watch Video
            </button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <Image
            src="https://www.gojctraining.com/hosted/images/e4/ea2c8c40e945b3958bac129f6e43be/johnnewimg94.png"
            alt="Affiliate Marketing Earnings Graph"
            width={800}
            height={600}
            className="rounded-lg shadow-2xl"
            priority
          />
          <div className="absolute top-0 right-0 bg-[#ff00ff] rounded-full w-24 h-24 md:w-32 md:h-32 flex items-center justify-center text-white font-bold text-base md:text-xl text-center transform translate-x-1/4 -translate-y-1/4">
            New for 2025
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">
        <div>
          <p className="text-3xl font-bold text-[#ff00ff]">$2.9M+</p>
          <p className="text-gray-300">Student Earnings</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-[#ff00ff]">10,000+</p>
          <p className="text-gray-300">Active Students</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-[#ff00ff]">8+ Years</p>
          <p className="text-gray-300">of Proven Results</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-[#ff00ff]">24/7</p>
          <p className="text-gray-300">Support</p>
        </div>
      </div>
    </section>
  )
}

