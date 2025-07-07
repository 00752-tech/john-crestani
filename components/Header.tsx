'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:py-6">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex items-center gap-2"
        >
          <Award className="h-6 w-6 text-yellow-400" />
          <span className="text-sm md:text-base font-light tracking-wide text-gray-300">
            ⚡ 72H Access: Affiliate Fix 2025
          </span>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex items-center"
        >
          <Image
            src="/logo-crestani.webp"
            alt="John Crestani Logo"
            width={140}
            height={40}
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </header>
  );
}
