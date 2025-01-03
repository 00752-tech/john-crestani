import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function Features() {
  const features = [
    "2025 Market Trends and Opportunities",
    "AI-Assisted Campaign Creation",
    "Blockchain Affiliate Marketing Strategies",
    "Advanced Data Analytics Dashboard",
    "Personalized 1-on-1 Coaching Sessions",
    "Weekly Live Q&A with John Crestani",
    "Exclusive Affiliate Network Access",
    "Mobile Optimization Techniques"
  ]

  return (
    <section id="features" className="py-20 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">{`What's Inside Super Affiliate System Pro 2025`}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            {features.map((feature, index) => (
              <div key={index} className="flex items-center bg-gray-900 p-6 rounded-lg mb-4 transform hover:scale-105 transition duration-300">
                <CheckCircle className="text-pink-500 mr-4" size={24} />
                <span className="text-lg text-gray-200">{feature}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <Image 
              src="https://www.gojctraining.com/hosted/images/c2/9d7b3017b344e3acf9aea3412028cd/johnnewimg5.png" 
              alt="Super Affiliate System Pro Features" 
              width={500} 
              height={500} 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

