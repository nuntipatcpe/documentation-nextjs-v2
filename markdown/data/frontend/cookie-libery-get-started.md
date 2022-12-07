---
title: "Cookie lib"
popular: 1
name: "Get Started"
---

# Get Started

- [documentation](https://github.com/jshttp/cookie)

- install

  - cookie

    ```
    pnpm i cookie
    ```

  - @types/cookie

    ```
    pnpm install --save @types/cookie
    ```

- Options

  - **expires** Specifies the **Date**
  - **httpOnly** Specifies the **boolean** mode production ->https

  - **maxAge** Specifies the **number**

    Specifies the number (in seconds) to be the value for the Max-Age Set-Cookie attribute. The given number will be converted to an integer by rounding down. By default, no maximum age is set.

  - **secure**

    Specifies the boolean value for the Secure Set-Cookie attribute. When truthy, the Secure attribute is set, otherwise it is not. By default, the Secure attribute is not set.

```
{
  httpOnly: true,
  //mode production ->https
  secure: process.env.NODE_ENV !== "development",
  sameSite: "strict",
  path: "/",
}
```
