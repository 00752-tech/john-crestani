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
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 gradient-text">
           {` John Crestani's Super Affiliate System Pro`}
          </h2>
          <p className="text-xl mb-8">Now Updated for the Digital Landscape of 2025</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300 transform hover:scale-105"
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
          <div className="relative">
            <Image 
              src="https://www.gojctraining.com/hosted/images/02/887709d34346a89d87f5a2eca39247/johnnewimg99.png" 
              alt="John Crestani" 
              width={600} 
              height={600} 
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full w-24 h-24 md:w-32 md:h-32 flex items-center justify-center text-white font-bold text-base md:text-xl text-center p-4 transform md:translate-x-0 md:-translate-y-1/3">
              New for 2025
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
