import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    //!
    // Added extra js & styles code to prevent flickering page
    // between switching themes and for loading page.
    // Check, localStorage of the theme value,
    // or get this with "matchMedia" to define color scheme.
    // Set the resulting value to the HTML tag.
    // Inject before the page starts rendering.
    // return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    //!
    const setInitialTheme = `
      function getUserPreference() {
        if(window.localStorage.getItem('theme')) {
          return window.localStorage.getItem('theme')
        }
        return 'dark'
      }
      document.documentElement.dataset.theme = getUserPreference();
    `;
    return (
      <Html>
        <Head>
          {/* Нижеуказанные 2 мета-тега *должны* стоять как можно раньше в <head> */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta name="application-name" content="devan.fi" />
          <meta name="author" content="Anton" />
          <meta name="color-scheme" content="dark light" />
          <meta name="format-detection" content="address=no" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="generator" content="Next.js" />
          <meta name="google" content="notranslate" />
          <meta name="googlebot" content="noimageindex,index,follow" />
          <meta
            name="keywords"
            content=" UI/UX Designer, UI Designer, Web Designer, UI Developer, FronEnd Developer, Fullstack Developer, React Developer, Javascript Developer, Javascript, Typescript, HTML5, CSS3"
          />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="rating" content="General" />
          <meta name="robots" content="noimageindex,index,follow" />
          <meta name="theme-color" content="#18171c" />
          <meta name="subject" content="personal portfolio" />

          <link rel="icon" href="/icons/favicon.ico" sizes="any" />
          <link rel="icon" href="/icons/favicon.png" type="image/png" />
          <link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="alternate" href="https://devan.fi/ru" hrefLang="ru" />

          {/* Apple */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="devan.fi" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <link
            rel="mask-icon"
            href="/icons/safari-pinned-tab.svg"
            color="#18171c"
          />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/icons/apple-touch-icon.png"
          />
          {/* Windows App */}
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#18171c" />
          <meta name="msapplication-tap-highlight" content="no" />

          <link
            rel="alternate"
            href="https://es.example.com/ru"
            hrefLang="ru"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
            rel="stylesheet"
          ></link>
          <style
            id="___critical-css"
            dangerouslySetInnerHTML={{
              __html: `
                html[data-theme='light'] {
                  --bg-clr: hsl(39, 43%, 90%);
                  --primary-clr: hsl(252, 10%, 10%);
                  --secondary-clr: hsl(341, 53%, 33%);
                  --card-clr: hsl(39, 42%, 87%);
                  --card-shadow-clr: hsl(38, 12%, 70%);
                  --card-extra-clr: hsl(38, 12%, 70%);
                }
                html[data-theme='dark'] {
                  --bg-clr: hsl(252, 10%, 10%);
                  --primary-clr: hsl(39, 43%, 90%);
                  --secondary-clr: hsl(162, 47%, 66%);
                  --card-clr: hsl(240, 3%, 12%);
                  --card-shadow-clr: hsl(0, 0%, 0%);
                  --card-extra-clr: hsl(220, 6%, 19%);
                }
                html {
                  background-color: var(--bg-clr);
                  color: var(--primary-clr);
                  transition: all .5s ease;
                }
              `,
            }}
          />
          <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        </Head>
        <body id="home">
          <span id="orientation-landscape">Rotate to portrait</span>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
