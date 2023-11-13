import React from "react";
import "./ChartBar.css";

function ChartBar(props) {
  console.log("AJout d'une barre");
  let barHeight = Math.round((props.value / props.maxVal) * 100) + "%";

  return (
    <div className="chart_bar">
      <div className="chart_bar__inner">
        <div className="chart_bar__fill" style={{ height: barHeight }}></div>
      </div>
      <div className="chart_bar__label"> {props.label} </div>
    </div>
  );
}

export default ChartBar;
