function calulate(x, y) {
  return new Promise(function (resolve, reject) {
    if (connect) {
      const sum = x + y;
      resolve(`success${sum}`);
    } else {
      reject("fail");
    }
  })
    .then((result) => {})
    .catch((result) => {});
}
