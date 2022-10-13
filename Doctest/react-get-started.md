# Install

- Nodejs [install](https://nodejs.org/en/)

---

# Vite

- Typescript

  ```
  pnpm create vite my-react-app --template react-ts
  ```

### Deploy

- Heroku

  1. Install [Heroku CLI.](https://devcenter.heroku.com/articles/heroku-cli)
  2. Create a Heroku account by [signing up.](https://signup.heroku.com)
  3. Run **heroku** login and fill in your Heroku credentials:

  ```
  heroku login

  ```

  4. static.json

  ```
  {
    "root": "./dist"
  }
  ```

  5. Set up your Heroku git remote

  ```
  git init
  ```

  ```
  git add .
  ```

  ```
  git commit -m "My site ready for deployment."
  ```

  ```
  heroku apps:create example
  ```

  6. Set buildpacks. We use heroku/nodejs to build the project and heroku-buildpack-static to serve it.

  ```
  heroku buildpacks:set heroku/nodejs
  ```

  ```
  heroku buildpacks:add https://github.com/heroku/heroku-buildpack-static.git
  ```

  7. Deploy your site

  ```
  git push heroku main
  ```

  ```
  heroku open
  ```

- Vercel

  1. vercel.json **SPA Fallback except**

  ```
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/" }]
  }
  ```

### File environment (.env)

- .env.development

  ```
  VITE_IS_PRODUCTION=0
  ```

- .env.production

  ```
  VITE_IS_PRODUCTION=1
  ```

- Useage

  ```
  let value = import.meta.env.VITE_IS_PRODUCTION
  ```

  - value development = **1** production = **2**

- base URL
  ```
  import.meta.env.BASE_URL
  ```

---

- **React**

With PNPM

```
pnpm create react-app my-app
```
