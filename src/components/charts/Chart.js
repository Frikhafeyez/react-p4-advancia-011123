import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart(props) {
  console.log(props.dataPoints);
  const dataValues = props.dataPoints.map((datapoint) => datapoint["value"]);
  const totalMax = Math.max(...dataValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dp) => (
        <ChartBar
          key={dp.label}
          value={dp.value}
          maxVal={totalMax}
          label={dp.label}
        ></ChartBar>
      ))}
    </div>
  );
}

export default Chart;
