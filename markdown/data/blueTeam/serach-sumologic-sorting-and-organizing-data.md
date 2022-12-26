---
title: "Sumo Logic"
popular: 0
name: "Sorting and organizing data"
---

# Sorting and organizing data

## Syntax

```
sort by <field> (displays results as descending, by default)
```

```
sort by +<field> (displays results as ascending)
```

```
sort by <field> asc (displays results as ascending)
```

```
top <#> <field>​​​​​​​ by <group_by_operator>
```

- **Sort** [Docs](https://help.sumologic.com/docs/search/search-query-language/search-operators/sort/)

  ```
  | count by http_status_code
  | sort by _count
  ```

- **Top**

  ```
  | count by http_status_code
  | top 5 _count
  ```

- **Transpose** [Docs](https://help.sumologic.com/docs/search/search-query-language/search-operators/transpose/)

  - Flips the **rows** and **columns**, similar to the pivot table function in a spreadshee

  ```
  _sourceCategory=Labs/Apache/Access
  | timeslice 5m
  | count by _timeslice, status_code
  | transpose row _timeslice column status_code
  ```

# Example

```
_dataTier=continuous _sourceCategory=Labs/AWS/ALB
| parse regex "(?<http_status_code> 4\d{2} | 5\d{2} )"
| parse "elasticloadbalancing:*:" as server
| parse "\"* http" as http_request_method
//2022-12-08T19:01:58
| parse " *-*-*T*:*:* " as year, month, day, hour, minute, second
| format ("%s/%s/%s", month, day, year) as date
| format ("%s:%s:%s", hour, minute, second) as time
// remove fields
| fields - year, month, day, hour, minute, second
| where http_request_method != "GET"
| count by http_status_code
| sort by _count
```
