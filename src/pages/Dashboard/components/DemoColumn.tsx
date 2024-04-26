import React from "react";
import { Column } from "@ant-design/plots";

const DemoColumn = () => {
  const data = [
    {
      type: "Furniture and appliances",
      sales: 38,
    },
    {
      type: "Grain, oil and non-staple food",
      sales: 52,
    },
    {
      type: "fresh fruits",
      sales: 61,
    },
    {
      type: "beauty care",
      sales: 145,
    },
    {
      type: "母婴用品",
      sales: 48,
    },
    {
      type: "Baby Products",
      sales: 38,
    },
    {
      type: "food and drink ",
      sales: 38,
    },
    {
      type: "home cleaning",
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    height: 350,
    label: {
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "category",
      },
      sales: {
        alias: "sales",
      },
    },
  };
  return <Column {...config} />;
};

export default DemoColumn;
