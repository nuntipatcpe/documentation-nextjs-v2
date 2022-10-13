---
title: "Axios"
popular: 0
name: "Api"
---

# Axios

- pnpm Install

```
pnpm i axios
```

## Request method aliases

- axios.**request**(config)
- axios.**get**(url[, config])
- axios.**delete**(url[, config])
- axios.**head**(url[, config])
- axios.**options**(url[, config])
- axios.**post**(url[, data[, config]])
- axios.**put**(url[, data[, config]])
- axios.**patch**(url[, data[, config]])

## GET Method

- basic

```
axios.get('https://pathApi..')
    .then(res => console.log(res.data))
```

- catch

```
axios.get('https://pathApi..')
    .then(res => console.log(res.data))
    .catch(error => console.log(error))
```

**Abort fetching API**

- Create controller and signal

```
const controller = AbortController();
```

```
const signal = controller.signal;
```

- Fetching

```
function axiosFetch(){
    axios.get('https://pathApi..',{
        signal : signal
    }).then(res = > console.log(res.data))
}
```

- Abort

```
function axiosAbort(){
    controller.abort();
}
```

## POST Method

```
axios.post('https://pathApi..',
    {
        username: 'nuntipat',
        password: '1234'
    })
.then(res => console.log(res.data))
.catch(error => console.log(error))
```

## Performing multiple concurrent requests

```
function getUserAccount() {
  return axios.get('/user/12345');
}
```

```
function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}
```

```
Promise.all([getUserAccount(), getUserPermissions()])
  .then(function (results) {
    const acct = results[0];
    const perm = results[1];
  }
```

## Config axios API

- Post

```
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
```

- GET

```
axios({
  method: 'get',
  url: 'http://bit.ly/2mTM3nY',
  responseType: 'stream'
})
  .then(function (response) {
    response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
  });

```

```
axios('/user/12345');
```

## Creating an instance

- instance

```
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
});
```

- usage

```
instance.get('/longRequest');
```

## Axios Interceptors

```
import axios from "axios";
```

Config request

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

Response

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

**useage**

```
import { fetchAuthorization } from "../../../service/fetchAuthorization";
```

```
  async function getData() {
    await fetchAuthorization
      .get("https://..")
  }
```

## Recommend get API

- **Async/Await**

```
async function getFact(){
    const response = await axios.get('https://pathApi..')
        .then(res=> console.log(res.data))
        .catch(error => console.log(error))
}
```
