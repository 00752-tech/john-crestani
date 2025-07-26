'use client';

import React from 'react';

const ctaAffiliateLink = 'https://0b29ap10s8br7tff3kb85z1r70.hop.clickbank.net/';

export default function AffiliateButtons() {
  // Factory handler to open affiliate links with traffic source param
  function openAffiliateLink(trafficSource: string) {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      window.open(`${ctaAffiliateLink}?&traffic_source=${trafficSource}`, '_blank', 'noopener,noreferrer');
    };
  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full max-w-lg mx-auto">
      <button
        onClick={openAffiliateLink('sasp_page_aimc')}
        type="button"
        aria-label="Join the AI Marketing Club for $27"
        className="bg-yellow-400 text-black font-semibold rounded-full px-8 py-3 transition no-hover w-full md:w-auto min-w-[220px]"
      >
        Join AI Marketing Club Now - $27
      </button>

      <button
        onClick={openAffiliateLink('sasp_page_upgrade')}
        type="button"
        aria-label="Upgrade to Super Affiliate System Pro for $197"
        className="bg-pink-600 text-white font-bold rounded-full px-10 py-3 transition no-hover w-full md:w-auto min-w-[220px]"
      >
        Upgrade to SAS Pro - $197
      </button>

      <button
        onClick={openAffiliateLink('sas_pro_pg_cta')}
        type="button"
        aria-label="Join the AI Marketing Club and unlock Super Affiliate System Pro"
        className="bg-yellow-400 text-black font-bold rounded-full px-10 py-4 transition no-hover w-full md:w-auto min-w-[220px]"
      >
        Join the AI Marketing Club &amp; Start Your Journey!
      </button>
    </div>
  );
}
