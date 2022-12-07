---
title: "React"
popular: 0
name: "Redundancy Array utils"
---

# Redundancy Array

```
export function redundancyArray(array: Array<string>) {
  let finalArray = array.filter((e, index) => array.indexOf(e) === index);
  return finalArray;
}
```
