---
title: "NodeJs"
popular: 1
name: "Get started"
---

# Get started

- Install [Documentation](https://nodejs.org/en/)

## Typescript

- tsc [Documentation](https://www.npmjs.com/package/tsc)
- typescript [Documentation](https://www.npmjs.com/package/typescript)
- ts-node [Documentation](https://www.npmjs.com/package/ts-node)
- ts-node-dev [Documentation](https://www.npmjs.com/package/ts-node-dev)

```
npm install -g tsc typescript ts-node ts-node-dev; npm install -g typescript
```

- Generate src

  ```
  mkdir src,public/images ;cd .\src\ ;New-Item server.ts; cd .. ;
  ```

- Generate **tsconfig.json**

  ```
  tsc --init
  ```

- Generate **package.json**

  ```
  pnpm init
  ```

- if generate dist [ file **javascript** "outDir": "./dist"]

  ```
  tsc
  ```

- Setting tsconfig.json

  ```
  "rootDir": "./src",
  "outDir": "./dist",
  "allowJs": true,
  ```

- Setting package.json

  ```
  "main": "server.ts",
  ```

  ```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "ts-node src/server.ts",
    "dev": "ts-node-dev src/server.ts"
  },
  ```

## Javascript

- Generate package.json

  ```
  pnpm init
  ```

- Generate src

  ```
  mkdir src; cd .\src\ ; New-Item server.js; cd ..
  ```

- nodemon [Documentation](https://www.npmjs.com/package/nodemon)

  ```
  npm i nodemon
  ```

- package.json **scripts** **main**

  ```
  "main": "server.js",
  ```

  ```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon src/server.js"
  },
  ```

---
