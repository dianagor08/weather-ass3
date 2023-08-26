import React, { useEffect } from "react";
import Chart from "chart.js";

function Graph(props) {
  useEffect(() => {
    const data = props.data;
    const { list } = data;
    const temp_min = [];
    const temp_max = [];
    const temp_time = [];

    const startIndex = props.dayIndex * 8;
    const endIndex = (props.dayIndex + 1) * 8 - 1;

    list.forEach((sample, index) => {
      if (index < startIndex || index > endIndex) return;

      const { main, dt } = sample;
      const d = new Date(dt * 1000);

      temp_min.push(main.temp_min);
      temp_max.push(main.temp_max);
      temp_time.push(d.toLocaleTimeString());
    });

    const chartData = {
      labels: temp_time,
      datasets: [
        {
          data: temp_min,
          borderColor: "blue",
          fill: false,
        },
        {
          data: temp_max,
          borderColor: "red",
          fill: false,
        },
      ],
    };

    new Chart("myChart", {
      type: "line",
      data: chartData,
      options: {
        legend: { display: false },
      },
    });
  }, []);

  return (
    <div className="p-3 my-5 bg-danger-subtle">
      <i className="text-danger fw-bold">Graph Item component</i>
      <h4>Hourly Temperature data</h4>
      <canvas id="myChart" style={{ width: '90%', maxWidth: 600 }}></canvas>
    </div>
  );
}

export default Graph;
