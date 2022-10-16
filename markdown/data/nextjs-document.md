---
title: "NextJS"
popular: 0
name: "Next config"
---

- \_document.tsx

  ```
  import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
  } from "next/document";

  class MyDocument extends Document {
    static async getInitialProps(
      ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
      const initialProps = await Document.getInitialProps(ctx);

      return initialProps;
    }

    render() {
      return (
        <Html>
          <Head />
          <title>Next JS tilte</title>
          <link rel="icon" href="/image/favicon.ico" />
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }

  export default MyDocument;
  ```
