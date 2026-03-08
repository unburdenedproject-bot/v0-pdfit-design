export const GoogleAnalytics = () => {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-PWD4YNY710"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PWD4YNY710');
          `,
        }}
      />
    </>
  )
}
