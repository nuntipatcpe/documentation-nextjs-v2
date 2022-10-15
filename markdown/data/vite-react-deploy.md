---
title: "Vite React"
popular: 2
name: "Deploy"
---

# Deploy

- Vercel

  1. vercel.json **SPA Fallback except**

     ```
     {
       "rewrites": [{ "source": "/(.*)", "destination": "/" }]
     }
     ```

---

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
