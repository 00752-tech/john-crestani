"use client";

import { Calculator, TrendingUp, DollarSign, Users } from "lucide-react";
import InteractiveButton from "./InteractiveButton";
import { motion } from "framer-motion";

export default function FreeTools() {
  const tools = [
    {
      name: "Affiliate Earnings Calculator",
      description: "Estimate your potential affiliate marketing earnings.",
      url: "/affiliate-marketing-tools/earnings-calculator",
      icon: Calculator,
    },
    {
      name: "ROAS Calculator",
      description: "Calculate your Return on Ad Spend for campaigns.",
      url: "/advertising-tools/roas-calculator",
      icon: TrendingUp,
    },
    {
      name: "Dropshipping Profit Calculator",
      description: "Analyze potential profits for your dropshipping business.",
      url: "/ecommerce-tools/dropshipping-profit-calculator",
      icon: DollarSign,
    },
    {
      name: "Influencer Earnings Calculator",
      description: "Estimate earnings based on your social media influence.",
      url: "/influencer-marketing-tools/earnings-calculator",
      icon: Users,
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            ease: [0.215, 0.610, 0.355, 1.000],
          }}
          className="text-3xl font-bold mb-12 text-center gradient-text"
        >
          Free Affiliate Marketing Tools
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <motion.article
              key={tool.name}
              className="grid"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <InteractiveButton
                onClick={() => {
                  window.scrollTo(0, 0);
                  window.location.href = tool.url;
                }}
                className="flex flex-col bg-black p-6 rounded-lg shadow-lg hover:bg-gray-800 transition-all group text-left h-full duration-300 ease-linear"
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, -10, 0],
                      transition: {
                        rotate: {
                          duration: 0.5,
                          ease: "easeInOut",
                          repeatType: "reverse"
                        }
                      }
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: [0.215, 0.610, 0.355, 1.000],
                    }}
                  >
                    <tool.icon className="w-8 h-8 text-pink-500 mr-3 shrink-0" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1 + 0.2,
                      ease: "easeOut",
                    }}
                    className="text-xl font-semibold group-hover:text-pink-500 transition-colors"
                  >
                    {tool.name}
                  </motion.h3>
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.3,
                  }}
                  className="text-gray-400 flex-grow"
                >
                  {tool.description}
                </motion.p>
              </InteractiveButton>
            </motion.article>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          whileHover={{ scale: 1.05 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="text-center mt-12"
        >
          <InteractiveButton
            onClick={() => {
              window.scrollTo(0, 0);
              window.location.href = "/affiliate-marketing-tools";
            }}
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300"
          >
            View All Free Tools
          </InteractiveButton>
        </motion.div>
      </div>
    </section>
  );
}
