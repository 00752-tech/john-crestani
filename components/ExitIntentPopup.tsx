'use client';
import React, { useEffect, useState, useRef } from 'react';

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const hasFired = useRef(false);

  useEffect(() => {
    let popupAlreadyShown = false;

    // Robust sessionStorage read (incognito safe)
    try {
      popupAlreadyShown = sessionStorage.getItem('exit-popup-shown') === '1';
    } catch {
      popupAlreadyShown = false;
    }

    if (popupAlreadyShown) return;

    const handleMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget && e.clientY <= 0 && !hasFired.current) {
        hasFired.current = true;
        try {
          sessionStorage.setItem('exit-popup-shown', '1');
        } catch {
          // Ignore errors—just show popup!
        }
        setShow(true);
      }
    };

    window.addEventListener('mouseout', handleMouseOut);
    return () => window.removeEventListener('mouseout', handleMouseOut);
  }, []);

  const handleClose = () => setShow(false);

  const handleCtaClick = () => {
    window.location.href = '/affiliate-marketing-tools';
  };

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
        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-pink-600">
  Wait! Don&apos;t Miss Your FREE AI Income Tools.</h3>

        <p className="text-gray-700 mb-5 text-[1.06rem] leading-relaxed">
          Get instant access to the <b>exact AI-powered calculators, templates, and resources</b> we use daily to <b>automate growth</b> and <b>maximize your affiliate income</b>. No email, no signup, 100% FREE.<br />
        </p>
        <button
          className="inline-block bg-lime-500 hover:bg-lime-600 text-white font-semibold px-8 py-3 text-lg rounded-full shadow-lg transition"
          onClick={handleCtaClick}
          type="button"
        >
          Unlock My FREE AI Tools Now →
        </button>
        <div className="mt-4 text-gray-400 text-xs">
          Zero spam. Just pure value.
        </div>
      </div>
    </div>
  );
}
