"use client";

import { Calculator, TrendingUp, DollarSign, Users } from "lucide-react";
import InteractiveButton from "./InteractiveButton";
import { motion } from "framer-motion";

const tools = [
  {
    name: "Affiliate Earnings Calculator",
    description:
      "Estimate your potential affiliate marketing earnings based on traffic, conversion rates, and commission values.",
    url: "/affiliate-marketing-tools/earnings-calculator",
    icon: Calculator,
  },
  {
    name: "ROAS Calculator",
    description:
      "Calculate your Return on Ad Spend to measure and improve the effectiveness of your advertising campaigns.",
    url: "/advertising-tools/roas-calculator",
    icon: TrendingUp,
  },
  {
    name: "Dropshipping Profit Calculator",
    description:
      "Calculate potential profits for your dropshipping business by analyzing costs, pricing, and order volume.",
    url: "/ecommerce-tools/dropshipping-profit-calculator",
    icon: DollarSign,
  },
  {
    name: "Influencer Earnings Calculator",
    description:
      "Estimate your potential earnings as an influencer based on your follower count and engagement rate.",
    url: "/influencer-marketing-tools/earnings-calculator",
    icon: Users,
  },
];

export default function FeaturedTool() {
  const randomTool = tools[Math.floor(Math.random() * tools.length)];
  const Icon = randomTool.icon;

  return (
    <section className=" py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="text-3xl font-bold mb-8 text-center gradient-text"
        >
          Discover Your Revenue Boosters
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="max-w-2xl mx-auto bg-black p-8 rounded-lg shadow-lg"
        >
          <div className="flex items-center mb-4">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <Icon className="w-12 h-12 text-pink-500 mr-4" />
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, x: 60 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="text-2xl font-semibold text-white"
            >
              {randomTool.name}
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="text-gray-300 mb-6"
          >
            {randomTool.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <InteractiveButton
              onClick={() => {
                window.scrollTo(0, 0);
                window.location.href = randomTool.url;
              }}
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300"
            >
              CRUNCH YOUR CONVERSION NUMBERS
            </InteractiveButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
