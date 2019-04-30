import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NeueMontreal';
    src: url('https://s3.amazonaws.com/ohs-fonts/NeueMontreal-Regular.otf');
  }
  @font-face {
    font-family: 'NeueMontrealBold';
    src: url('https://s3.amazonaws.com/ohs-fonts/NeueMontreal-Bold.otf');
  }

  @font-face {
    font-family: 'BillyOhio';
    src: url('https://s3.amazonaws.com/ohs-fonts/Billy+Ohio.otf');
  }

  @font-face {
    font-family: 'Bodoni';
    src: url('https://s3.amazonaws.com/ohs-fonts/BodoniMTCondensed.ttf');
  }
  `;

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render () {    
    return (
      <html>
        <Head>
          <title>Our Holy Style</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
          />
          <style>
            {`body {
              margin: 0;
            }
            `}
          </style>
        </Head>

        <body>
          <GlobalStyle />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}