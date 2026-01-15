export default function HomePage() {
  return (
    <>
      <div style={{ 
        minHeight: '100vh', 
        background: 'black', 
        color: 'white', 
        padding: '100px 20px 50px', 
        fontFamily: 'system-ui, sans-serif'
      }}>
        <main style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          {/* HERO */}
          <h1 style={{ 
            fontSize: 'clamp(32px, 8vw, 48px)', 
            fontWeight: 'bold', 
            marginBottom: '50px', 
            textAlign: 'center',
            background: 'linear-gradient(90deg, #ec4899, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: '1.2'
          }}>
            Where is Super Affiliate System Pro in 2025?
            <br />
            <span style={{ fontSize: 'clamp(20px, 5vw, 28px)' }}>
              Get Exclusive Access + Secret Discount to John Crestani's AI Marketing Club
            </span>
          </h1>

          <p style={{ 
            fontSize: 'clamp(18px, 4vw, 24px)', 
            color: '#d1d5db', 
            marginBottom: '40px', 
            textAlign: 'center', 
            maxWidth: '600px', 
            margin: '0 auto 40px'
          }}>
            John Crestani's legendary program is now exclusively inside the AI Marketing Club. 
            <strong style={{ color: 'white' }}>$800 SAS Pro discount!</strong>
          </p>

          {/* CTA */}
          <section style={{ 
            marginBottom: '80px', 
            textAlign: 'center',
            maxWidth: '800px', 
            marginLeft: 'auto', 
            marginRight: 'auto' 
          }}>
            <h2 style={{ 
              fontSize: 'clamp(28px, 6vw, 36px)', 
              fontWeight: 'bold', 
              marginBottom: '30px',
              background: 'linear-gradient(90deg, #ec4899, #a855f7, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Start with AI Marketing Club - $27
            </h2>
            <p style={{ 
              fontSize: 'clamp(16px, 3vw, 20px)', 
              color: '#d1d5db', 
              marginBottom: '30px' 
            }}>
              AI-powered marketing tools + <strong>$800 SAS Pro discount</strong>
            </p>
            
            <a href="https://f75d2-a2r03odn9fcbizbsbrbz.hop.clickbank.net/?&traffic_source=blog_wheres_sas_pro" 
               target="_blank" 
               rel="noopener noreferrer"
               style={{
                 display: 'inline-block',
                 background: 'linear-gradient(90deg, #ec4899, #a855f7)',
                 color: 'white',
                 padding: '20px 40px',
                 borderRadius: '12px',
                 fontWeight: 'bold',
                 fontSize: 'clamp(16px, 3vw, 20px)',
                 textDecoration: 'none',
                 boxShadow: '0 10px 30px rgba(236, 72, 153, 0.4)',
                 marginBottom: '10px'
               }}
               onMouseOver={(e) => {
                 e.currentTarget.style.transform = 'translateY(-5px)';
                 e.currentTarget.style.boxShadow = '0 20px 40px rgba(236, 72, 153, 0.6)';
               }}
               onMouseOut={(e) => {
                 e.currentTarget.style.transform = 'translateY(0)';
                 e.currentTarget.style.boxShadow = '0 10px 30px rgba(236, 72, 153, 0.4)';
               }}
            >
              Get Started with AI Marketing Club →
            </a>
            
            <p style={{ 
              color: '#9ca3af', 
              fontSize: '14px', 
              marginTop: '10px' 
            }}>
              Limited time: $27 → SAS Pro upgrade $197 (was $997)
            </p>
          </section>

          {/* FINAL CTA */}
          <div style={{ textAlign: 'center', marginTop: '80px' }}>
            <a href="https://f75d2-a2r03odn9fcbizbsbrbz.hop.clickbank.net/?&traffic_source=blog_wheres_sas_pro" 
               target="_blank" 
               rel="noopener noreferrer"
               style={{
                 display: 'inline-block',
                 background: 'linear-gradient(90deg, #ec4899, #a855f7)',
                 color: 'white',
                 padding: '20px 50px',
                 borderRadius: '12px',
                 fontWeight: 'bold',
                 fontSize: 'clamp(18px, 4vw, 22px)',
                 textDecoration: 'none',
                 boxShadow: '0 15px 40px rgba(236, 72, 153, 0.5)'
               }}
               onMouseOver={(e) => {
                 e.currentTarget.style.transform = 'translateY(-5px)';
                 e.currentTarget.style.boxShadow = '0 25px 50px rgba(236, 72, 153, 0.7)';
               }}
               onMouseOut={(e) => {
                 e.currentTarget.style.transform = 'translateY(0)';
                 e.currentTarget.style.boxShadow = '0 15px 40px rgba(236, 72, 153, 0.5)';
               }}
            >
              Start Your AI Affiliate Journey Now →
            </a>
          </div>

          {/* FOOTER */}
          <footer style={{ 
            marginTop: '80px', 
            paddingTop: '50px', 
            borderTop: '1px solid #374151', 
            textAlign: 'center', 
            fontSize: '14px', 
            color: '#6b7280' 
          }}>
            <p>
              This site uses affiliate links.{' '}
              <a href="/affiliate-disclosure" style={{ color: '#ec4899' }}>
                Learn more
              </a>
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
