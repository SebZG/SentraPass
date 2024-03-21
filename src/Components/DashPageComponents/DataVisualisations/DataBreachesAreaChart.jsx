import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./DataBreachesAreaChart.css";
const data = [
  {
    Index: 340,
    Entity: "Yahoo",
    Year: 2013,
    Records: 300,
    "Organization type": "web",
    Method: "hacked\r",
  },
  {
    Index: 118,
    Entity: "FAC",
    Year: 2019,
    Records: 88.5,
    "Organization type": "financial service company",
    Method: "poor security\r",
  },
  {
    Index: 112,
    Entity: "Facebook",
    Year: 2019,
    Records: 54,
    "Organization type": "social network",
    Method: "poor security\r",
  },
  {
    Index: 176,
    Entity: "Marriott",
    Year: 2018,
    Records: 50,
    "Organization type": "hotel",
    Method: "hacked\r",
  },
  {
    Index: 341,
    Entity: "Yahoo",
    Year: 2014,
    Records: 50,
    "Organization type": "web",
    Method: "hacked\r",
  },
  {
    Index: 121,
    Entity: "FFN",
    Year: 2016,
    Records: 41.2,
    "Organization type": "web",
    Method: "poor security / hacked\r",
  },
  {
    Index: 106,
    Entity: "Exactis",
    Year: 2018,
    Records: 34,
    "Organization type": "data broker",
    Method: "poor security\r",
  },
  {
    Index: 8,
    Entity: "Airtel",
    Year: 2019,
    Records: 32,
    "Organization type": "telecommunications",
    Method: "poor security\r",
  },
  {
    Index: 191,
    Entity: "MongoDB",
    Year: 2019,
    Records: 27.5,
    "Organization type": "tech",
    Method: "poor security\r",
  },
];

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    const { Entity, Year, Method } = payload[0].payload;
    const Records = payload[0].value;

    return (
      <div className="custom-tooltip">
        <p className="label">
          {Entity}: {Records}
        </p>
        <p className="intro">The Number of records lost in {Year}</p>
        <p className="desc">{Method}.</p>
      </div>
    );
  }

  return null;
}

function DataBreachesAreaChart() {
  return (
    <div className="col" style={{ width: "100%" }} id="chart">
      <h1 className="text-center pt-2">Data Breaches Worldwide - Area Chart</h1>
      <div className="col d-flex justify-content-center">
        <ResponsiveContainer width="100%" height={500}>
          <AreaChart
            width={500}
            height={1000}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Entity" stroke="#79B4A9" />
            <YAxis stroke="#79B4A9" />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="Records"
              stroke="#8884d8"
              fill="#79B4A9"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <p>
        <a href="https://informationisbeautiful.net/visualizations/worlds-biggest-data-breaches-hacks/">
          Selected events over 30,000 records stolen. Updated Jan 2024
        </a>
      </p>
    </div>
  );
}

export default DataBreachesAreaChart;
