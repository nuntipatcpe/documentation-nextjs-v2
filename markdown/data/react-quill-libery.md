---
title: "React"
popular: 0
name: "React quill"
---

# React quill

- install [Documentation](https://www.npmjs.com/package/react-quill)

  ```
  pnpm i react-quill --save
  ```

- usage

  ```
  import React, { useState } from 'react';
  import ReactQuill from 'react-quill';
  import 'react-quill/dist/quill.snow.css';

  function MyComponent() {
    const [value, setValue] = useState('');

    return <ReactQuill theme="snow" value={value} onChange={setValue} />;
  }
  ```
