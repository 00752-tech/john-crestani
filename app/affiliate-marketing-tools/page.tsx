<motion.h1
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text leading-relaxed pb-4"
>
  Sick of Guessing & Hoping Your Affiliate Marketing Will Work?
  <br />
  Imagine if You Could Predict Your Profits Before You Spend a Dime.
</motion.h1>

{/* Emotional Agitation Section */}
<div className="text-xl text-gray-300 max-w-3xl mx-auto text-center space-y-8 mb-12 leading-relaxed">
  <p>Right now, you’re probably stuck wondering...</p>
  <p><strong>“How much will I really make?</strong> Is this the right niche? Are my campaigns actually profitable?”</p>
  <p>It’s frustrating to pour time and money into marketing WITHOUT real answers.</p>
  <p>But what if you could remove the guesswork completely?</p>
  <p>What if there was a *simple AI-powered way* to predict your earnings, click rates, and ROAS before risking a single dollar?</p>
</div>

{/* Solution Introduction & Benefits */}
<div className="text-xl text-gray-300 max-w-3xl mx-auto text-center space-y-6 mb-12 leading-relaxed">
  <p>Introducing <strong>John Crestani’s AI-Powered Affiliate & E-commerce Toolkit</strong></p>
  <p>A collection of FREE calculators designed to give you clear, actionable insights:</p>
  <ul className="list-disc list-inside text-left max-w-md mx-auto space-y-3">
    <li>Calculate your stable affiliate earnings BEFORE launching.</li>
    <li>Confidently optimize ad spend with AI-driven ROAS calculations.</li>
    <li>Manage investment risk and predict returns with precision.</li>
    <li>Optimize link placements to <em>MAXIMIZE</em> your click-through rates.</li>
    <li>Select the most profitable niches confidently.</li>
  </ul>
  <p>These tools put data and certainty back in YOUR hands.</p>
</div>

{/* Tools Grid (unchanged, just ensure compact and benefit focused descriptions) */}
{/* ...your existing mapped tool cards here... */}

{/* Ultimate Offer + High-Impact CTA Section */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.7 }}
  className="mt-16 text-center max-w-3xl mx-auto px-4"
>
  <h2 className="text-3xl font-bold mb-8 gradient-text leading-snug">
    Now... imagine turning that clarity into consistent, predictable income...
  </h2>

  <div className="text-xl text-gray-300 space-y-6 max-w-xl mx-auto leading-relaxed text-left">
    <p>These free tools are just the beginning.</p>
    <p><em>The real breakthrough is inside <strong>John Crestani’s AI Marketing Club</strong>.</em></p>
    <p>Unlock step-by-step video training, insider strategies, & exclusive AI-driven upgrades.</p>
    <p>Today, you get instant access for just <strong>$27</strong>.</p>
    <p>Plus, a limited-time opportunity to upgrade to the world’s most powerful affiliate marketing system — <strong>Super Affiliate System Pro</strong> — for only <strong>$197</strong> (normally <s>$997</s>).</p>
    <p><strong>That’s an $800 savings.</strong></p>
    <p><em>This is your ultimate blueprint to future-proof your income and build real financial freedom in the AI economy.</em></p>
  </div>

  <button
    onClick={handleCtaClick}
    className="no-hover inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 px-10 rounded-full text-xl font-bold mt-10 select-none"
    tabIndex={0}
    type="button"
    aria-label="Unlock My AI Income Blueprint Now!"
    style={{
      boxShadow: "none",
      textDecoration: "none",
      outline: "none",
      filter: "none",
      cursor: "pointer"
    }}
  >
    Unlock My AI Income Blueprint Now!
  </button>
</motion.div>
