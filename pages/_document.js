import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    // Returns an object like: { html, head, errorHtml, chunks, styles }     
    return renderPage();
  }

  render () {    
    return (
      <html>
        <Head>
          <title>Our Holy Style</title>
          <link href='http://fontsforweb.com/font/getcss?id=78604&apikey=de42da7c9ecc761012fd402a66d96e6b' rel='stylesheet' type='text/css' />
          <link href='http://fontsforweb.com/font/getcss?id=23412&apikey=de42da7c9ecc761012fd402a66d96e6b' rel='stylesheet' type='text/css' />  
          <style>
            {`body {
              margin: 0;
            }
            `}
          </style>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}