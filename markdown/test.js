const data = [10, 20, 30];
const summation = data.reduce((pre, cur) => {
  const total = cur + pre;
  return total;
}, 9);
console.log(summation);
