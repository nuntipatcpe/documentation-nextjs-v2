# SPA (Single Page Appication)

**CSR** (Client Side Rendering)

- No need to request server to response or rebder every-time we cheng page
- Slow rendering (Entire page loading complete)
- Unfriendly SEO

**SSR** (Server Side Rendering)

- Need to request server to response or rebder every-time we cheng page
- Faster rendering (Show in first load)
- Friendly SEO

# Install

- Typescript

  ```
  pnpm create next-app --typescript
  ```

- Javascript

  ```
  pnpm create next-app
  ```

# Set Header

\_app.js

- Herder

  ```
  import Head from "next/head";
  ```

  ```
    <Head>
    <title>Next.js</title>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossOrigin="anonymous"
    />
    </Head>
  ```

- Script

  ```
  <Script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
  crossorigin="anonymous"
  ></Script>
  ```

- style sheet local

  ```
  <style jsx>
  {`
  .main-content {
      margin-top: 30px;
  }
  `}
  </style>
  ```

  alert.module.css

  ```
  className={style.err}
  ```
