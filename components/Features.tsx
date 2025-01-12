"use client";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    "2025 Market Trends and Opportunities",
    "AI-Assisted Campaign Creation",
    "Blockchain Affiliate Marketing Strategies",
    "Advanced Data Analytics Dashboard",
    "Personalized 1-on-1 Coaching Sessions",
    "Weekly Live Q&A with John Crestani",
    "Exclusive Affiliate Network Access",
    "Mobile Optimization Techniques",
  ];

  return (
    <section id="features" className="px-4 py-20 pt-32 bg-black text-white">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="text-3xl font-bold mb-12 text-center gradient-text"
        >{`What's Inside Super Affiliate System Pro 2025`}</motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            {features.map((feature, index) => (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "rgba(31, 41, 55, 0.9)",
                }}
                key={index}
                className="flex items-center bg-gray-900 p-6 rounded-lg mb-4 transition-colors duration-200"
              >
                <motion.div
                  initial={{ rotate: -180, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1 + 0.2,
                  }}
                >
                  <CheckCircle className="text-pink-500 mr-4" size={24} />
                </motion.div>
                <span className="text-lg text-gray-200">{feature}</span>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="flex items-center justify-center"
          >
            <Image
              src="https://www.gojctraining.com/hosted/images/c2/9d7b3017b344e3acf9aea3412028cd/johnnewimg5.png"
              alt="Super Affiliate System Pro Features"
              width={500}
              height={500}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
