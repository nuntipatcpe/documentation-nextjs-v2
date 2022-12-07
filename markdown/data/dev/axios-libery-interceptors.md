---
title: "Axios lib"
popular: 0
name: "Interceptors"
---

# Interceptors

- Creating an instance axios

  - instance

  ```
  const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
  });
  ```

  - usage axios

  ```
  instance.get('/longRequest');
  ```

- Axios Interceptors

  ```
  import axios from "axios";
  ```

  - Config **request**

    ```
    axios.interceptors.request.use((config) => {
        const token = localStorage.getItem("token");sa

        if (token !== null) {
            config.headers = {
                "Authorization": `Bearer ${token}`
            }
          }

          return config;
    })
    ```

  - Config **response**

    ```
    axios.interceptors.response.use((response)=>{
        //status ticker < 200
        return response;
    },
    function (error) {
        //status>200

        if (error.response.status === 403) {

        }

        return Promise.reject(error);
    })

    ```

    ```
    export const fetchAuthorization = axios
    ```

- **useage**

  ```
  import { fetchAuthorization } from "../../../service/fetchAuthorization";
  ```

  ```
    async function getData() {
      await fetchAuthorization
        .get("https://..")
    }
  ```
