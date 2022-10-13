---
title: "Test"
popular: 1000
name: "Comma number"
---

# Useful JavaScript code Snippets

1. Sort an Array

- asdasd

  ```
  //strings
  const names = ["Seema", "Rekha", "Jaya"];
  names.sort();
  //['Jaya', 'Rekha', 'Seema' ]

  //Numbers
  const numbers = [101, 8, 87];
  numbers.sort((a, b) => {
  return a - b;
  });
  //[ 8, 87, 101 ]

  ```

  <code language="javascript">
  //strings
  const names = ["Seema", "Rekha", "Jaya"];
  names.sort();
  //['Jaya', 'Rekha', 'Seema' ]

  //Numbers
  const numbers = [101, 8, 87];
  numbers.sort((a, b) => {
  return a - b;
  });
  //[ 8, 87, 101 ]
  </code>

2. Select a random element

<code language="javascript">
const items = ["Ball", "Bat", "Cup"]
const randomIndex = Math.floor(Math.random()*items.length)
items[randomIndex]
</code>

3. Reverse a string

<code language="javascript">
function reverseString(string) {
  return string.split(" ").reverse().join(" ")
}

revereseString("Random String")
</code>

4. Check if element has a class

<code language="javascript">
const element = document.querySelector("#element")
element.classList.contains("active")
</code>

5. String interpolation

<code language="javascript">
const name = "Jaya"
console.log(`Hi, ${name}. You have ${2 ** 3} new notifications.`}
//Hi, Jaya. You have 8 new notifications.
</code>

6. Loop through an array

<code language="javascript">
const cars = ["Ford", "BMW", "Audi" ]
for (let car of cars) {
  console.log(car)
}

/_
Ford
BMW
Audi
_/
</code>

7. Get current time

<code language="javascript">
const date = new Date()
const currentTime = 
  `${date.getHours()}:${date.getMintues()}:${date.getSeconds()}`

console.log(currentTimes)
//example output: "22:16:41"
</code>

8. Replace part of a string

<code language="javascript">
const string = "You are awesome."
const replacedString = string.replace("You", "We")

console.log(replacedString) //Output: "We are awesome"
</code>

9. Destructing variable assignment

<code language="javascript">
let profile = ['bob', 34, 'carpenter'];
let [name, age, job] = profile;
console.log(name);
// bob
</code>

10. Using the spread operator

<code language="javascript">
let data = [1,2,3,4,5];
console.log(...data);
//  1 2 3 4 5
let data2 = [6,7,8,9,10];
let combined = [...data, ...data2];
console.log(...combined);
// 1 2 3 4 5 6 7 8 9 10
console.log(Math.max(...combined));
// 10
</code>
