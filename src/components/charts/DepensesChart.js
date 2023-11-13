import React from "react";
import Chart from "./Chart";

function DepensesChart(props) {
  const chartDataPoints = [
    { label: "jan", value: 0 },
    { label: "fev", value: 0 },
    { label: "mar", value: 0 },
    { label: "avr", value: 0 },
    { label: "mai", value: 0 },
    { label: "jun", value: 0 },
    { label: "jui", value: 0 },
    { label: "aou", value: 0 },
    { label: "sep", value: 0 },
    { label: "oct", value: 0 },
    { label: "nov", value: 0 },
    { label: "dec", value: 0 },
  ];
  for (const dep of props.data) {
    const depMonth = dep.date_d.getMonth();
    chartDataPoints[depMonth].value += dep.amount;
  }
  console.log(props.data);
  return <Chart dataPoints={chartDataPoints}></Chart>;
}

export default DepensesChart;
