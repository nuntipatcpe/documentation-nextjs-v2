---
title: "Express"
popular: 0
name: "Interface"
---

# Interface

- Request express

  ```
  export interface TypedRequestQuery<T> extends Express.Request {
    query: T;
  }
  ```

  ```
  type User = { username: string; password: string };
  ```

  ```
  app.get("/login", (req: TypedRequestQuery<User>, res: Response) => {
    res.status(200).json({
        result: req.query.username,
    });
  });
  ```
