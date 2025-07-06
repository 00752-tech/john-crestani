import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/NeueHaasUnicaW1G-Light.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <style>{`
          @font-face {
            font-family: 'Neue Haas Unica W1G';
            src: url('/fonts/NeueHaasUnicaW1G-Light.woff2') format('woff2');
            font-weight: 300;
            font-style: normal;
            font-display: swap;
          }

          html, body {
            font-family: 'Neue Haas Unica W1G', sans-serif;
            margin: 0;
            padding: 0;
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
