---
title: "Cookie lib"
popular: 0
name: "Utils"
---

# Cookie

- setCookie

  ```
  import { serialize, CookieSerializeOptions } from "cookie";

  export const setCookie = (
    name: string,
    value: unknown,
    options: CookieSerializeOptions = {}
  ) => {
    const stringValue =
      typeof value === "object" ? "j:" + JSON.stringify(value) : String(value);

    if (options.maxAge) {
      options.expires = new Date(Date.now() + options.maxAge);
      options.maxAge = options.maxAge / 1000;
    }
  };
  ```

- clearCookie

  ```
  export const clearCookie = (res: NextApiResponse, name: string, path = "/") => {
    serialize(name, "", { maxAge: 0, path })
  };
  ```

- useage

  ```
  setCookie("ACCESS_TOKEN_KEY", value, {
    httpOnly: true,
    //mode production ->https
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    path: "/",
  });
  ```
