"use client"

import Script from "next/script"

export const GoogleTagManager = () => {
  return (
    <>
      {/* Google Consent Mode v2 — default to denied until user accepts */}
      <Script
        id="gtm-consent-default"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'wait_for_update': 500
            });
            // If user previously accepted, update immediately
            if (localStorage.getItem('pdfit_cookie_consent') === 'accepted') {
              gtag('consent', 'update', {
                'analytics_storage': 'granted',
                'ad_storage': 'granted'
              });
            }
          `,
        }}
      />
      {/* GTM loads after consent defaults are set */}
      <Script
        id="gtm-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PNR9LXC2');
          `,
        }}
      />
    </>
  )
}

export const GoogleTagManagerNoScript = () => {
  return (
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-PNR9LXC2"
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  )
}
