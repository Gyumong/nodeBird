/** @format */

import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initalProps = await Document.getInitialProps(ctx);
      return {
        ...initalProps,
        styles: (
          <>
            {initalProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } catch (e) {
      console.error(e);
    } finally {
      sheet.seal();
    }
  }

  render() {
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>;
  }
}
