---
title: "Axios"
popular: 10
---

# Fetch

## GET Method

- Basic

```
fetch('https://pathApi..')
    .then(res=> {res.json())
    .then(data =>console.log(data))
    .catch(error => console.log(error))
```

- Check error

```
fetch('https://pathApi..')
.then(res=> {
    if(res.ok){
        console.log('success')
    } elsr {
         console.log('Not Successful')
    }
    res.json()
})
.then(data =>console.log(data))
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
function beginFetching(){
    fetch('https://pathApi..',{
        method:'get',
        signal: signal
    })
    .then(res=> res.json())
    .then(data => console.log(data))
    .catch(error => console.error('error',err));
}


```

- Abort

```
function abortFetching(){
    console.log('Now aborting');
    controller.abort();
}
```

- POST

**JSON.stringify** sent JSON

```
fetch('https://pathApi..',{
    method:'POST',
    body: JSON.stringify({
        username: 'nuntipat',
        password: '1234'
    })
})
.then(res=> {
   return res.json();
})
.then(data =>console.log(data))
.catch(error => console.log(error))
```

---

## Usage

- Need to **Async/Await**

```
async function getFact(){
    await response = fetch('https://pathApi..')
        .then(res=> res.json())
        .then(data =>console.log(data))
        .catch(error => console.log(error))
}

```
