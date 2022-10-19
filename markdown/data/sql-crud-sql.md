---
title: "SQL"
popular: 0
name: "CRUD SQL"
---

# CRUD SQL

- INSERT INTO Statement

  add value1 to column1

  add value2 to column2

  add value3 to column3

  ```
  INSERT INTO table_name (column1, column2, column3, ...)
  VALUES (value1, value2, value3, ...);
  ```

- SELECT

  ```
  SELECT column1, column2, ...
  FROM table_name;
  ```

  selects all customers from the "Customers", all column **\***

  ```
  SELECT * FROM table_name;
  ```

- UPDATE Statement

  ```
  UPDATE table_name
  SET column1 = value1, column2 = value2, ...
  WHERE condition;
  ```

- DELETE Statement

  ```
  DELETE FROM table_name WHERE condition;
  ```
