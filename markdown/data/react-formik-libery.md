---
title: "React"
popular: 0
name: "Formik lib"
---

# Get Staeted

- Install [Documentation](https://formik.org/)

  ```
  pnpm install formik --save
  ```

- Formik

  ```
  import { Formik } from "formik";
  ```

- Map name=**username** id="username"

  ```
  <Formik
    initialValues={{ username: "Admin", password: "1234" }}
    onSubmit={(value) => alert(JSON.stringify(value))}
  >
    {({ handleChange, handleSubmit, values }) => (
      <form action="" onSubmit={handleSubmit}>
        <input
          name="username"
          id="username"
          type="text"
          placeholder="username"
          required
        />
        <br />
        <input
          name="password"
          id="password"
          type="password"
          placeholder="password"
          required
        />
        <br />
        <button type="submit">Register</button>
      </form>
    )}
  </Formik>
  ```

- Default

  ```
  <form action="">
    <input type="text" placeholder="username" required />
    <br />
    <input type="password" placeholder="password" required />
    <br />
    <button>Register</button>
  </form>
  ```
