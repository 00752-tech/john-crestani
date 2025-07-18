'use client';
import React, { useEffect, useState } from 'react';

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('exit-popup-shown');
    if (alreadyShown) return;

    const handleMouseOut = (e: MouseEvent) => {
      // Remove .toElement for full TypeScript compatibility
      if (!e.relatedTarget && e.clientY <= 0) {
        setShow(true);
        sessionStorage.setItem('exit-popup-shown', '1');
      }
    };

    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const handleClose = () => setShow(false);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full px-7 py-8 sm:px-10 text-center">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-pink-500 text-xl"
          aria-label="Close"
          onClick={handleClose}
        >
          ×
        </button>

        <div className="flex justify-center mb-3">
          <span className="bg-pink-500 bg-opacity-10 text-pink-500 rounded-full w-14 h-14 flex items-center justify-center text-4xl shadow">
            🛠️
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-pink-600">Before you go!</h3>
        <p className="text-gray-700 mb-5 text-[1.06rem] leading-relaxed">
          <b>Get instant access to all our affiliate & AI marketing tools—no email, no signup, 100% free.</b><br /><br />
          Unlock powerful calculators, templates, and resources to grow your income.<br />
        </p>

        <a
          href="/affiliate-marketing-tools"
          className="inline-block bg-lime-500 hover:bg-lime-600 text-white font-semibold px-8 py-3 text-lg rounded-full shadow-lg transition"
          onClick={handleClose}
        >
          🚀 Try Free Tools Now
        </a>

        <div className="mt-4 text-gray-400 text-xs">
          No email required. Zero spam. Just pure value.
        </div>
      </div>
    </div>
  );
}
