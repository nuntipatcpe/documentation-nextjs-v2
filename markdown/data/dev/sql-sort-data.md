---
title: "SQL"
popular: 0
name: "Sort data"
---

# Sort data

- ORDER BY **Sorted data**

  ```
  SELECT column1, column2, ...
  FROM table_name
  ORDER BY column1, column2, ... ASC|DESC;
  ```

## Ascending defalult

selects all customers from the "Customers", **sorted** by the "Country" column:

```
SELECT * FROM Customers
ORDER BY Country;
```

## Descending

selects all customers from the "Customers", **sorted** by the **DESCENDING** by the "Country" column:, **DESC**

```
SELECT * FROM Customers
ORDER BY Country DESC;
```
