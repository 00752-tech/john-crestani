<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.7 }}
  className="mt-16 text-center max-w-3xl mx-auto px-4"
>
  <h2 className="text-3xl font-bold mb-8 gradient-text leading-snug">
    Ready to Stop Guessing... and <br className="hidden sm:inline" />Start Earning Consistently?
  </h2>

  <div className="text-xl text-gray-300 space-y-6 max-w-xl mx-auto leading-relaxed">
    <p>These tools give you foresight.</p>

    <p>But the <em>real</em> power comes from a proven system.</p>

    <p>Get instant access to <strong>John Crestani&apos;s AI Marketing Club</strong>...</p>

    <p>...for just <em>$27</em>.</p>

    <p>Then, unlock the exclusive opportunity:</p>

    <p>Upgrade to <strong>Super Affiliate System Pro</strong>.</p>

    <p>For only <em>$197</em>.</p>

    <p>Original price: <s>$997</s>.</p>

    <p>That&apos;s a massive <strong>$800 saving</strong>!</p>

    <p>The ultimate blueprint to future-proof your income.</p>

    <p>Build genuine financial independence in the AI economy.</p>
  </div>

  <button
    onClick={handleCtaClick}
    className="no-hover inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 px-10 rounded-full text-xl font-bold mt-10 select-none"
    tabIndex={0}
    type="button"
    aria-label="Unlock My AI Income Blueprint Now!"
    style={{
      boxShadow: 'none',
      textDecoration: 'none',
      outline: 'none',
      filter: 'none',
      cursor: 'pointer',
    }}
  >
    Unlock My AI Income Blueprint Now!
  </button>
</motion.div>
