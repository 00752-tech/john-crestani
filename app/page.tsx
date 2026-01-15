// app/page.tsx - NO 'use client', NO interactivity
export default function HomePage() {
  return (
    <html>
      <head>
        <title>Super Affiliate System Pro 2025 - John Crestani</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            background: black; 
            color: white; 
            font-family: system-ui, -apple-system, sans-serif;
            min-height: 100vh;
            padding: 100px 20px 50px;
          }
          .container { max-width: 800px; margin: 0 auto; }
          .hero { 
            font-size: clamp(32px, 8vw, 48px); 
            font-weight: 900; 
            margin-bottom: 50px; 
            text-align: center;
            background: linear-gradient(90deg, #ec4899, #a855f7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 1.2;
          }
          .hero span { font-size: clamp(20px, 5vw, 28px); }
          .subtitle { 
            font-size: clamp(18px, 4vw, 24px); 
            color: #d1d5db; 
            text-align: center; 
            max-width: 600px; 
            margin: 0 auto 40px;
          }
          .cta-section { 
            text-align: center; 
            margin-bottom: 80px; 
            max-width: 800px; 
            margin-left: auto; 
            margin-right: auto;
          }
          .cta-title { 
            font-size: clamp(28px, 6vw, 36px); 
            font-weight: 900; 
            margin-bottom: 30px;
            background: linear-gradient(90deg, #ec4899, #a855f7, #ec4899);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .cta-text { 
            font-size: clamp(16px, 3vw, 20px); 
            color: #d1d5db; 
            margin-bottom: 30px;
          }
          .btn { 
            display: inline-block;
            background: linear-gradient(90deg, #ec4899, #a855f7);
            color: white;
            padding: 20px 40px;
            border-radius: 12px;
            font-weight: 900;
            font-size: clamp(16px, 3vw, 20px);
            text-decoration: none;
            box-shadow: 0 10px 30px rgba(236, 72, 153, 0.4);
            margin-bottom: 10px;
          }
          .btn-big { 
            padding: 20px 50px; 
            font-size: clamp(18px, 4vw, 22px);
            box-shadow: 0 15px 40px rgba(236, 72, 153, 0.5);
          }
          .btn:hover { 
            transform: translateY(-5px); 
            box-shadow: 0 20px 40px rgba(236, 72, 153, 0.6); 
          }
          .btn-big:hover { 
            box-shadow: 0 25px 50px rgba(236, 72, 153, 0.7); 
          }
          .fineprint { 
            color: #9ca3af; 
            font-size: 14px; 
            margin-top: 10px;
          }
          .footer { 
            margin-top: 80px; 
            padding-top: 50px; 
            border-top: 1px solid #374151; 
            text-align: center; 
            font-size: 14px; 
            color: #6b7280;
          }
        `}</style>
      </head>
      <body>
        <div className="container">
          <h1 className="hero">
            Where is Super Affiliate System Pro in 2025?
            <br />
            <span>Get Exclusive Access + Secret Discount to John Crestani's AI Marketing Club</span>
          </h1>

          <p className="subtitle">
            John Crestani's legendary program is now exclusively inside the AI Marketing Club. 
            <strong>$800 SAS Pro discount!</strong>
          </p>

          <section className="cta-section">
            <h2 className="cta-title">Start with AI Marketing Club - $27</h2>
            <p className="cta-text">
              AI-powered marketing tools + <strong>$800 SAS Pro discount</strong>
            </p>
            <a href="https://f75d2-a2r03odn9fcbizbsbrbz.hop.clickbank.net/?&traffic_source=blog_wheres_sas_pro" 
               className="btn" 
               target="_blank" 
               rel="noopener noreferrer">
              Get Started with AI Marketing Club →
            </a>
            <p className="fineprint">
              Limited time: $27 → SAS Pro upgrade $197 (was $997)
            </p>
          </section>

          <div style={{ textAlign: 'center', marginTop: '80px' }}>
            <a href="https://f75d2-a2r03odn9fcbizbsbrbz.hop.clickbank.net/?&traffic_source=blog_wheres_sas_pro" 
               className="btn btn-big" 
               target="_blank" 
               rel="noopener noreferrer">
              Start Your AI Affiliate Journey Now →
            </a>
          </div>

          <footer className="footer">
            <p>
              This site uses affiliate links.{' '}
              <a href="/affiliate-disclosure" style={{ color: '#ec4899' }}>
                Learn more
              </a>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
