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
    // between switching themes and for loading page
    //!
    const setInitialTheme = `
      function getUserPreference() {
        if(window.localStorage.getItem('theme')) {
          return window.localStorage.getItem('theme')
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      }
      document.body.dataset.theme = getUserPreference();
    `;
    return (
      <Html>
        <Head>
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
          <meta name="color-scheme" content="dark light" />
          <style
            id="___critical-css"
            dangerouslySetInnerHTML={{
              __html: `
            @media (prefers-color-scheme: dark) {
              body[data-theme='dark'] {
                --bg-clr: hsl(252, 10%, 10%);
                --primary-clr: hsl(39, 43%, 90%);
                --secondary-clr: hsl(162, 47%, 66%);
                --card-clr: hsl(240, 3%, 12%);
                --card-shadow-clr: hsl(0, 0%, 0%);
                --card-extra-clr: hsl(220, 6%, 19%);
              }
            }
            @media (prefers-color-scheme: light) {
              body[data-theme='light'] {
                --bg-clr: hsl(39, 43%, 90%);
                --primary-clr: hsl(252, 10%, 10%);
                --secondary-clr: hsl(341, 53%, 33%);
                --card-clr: hsl(39, 42%, 87%);
                --card-shadow-clr: hsl(38, 12%, 70%);
                --card-extra-clr: hsl(38, 12%, 70%);
              }
            }

            body[data-theme='light'] {
              --bg-clr: hsl(39, 43%, 90%);
              --primary-clr: hsl(252, 10%, 10%);
              --secondary-clr: hsl(341, 53%, 33%);
              --card-clr: hsl(39, 42%, 87%);
              --card-shadow-clr: hsl(38, 12%, 70%);
              --card-extra-clr: hsl(38, 12%, 70%);
            }
            body[data-theme='dark'] {
              --bg-clr: hsl(252, 10%, 10%);
              --primary-clr: hsl(39, 43%, 90%);
              --secondary-clr: hsl(162, 47%, 66%);
              --card-clr: hsl(240, 3%, 12%);
              --card-shadow-clr: hsl(0, 0%, 0%);
              --card-extra-clr: hsl(220, 6%, 19%);
            }

            body {
              background-color: var(--bg-clr);
              color: var(--primary-clr);
            }
         `,
            }}
          />
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
