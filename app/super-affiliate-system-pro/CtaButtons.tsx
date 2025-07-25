'use client';

import React from 'react';

interface CtaButtonsProps {
  baseAffiliateUrl: string;
}

export default function CtaButtons({ baseAffiliateUrl }: CtaButtonsProps) {
  const handleAimc = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(`${baseAffiliateUrl}?&traffic_source=sasp_page_aimc`, '_blank');
  };

  const handleSaspUpgrade = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(`${baseAffiliateUrl}?&traffic_source=sasp_page_upgrade`, '_blank');
  };

  const handleFinalCta = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(`${baseAffiliateUrl}?&traffic_source=sas_pro_pg_cta`, '_blank');
  };

  return (
    <>
      <button
        onClick={handleAimc}
        type="button"
        aria-label="Join the AI Marketing Club for $27"
        className="inline-block bg-yellow-400 text-black font-semibold rounded-full px-8 py-3 transition no-hover w-full md:w-auto min-w-[220px]"
      >
        Join AI Marketing Club Now - $27
      </button>

      <button
        onClick={handleSaspUpgrade}
        type="button"
        aria-label="Upgrade to Super Affiliate System Pro for $197"
        className="inline-block bg-pink-600 text-white font-bold rounded-full px-10 py-3 transition no-hover w-full md:w-auto min-w-[220px]"
      >
        Upgrade to SAS Pro - $197
      </button>

      <button
        onClick={handleFinalCta}
        type="button"
        aria-label="Join the AI Marketing Club and unlock Super Affiliate System Pro"
        className="inline-block bg-yellow-400 text-black font-bold rounded-full px-10 py-4 transition no-hover w-full md:w-auto min-w-[220px]"
      >
        Join the AI Marketing Club &amp; Start Your Journey!
      </button>
    </>
  );
}
