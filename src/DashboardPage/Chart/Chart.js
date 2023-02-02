import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Chart = () => {
  const [chatState, setchatState] = useState({
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 45, 53, 64, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 53, 64, 64, 105, 91, 114, 94],
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 43, 64, 75, 52, 53, 41],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Janu",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  });

  // cercel chart
  const [catagoryChart, setcatagoryChart] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div className=" flex justify-between items-center gap-5 mt-10">
      <div className=" w-2/3">
        <ReactApexChart
          options={chatState.options}
          series={chatState.series}
          type="bar"
          height={350}
        />
      </div>

      {/* cercel chart */}
      <div className=" w-1/3">
        <ReactApexChart
          options={catagoryChart.options}
          series={catagoryChart.series}
          type="donut"
        />
      </div>
    </div>
  );
};

export default Chart;
