"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Testimonials() {
  const testimonials = [
    {
      name: "Kai Blackwood",
      role: "Digital Marketing Strategist",
      image:
        "https://www.gojctraining.com/hosted/images/e4/a1f72997a74bf99e7054834d42b2d0/johnnewimg108.png",
      quote:
        "The 2025 update to Super Affiliate System Pro has been a game-changer. The AI integration alone has doubled my conversions!",
    },
    {
      name: "Zara Patel",
      role: "E-commerce Innovation Director",
      image:
        "https://www.gojctraining.com/hosted/images/97/dc375d0ce94c77a0c5ba742c58050c/johnnewimg111.png",
      quote:
        "I was skeptical about an 8-year-old system, but the continuous updates have kept it more relevant than ever. It's my secret weapon in 2025.",
    },
    {
      name: "Phoenix Rivera",
      role: "Blockchain Affiliate Specialist",
      image:
        "https://www.gojctraining.com/hosted/images/e4/a1f72997a74bf99e7054834d42b2d0/johnnewimg108.png",
      quote:
        "John's insights into blockchain affiliate marketing opened up a whole new revenue stream for me. This course is worth its weight in Bitcoin!",
    },
  ];

  return (
    <section id="testimonials" className="py-20 pt-32 bg-gray-900 text-white">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: 80 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="text-3xl font-bold mb-12 text-center gradient-text"
        >
          Success Stories from 2025
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.article
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              key={index}
              className="bg-black p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              <div className="flex items-center mb-4">
                <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                </motion.div>
                <div>
                  <motion.h3
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                    className="font-semibold text-pink-500"
                  >
                    {testimonial.name}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                      delay: 0.3,
                    }}
                    className="text-gray-400"
                  >
                    {testimonial.role}
                  </motion.p>
                </div>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 80 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="text-gray-300 italic"
              >{`"${testimonial.quote}"`}</motion.p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
