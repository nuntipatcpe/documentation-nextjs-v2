---
title: "React"
popular: 0
name: "Sort Array utils"
---

# Sort Array

```
export function sortArray(array: Array<any>) {
  array.sort((a: any, b: any) => {
    let fb = a,
      fa = b;

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
  return array;
}
```
