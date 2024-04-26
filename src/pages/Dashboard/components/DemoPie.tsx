import React from "react";
import { Pie } from "@ant-design/plots";

const DemoPie = () => {
  const data = [
    {
      type: "Category 1",
      value: 27,
    },
    {
      type: "Category 2",
      value: 25,
    },
    {
      type: "Category 3",
      value: 18,
    },
    {
      type: "Category 4",
      value: 15,
    },
    {
      type: "Category 5",
      value: 10,
    },
    {
      type: "Category 6",
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    height: 350,
    colorField: "type",
    radius: 0.8,
    label: {
      type: "outer",
      content: "{name} {percentage}",
    },
    interactions: [
      {
        type: "pie-legend-active",
      },
      {
        type: "element-active",
      },
    ],
  };
  return <Pie {...config} />;
};

export default DemoPie;
