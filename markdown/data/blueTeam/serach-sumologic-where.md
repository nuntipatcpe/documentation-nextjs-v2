---
title: "Sumo Logic"
popular: 0
name: "Where"
---

# Where

- **Where** [Docs](https://help.sumologic.com/docs/search/search-query-language/search-operators/where/)

- Checks whether a boolean statement is true and only **returns results if it is true**.

# Syntax

```
| where <boolean expression> |
```

---

```
| where isValidIP("192.168.0.10")
| where !isValidIP("192.168.0.10")
```
