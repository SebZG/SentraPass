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
    Records: 3000000000,
    "Organization type": "web",
    "Method\r": "hacked\r",
  },
  {
    Index: 118,
    Entity: "First American Corporation",
    Year: 2019,
    Records: 885000000,
    "Organization type": "financial service company",
    "Method\r": "poor security\r",
  },
  {
    Index: 112,
    Entity: "Facebook",
    Year: 2019,
    Records: 540000000,
    "Organization type": "social network",
    "Method\r": "poor security\r",
  },
  {
    Index: 176,
    Entity: "Marriott International",
    Year: 2018,
    Records: 500000000,
    "Organization type": "hotel",
    "Method\r": "hacked\r",
  },
  {
    Index: 341,
    Entity: "Yahoo",
    Year: 2014,
    Records: 500000000,
    "Organization type": "web",
    "Method\r": "hacked\r",
  },
  {
    Index: 121,
    Entity: "Friend Finder Networks",
    Year: 2016,
    Records: 412214295,
    "Organization type": "web",
    "Method\r": "poor security / hacked\r",
  },
  {
    Index: 106,
    Entity: "Exactis",
    Year: 2018,
    Records: 340000000,
    "Organization type": "data broker",
    "Method\r": "poor security\r",
  },
  {
    Index: 8,
    Entity: "Airtel",
    Year: 2019,
    Records: 320000000,
    "Organization type": "telecommunications",
    "Method\r": "poor security\r",
  },
  {
    Index: 285,
    Entity: "Truecaller",
    Year: 2019,
    Records: 299055000,
    "Organization type": "Telephone directory",
    "Method\r": "unknown\r",
  },
  {
    Index: 191,
    Entity: "MongoDB",
    Year: 2019,
    Records: 275000000,
    "Organization type": "tech",
    "Method\r": "poor security\r",
  },
  {
    Index: 331,
    Entity: "Wattpad",
    Year: 2020,
    Records: 270000000,
    "Organization type": "web",
    "Method\r": "hacked\r",
  },
  {
    Index: 114,
    Entity: "Facebook",
    Year: 2019,
    Records: 267000000,
    "Organization type": "social network",
    "Method\r": "poor security\r",
  },
  {
    Index: 184,
    Entity: "Microsoft",
    Year: 2019,
    Records: 250000000,
    "Organization type": "tech",
    "Method\r": "data exposed by misconfiguration\r",
  },
  {
    Index: 190,
    Entity: "MongoDB",
    Year: 2019,
    Records: 202000000,
    "Organization type": "tech",
    "Method\r": "poor security\r",
  },
  {
    Index: 124,
    Entity: "Unknown",
    Year: 2020,
    Records: 201000000,
    "Organization type":
      "personal and demographic data about residents and their properties of US",
    "Method\r": "Poor security\r",
  },
  {
    Index: 149,
    Entity: "Instagram",
    Year: 2020,
    Records: 200000000,
    "Organization type": "social network",
    "Method\r": "poor security\r",
  },
  {
    Index: 347,
    Entity: "Zynga",
    Year: 2019,
    Records: 173000000,
    "Organization type": "social network",
    "Method\r": "hacked\r",
  },
  {
    Index: 103,
    Entity: "Equifax",
    Year: 2017,
    Records: 163119000,
    "Organization type": "financial, credit reporting",
    "Method\r": "poor security\r",
  },
  {
    Index: 92,
    Entity: "Dubsmash",
    Year: 2018,
    Records: 162000000,
    "Organization type": "messaging app",
    "Method\r": "hacked\r",
  },
  {
    Index: 179,
    Entity: "Massive American business hack including 7-Eleven and Nasdaq",
    Year: 2012,
    Records: 160000000,
    "Organization type": "financial",
    "Method\r": "hacked\r",
  },
  {
    Index: 3,
    Entity: "Adobe Systems Incorporated",
    Year: 2013,
    Records: 152000000,
    "Organization type": "tech",
    "Method\r": "hacked\r",
  },
  {
    Index: 301,
    Entity: "Under Armour",
    Year: 2018,
    Records: 150000000,
    "Organization type": "Consumer Goods",
    "Method\r": "hacked\r",
  },
  {
    Index: 95,
    Entity: "eBay",
    Year: 2014,
    Records: 145000000,
    "Organization type": "web",
    "Method\r": "hacked\r",
  },
  {
    Index: 50,
    Entity: "Canva",
    Year: 2019,
    Records: 140000000,
    "Organization type": "web",
    "Method\r": "hacked\r",
  },
  {
    Index: 141,
    Entity: "Heartland",
    Year: 2009,
    Records: 130000000,
    "Organization type": "financial",
    "Method\r": "hacked\r",
  },
  {
    Index: 275,
    Entity: "Tetrad",
    Year: 2020,
    Records: 120000000,
    "Organization type": "market analysis",
    "Method\r": "poor security\r",
  },
  {
    Index: 270,
    Entity: "Target Corporation",
    Year: 2013,
    Records: 110000000,
    "Organization type": "retail",
    "Method\r": "hacked\r",
  },
  {
    Index: 99,
    Entity: "ElasticSearch",
    Year: 2019,
    Records: 108000000,
    "Organization type": "tech",
    "Method\r": "poor security\r",
  },
  {
    Index: 52,
    Entity: "Capital One",
    Year: 2019,
    Records: 106000000,
    "Organization type": "financial",
    "Method\r": "unsecured S3 bucket\r",
  },
  {
    Index: 159,
    Entity: "Justdial",
    Year: 2019,
    Records: 100000000,
    "Organization type": "local search",
    "Method\r": "unprotected api\r",
  },
  {
    Index: 192,
    Entity: "Mobile TeleSystems (MTS)",
    Year: 2019,
    Records: 100000000,
    "Organization type": "telecommunications",
    "Method\r": "misconfiguration/poor security\r",
  },
  {
    Index: 228,
    Entity: "Quora",
    Year: 2018,
    Records: 100000000,
    "Organization type": "Question & Answer",
    "Method\r": "hacked\r",
  },
];

function DataBreachesAreaChart() {
  return (
    <div className="col " style={{ width: "100%" }} id="chart">
      <h1 className="text-center pt-2">Data Breaches Worldwide - Area Chart</h1>
      <div className="col d-flex justify-content-center">
        <ResponsiveContainer width="90%" height={500}>
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
            <YAxis dataKey="Records" stroke="#79B4A9" />
            <Tooltip />
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
