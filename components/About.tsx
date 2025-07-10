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
          Why This Faceless System Is Blowing Up in 2025
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
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-2xl md:text-3xl font-semibold mb-4 text-pink-500"
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
            </div>

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
              {/* You can place an image or CTA here if needed */}
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
                className="text-2xl md:text-3xl font-semibold mb-4 text-pink-500"
              >
                Tomorrow’s Income, Today: Inside the AI Marketers Club
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
                This isn’t just another affiliate course—it’s a plug-and-play system built for 2025’s creator economy. The AI Marketers Club gives you the tools, prompts, and strategy to launch faceless content that earns—without burnout or complexity.
              </motion.p>
              <ul className="list-disc list-inside text-gray-300 mb-6">
                {[
                  "<b>F.I.R. Prompting Formula</b> for viral-style content",
                  "<b>7-Minute Action Checklist</b> for daily monetized posts",
                  "<b>Free drag-and-drop website</b> with SSL + domain",
                  "<b>Access to $821/click affiliate offers</b> with 75% payouts",
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
              
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
