---
title: "Sumo Logic"
popular: 0
name: "If"
---

# If

- **If** [Docs](https://help.sumologic.com/docs/search/search-query-language/search-operators/if/)

- Checks whether a statement is true or false, then saves the result as a new field.

## Syntax

```
| if(<condition>, <value_if_true>, <value_if_false>) as <field>
```

---

```
| if(status_code matches "5*", 1, 0) as serverError
| if(status_code matches "2*", 1, 0) as success
| if(!(status_code matches "2*"), 1, 0) as failure
| if(status matches "WARN" or status matches "ERROR", 1, 0) as status
| if(alpha > 1 and beta > 5, "true", "false") as conditionState
```
