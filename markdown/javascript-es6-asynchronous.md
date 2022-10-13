# Asynchronous

- Ex function

  - setTimeout

  ```
  console.log("start")
  ```

  ```
  setTimeout(()=>{
      console.log("Loading..")
  },3000)
  ```

  ```
  console.log("complete")
  ```

  - setInterval

  - Promise

---

## Callback

**Callback**

```
function calulate(x,y,callback){
    setTimeout(()={
        const sum = z+y;
        callback(sum);
    },3000)
}
```

**Usage**

```
calulate(x,y,function(result){
    console.log(`result = ${result}`);
});
```

**Problam CallBack Hell**

sort process from x x1 x2

- x = 1
- x1 = 2
- x2 = 2

```
calulate(x,y,function(result){
    calulate(x1,y,function(result){
        calulate(x2,yfunction(result){
            calulate(x3,y,result);
        })
    })
});
```

---

## Promise

```
Promise(function(resolve,reject){

})
```

status

- pending **begin**
- success **resolve**
- fail **reject**

```
let connect = true
```

```
const downloading = new Promise(function(resolve,reject){
    if(connect){
        resolve('success');
    }else{
        reject('fail');
    }
})
```

method

- then()
- catch()
- finally()

```
const downloading = new Promise(function(resolve,reject){

})
```

```
downloading.then(result=>{

})
```

```
downloading.catch(result=>{

})
```

or

```
fuction calulate(x,y){
    return new Promise(function(resolve,reject){
    if(connect){
        const sum = x+y;
        resolve(`success${sum}`);
    }else{
        reject('fail');
    }
})
.then(result=>{})
.catch(result=>{})
}
```

Solve problems **CallBack Hell**

```
calulate(x,y) 
.then(function(result){
    return calulate(x2,result);
})
.then(function(result){
    return calulate(x3,result);
});

```

---

## Async & Await

```
fuction calulate(x,y){
    return new Promise(function(resolve,reject){
    if(connect){
        const sum = x+y;
        resolve(`success${sum}`);
    }else{
        reject('fail');
    }
})
.then(result=>{})
.catch(result=>{})
}


```

```
async function start(){
    await calulate(x1,y);
    await calulate(x2,y);
    await calulate(x3,y);
    awaitcalulate(x4,y);
}
```

start()
