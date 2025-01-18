"use client";
import { motion } from "framer-motion";
export default function WebinarInvite() {
  const handleWebinarClick = () => {
    window.location.href = "/api/webinar";
  };

  return (
    <section className="py-20 bg-[#0f1629] text-white">
      <article className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, x: -80 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Exclusive Webinar Invite
        </motion.h2>
        <motion.div  initial={{ opacity: 0, x: 80 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}  className="max-w-5xl mx-auto">
          <div className="relative w-full pb-[56.25%]">
            <iframe
              src="https://drive.google.com/file/d/1zOZ9PwE89-JoUOUpjiGzrnt0siRpXUsV/preview"
              allow="autoplay"
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
            ></iframe>
          </div>
          <motion.div   initial={{ opacity: 0, x: -80 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }} className="mt-12 text-center">
            <button
              onClick={handleWebinarClick}
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 px-12 rounded-full text-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Don't Miss Out – Register Now!
            </button>
          </motion.div>
        </motion.div>
      </article>
    </section>
  );
}
