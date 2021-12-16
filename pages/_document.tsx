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
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          /> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=optional"
            rel="stylesheet"
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
