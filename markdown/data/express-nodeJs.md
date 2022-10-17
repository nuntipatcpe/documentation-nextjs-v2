---
title: "Express"
popular: 0
name: "Get started"
---

# Get started

- Install [documentation](https://www.npmjs.com/package/express)

  ```
  pnpm i express --save
  ```

  ```
  pnpm i @types/express -d
  ```

- Typescript

  ```
  import express, { Request, Response } from "express";

  export interface TypedRequestQuery<T> extends Express.Request {
    query: T;
  }
  type User = { username: string; password: string };

  const app = express();
  const port = 8080; // default port to listen

  // define a route handler for the default home page
  app.get("/", (req: Request, res: Response) => {
    res.json({
        result: "ok",
    });
  });

   //static file
   // http://localhost:8080/static/images/index.html
   app.use("/static", express.static("public"));

   // start the Express server
   app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
   });
  ```

- Javascript

  ```
  const express = require( "express" );
  const app = express();
  const port = 8080; // default port to listen

  // define a route handler for the default home page
  app.get( "/", ( req, res ) => {
      res.send( "Hello world!" );
  } );

  //static file
  app.use('/static',express.static('public'))

  // start the Express server
  app.listen( port, () => {
      console.log( `server started at http://localhost:${ port }` );
  } );
  ```
