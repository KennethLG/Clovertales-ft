import Script from "next/script";

export default function Head() {
  return (
    <>
      <title>Clover Tales</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Dive into 'Searching Light': an adventure game across two worlds filled with puzzles and mysteries. Explore, uncover secrets, and start your journey with Clover Tales." />

      <link rel="icon" href="/favicon.ico" />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NDPSQQ7MEN"
        strategy="afterInteractive"
      />

      <Script id="gloogle-anaylitics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-NDPSQQ7MEN');
        `}
      </Script>
    </>
  );
}
