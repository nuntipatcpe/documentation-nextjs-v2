---
title: "Sumo Logic"
popular: 0
name: "isNull isEmpty isBlank"
---

# isNull, isEmpty, isBlank

- **isNull**, **isEmpty**, and **isBlank** Search Operators [Docs](https://help.sumologic.com/docs/search/search-query-language/search-operators/isnull-isempty-isblank/)

  - Check whether a field is null, empty, or blank, respectively. You can also use the not operator (!) with these.

  ### Syntax

  ```
  isNull(<string>)
  isEmpty(<string>)
  isBlank(<string>)
  ```

  ```
  | where !isBlank(username)
  | where username matches "jsmith"
  | limit 5
  ```
