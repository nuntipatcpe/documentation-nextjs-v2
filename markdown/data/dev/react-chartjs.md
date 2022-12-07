---
title: "React"
popular: 0
name: "Chart js"
---

# React-chartjs

- Install [documentation](https://www.chartjs.org/)

  ```
  pnpm install chart.js
  ```

# React-chartjs-2

- Install [documentation](https://www.npmjs.com/package/react-chartjs-2)

  ```
  pnpm i react-chartjs-2
  ```

- Fake data

  **Bar chart**

  ```
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Balance",
        data: [
          12000, 11000, 16000, 13000, 19000, 14000, 17000, 20000, 10000, 11000,
          17000, 12000,
        ],
        backgroundColor: "rgba(41, 52, 98, 0.5)",
      },
    ],
  };
  ```

  **Pie chart**

  ```
  const data= {
    labels: ["Income", "Expenses"],
    datasets: [
      {
        label: "# of Votes",
        data: [10000, 5000],
        backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  ```

- Options

  ```
  export const optionsBar = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };
  ```

- Useage

  ```
   <Bar data={data} options={options}/>
  ```
