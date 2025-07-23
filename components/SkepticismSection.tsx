import { motion } from 'framer-motion';

function CheckIcon() {
  return (
    <svg
      className="w-6 h-6 mr-3 flex-shrink-0 text-green-400"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <motion.circle
        cx="12" cy="12" r="12"
        fill="#22d3ee"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.08, duration: 0.3, type: 'spring' }}
        opacity="0.08"
      />
      <motion.path
        d="M7 13.5l3 3 7-7"
        stroke="#10b981"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ delay: 0.15, duration: 0.5, type: 'spring' }}
      />
    </svg>
  );
}

export default function SkepticismSection() {
  return (
    <section className="py-16 md:py-20 bg-[#151c31] border-t border-[#232946] text-white">
      <div className="container mx-auto max-w-2xl px-6">
        <div className="flex items-center gap-2 mb-4 justify-center">
          {/* Main shield/question icon */}
          <svg className="w-8 h-8 text-pink-500" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.12" />
            <path d="M12 6a8 8 0 0 1 8 8v2a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6v-2a8 8 0 0 1 8-8z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            <circle cx="12" cy="15.5" r="1.2" fill="currentColor"/>
            <path d="M12 10v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
          <h2 className="text-2xl md:text-3xl font-bold text-pink-500 text-center">
            Is This Real? Addressing Common Concerns
          </h2>
        </div>
        <p className="text-gray-300 text-center mb-8 text-lg max-w-xl mx-auto">
          <span className="text-white font-semibold">
            &quot;Making money online sounds great, but is this just another one of those programs?&quot;
          </span>{" "}
          We understand your skepticism—many online offers over-promise and under-deliver, <strong>leaving you feeling uncertain and frustrated</strong>. Here&apos;s why the <strong>AI Marketers Club is different</strong> and gives you the <strong>control you&apos;re looking for</strong>:
        </p>
        <ul className="space-y-7 text-base md:text-lg mt-8">
          <li className="flex items-start">
            <CheckIcon />
            <span>
              <span className="font-bold text-pink-400">Not a &ldquo;get rich quick&rdquo; scheme.</span>{" "}
              Our system gives you real tools and step-by-step training for building a legitimate, long-term affiliate business with AI.{" "}
              <strong>It&apos;s your path to predictable, sustainable financial resilience.</strong> There’s effort required, but every step is designed to make your work count <strong>and empower you with lasting control</strong>.
            </span>
          </li>
          <li className="flex items-start">
            <CheckIcon />
            <span>
              <span className="font-bold text-pink-400">Built on proven principles.</span>{" "}
              John Crestani brings nearly a decade of affiliate marketing experience and has helped over 50,000 students. This is not a random app or experiment—it’s <strong>a proven, trusted blueprint for stability</strong>, the evolution of what actually works, now supercharged by AI.
            </span>
          </li>
          <li className="flex items-start">
            <CheckIcon />
            <span>
              <span className="font-bold text-pink-400">Real AI. Real automation.</span>{" "}
              Our system leverages artificial intelligence to handle the tedious stuff, surface top niches, and generate converting content—freeing you to focus on <strong>higher-level responsibilities and reclaim your purpose</strong>.
            </span>
          </li>
          <li className="flex items-start">
            <CheckIcon />
            <span>
              <span className="font-bold text-pink-400">Your success, guaranteed.</span>{" "}
              Try everything risk-free with our 60-day money-back guarantee. If you’re not blown away, you get your investment back. <strong>Simple as that.</strong>
            </span>
          </li>
        </ul>
        <p className="mt-8 text-gray-400 text-center italic">
          This isn’t magic—it’s smart execution with proven methods and <strong>a supportive community</strong>. If you’re ready to put in the work (with powerful tools), the results can be transformative, <strong>empowering you with true financial and professional control</strong>.
        </p>
      </div>
    </section>
  );
}
