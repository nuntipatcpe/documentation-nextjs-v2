---
title: "React"
popular: 0
name: "Children Props"
---

# Children Props

- Component

  ```
  interface ComponentProps {
    children: React.ReactNode;
  }
  ```

  ```
  export default function Component({ children }: ComponentProps) {
    return (
      <>
          {children}
      </>
    );
  }
  ```

- Useage

  ```
  <Component>
      <div>asdasdasda</div>
  </Component>
  ```
