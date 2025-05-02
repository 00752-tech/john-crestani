"use client";
import Image from "next/image";
import { motion } from "framer-motion"; // Add this import

export default function About() {
  return (
    <section id="about" className=" px-4  py-20 pt-32 bg-gray-900 text-white">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="text-3xl font-bold mb-12 text-center gradient-text"
        >
          Super Affiliate System Pro: Where Dreams Meet Digital Dollars
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left columne */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="bg-black p-8 rounded-lg shadow-lg flex flex-col justify-start "
          >
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 80 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                className="text-2xl font-semibold mb-4 text-pink-500"
              >
                Who is John Crestani?
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 80 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                className="text-gray-300 mb-4"
              >
                John Crestani is a renowned affiliate marketing expert who has
                been helping people achieve financial freedom since 2011. His
                journey from a college dropout to a multi-millionaire
                entrepreneur has inspired thousands.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 80 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                className="text-gray-300 mb-6"
              <motion.p>
  John Crestani's Super Affiliate System Pro (2025) is one of the most talked-about affiliate marketing courses—but does it still work? With a 71% industry failure rate, his '6-Figure Affiliate Blueprint' claims to help beginners avoid costly mistakes. In this review, we analyze whether his training is worth it in 2025.
</motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.2,
              }}
              className="w-full flex justify-center pt-16"
            >
              <Image
                src="https://www.gojctraining.com/hosted/images/e4/ea2c8c40e945b3958bac129f6e43be/johnnewimg94.png"
                alt="John Crestani Success"
                width={500}
                height={300}
                className="rounded-lg shadow-md object-cover border"
              />
            </motion.div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="bg-black p-8  rounded-lg shadow-lg flex flex-col justify-between"
          >
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 80 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                className="text-2xl font-semibold mb-4 text-pink-500"
              >
                Tomorrow&apos;s Wealth, Today: Exploring Super Affiliate System Pro 2025
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 80 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                className="text-gray-300 mb-4"
              >
                The Super Affiliate System Pro has been continuously updated
                since its inception in 2017. The 2025 version incorporates
                cutting-edge strategies for the current digital ecosystem,
                including:
              </motion.p>
              <ul className="list-disc list-inside text-gray-300 mb-6">
                {[
                  "AI-powered marketing tools integration",
                  "Blockchain and cryptocurrency affiliate opportunities",
                  "Advanced data analytics for campaign optimization",
                  "Emerging social media platform strategies",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                      delay: 0.2 + index * 0.1,
                    }}
                    className="text-gray-300 mb-2"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.2,
              }}
              className="w-full flex justify-center"
            >
              <Image
                src="https://www.gojctraining.com/hosted/images/61/90ba29392e464e86c96fdf01744823/johnnewimg32.png"
                alt="Super Affiliate System Pro Dashboard"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
