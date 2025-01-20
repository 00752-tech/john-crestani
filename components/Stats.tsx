"use client"
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { number: 2978323, label: "Earned by Crestani's Students!", prefix: "$", suffix: "+" }, 
    { number: 10836, label: "Thriving Students!", suffix: "+" },
    { number: 8, label: "of Trusted Results!", suffix: "+ Years" },
    { number: 24, label: "Support Anytime, Anywhere", suffix: "/7" },
    { number: "4.6", label: "Stars on Trustpilot", suffix: " Stars" },
  ]

  return (
    <section className="py-5 bg-gray-900" ref={ref}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-500 mb-2">
                {typeof stat.number === 'string' ? stat.number : (
                  <CountUp
                    start={0}
                    end={stat.number}
                    duration={2}
                    prefix={stat.prefix || ''}
                    suffix={stat.suffix || ''}
                    separator=","
                  />
                )}
              </h3>
              <p className="text-white text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
