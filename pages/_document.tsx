import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
// Helpers

import { setInitialTheme } from '@Helpers/critical';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx);
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
    // also check the folder helpers/critical.ts !
    //!
    return (
      <Html>
        <Head>
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
