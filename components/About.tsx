"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="px-4 py-20 pt-32 bg-gray-900 text-white">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="text-3xl font-bold mb-12 text-center gradient-text"
        >
          Super Affiliate System Pro: Where Dreams Meet Digital Dollars
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="bg-black p-8 rounded-lg shadow-lg flex flex-col justify-start"
          >
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                className="text-2xl font-semibold mb-4 text-pink-500"
              >
                <motion.h3
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
  className="text-2xl md:text-3xl font-semibold mb-4 text-white"
>
  The $27 Shortcut to Faceless Affiliate Income
</motion.h3>

<motion.p
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.5,
    ease: "easeInOut",
    delay: 0.2,
  }}
  className="text-gray-300 mb-4"
>
  <b>Who’s Behind This?</b> John Crestani. 12,000+ students. $20M+ in affiliate payouts. And now? A brand-new system for 2025 that’s built for speed, simplicity, and scale.
  <br /><br />
  <b>AI Marketers Club</b> is his latest creation—a 3-hour crash course that shows you how to use AI to post faceless content that gets clicks, builds momentum, and earns commissions… in just 7 minutes a day.
</motion.p>

{/* Bullet Pointed List */}
<ul className="list-disc pl-6 space-y-2 text-gray-200 mb-6">
  <li>
    <span className="font-semibold text-white">No Face Needed:</span> Stay anonymous while earning commissions.
  </li>
  <li>
    <span className="font-semibold text-white">AI Does the Heavy Lifting:</span> Let smart tools create, post, and optimize your content.
  </li>
  <li>
    <span className="font-semibold text-white">7 Minutes a Day:</span> Perfect for busy schedules—just copy, paste, and profit.
  </li>
  <li>
    <span className="font-semibold text-white">Beginner Friendly:</span> No tech skills or experience required.
  </li>
  <li>
    <span className="font-semibold text-white">$27 Launch Price:</span> Get in before the price jumps to $297!
  </li>
</ul>


            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.2,
              }}
              className="w-full flex justify-center pt-16"
            >
              
            </motion.div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="bg-black p-8 rounded-lg shadow-lg flex flex-col justify-between"
          >
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
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
                whileInView={{ opacity: 1, y: 0 }}
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
              whileInView={{ opacity: 1, scale: 1 }}
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
