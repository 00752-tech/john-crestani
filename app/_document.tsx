// app/_document.tsx

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Preload hero image to optimize LCP */}
          <link
            rel="preload"
            as="image"
            href="/hero_man_hat.png"
            imagesrcset="/hero_man_hat.png"
            fetchpriority="high"
          />

          {/* Preload Google Fonts with font-display: swap */}
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
            as="style"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          />

          {/* Font-display swap fallback to avoid invisible text */}
          <style>{`
            @font-face {
              font-family: 'Poppins';
              font-style: normal;
              font-weight: 300;
              font-display: swap;
              src: url('https://fonts.gstatic.com/s/poppins/v18/KFOlCnqEu92Fr1MmSU5fBBc-.woff2') format('woff2');
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
