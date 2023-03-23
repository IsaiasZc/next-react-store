import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head title="ReactShop">
        <meta charSet="utf-8" />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-BR5P2007R2" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-BR5P2007R2');
          `}
      </Script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
