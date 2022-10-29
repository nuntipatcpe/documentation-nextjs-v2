---
title: "Vite React"
popular: 0
name: "TsConfig"
---

# Ts config

- tsconfig.json

  ```
  "baseUrl": "./src",
  "types": ["node"],
  "paths": {
      "@/components/*": ["components/*"],
      "@/sass/*": ["sass/*"],
      "@/store/*": ["store/*"],
      "@/utils/*": ["utils/*"],
      "@/models/*": ["models/*"],
  },
  ```

- vite.config.ts

  ```
  import { defineConfig } from "vite";
  import react from "@vitejs/plugin-react";
  import \* as path from "path";

  // https://vitejs.dev/config/
  export default defineConfig({
  plugins: [react()],
  resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  });

  ```
