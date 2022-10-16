---
title: "NextJS"
popular: 0
name: "Proteced round"
---

# Proteced round

- withAuth.tsx

  - Redux toolkit
  - useRouter -> next/router

  ```
  import React from "react";
  import { useSelector } from "react-redux";
  import { useRouter } from "next/router";

  import {
  isAuthenticatedSelector,
  isAuthenticatingSelector,
  } from "@/store/slices/userSlice";
  import { isClient } from "@/utils/commonUtil";
  ```

  ```
  // eslint-disable-next-line react/display-name
  const withAuth = (WrappedComponent: React.FC) => (props: any) => {
  // this hoc only supports client side rendering.
  if (isClient()) {
      const router = useRouter();
      const { route } = router;
      const isAuthenticated = useSelector(isAuthenticatedSelector);
      const isAuthenticating = useSelector(isAuthenticatingSelector);

      // is fetching session (eg. show spinner)
      if (isAuthenticating) {
      return null;
      }

      // If user is not logged in, return login component
      if (route !== "/login" && route !== "/register") {
      if (!isAuthenticated) {
          router.push(`/login`);
          return null;
      } else if (route == "/") {
          router.push(`/stock`); // default page after login when call root path
          return null;
      }
      } else {
      if (isAuthenticated) {
          router.push(`/stock`); // default page after login
          return null;
      }
      }

      // If user is logged in, return original component
      return <WrappedComponent {...props} />;
  }

  return null;
  };

  export default withAuth;
  ```

- Useage

  export default **withAuth(** Component **)**

  ```
  import React from 'react'
  import withAuth from "@/components/withAuth";

  type Props = {}

  function Component({}: Props) {
  return (
      <div>Component</div>
  )
  }

  export default withAuth(Component)
  ```
