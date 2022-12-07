---
title: "SQL"
popular: 2
name: "Get started"
---

# Get started

- SELECT

  ```
  SELECT column1, column2, ...
  FROM table_name;
  ```

- WHERE

  ```
  SELECT column1, column2, ...
  FROM table_name
  WHERE condition;
  ```

  **AND**

  ```
  WHERE condition1 AND condition2 AND condition3 ...;
  ```

  **OR**

  ```
  WHERE condition1 OR condition2 OR condition3 ...;
  ```

  **NOT**

  ```
  WHERE NOT condition;
  ```

  selects all customers from the "Customers", have Mexico ?

  ```
  SELECT * FROM Customers
  WHERE Country='Mexico';
  ```

- INSERT INTO Statement

  ```
  INSERT INTO table_name (column1, column2, column3, ...)
  VALUES (value1, value2, value3, ...);
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
