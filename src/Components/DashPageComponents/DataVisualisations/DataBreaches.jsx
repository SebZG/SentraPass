import React, { useState, useCallback, useEffect } from "react";
import * as d3 from "d3";
const csvUrl =
  "https://gist.githubusercontent.com/DrWho1369/1ac5cc3db816e8558e05f6c3db7bb13a/raw/dataBreachesWorldwide.csv";

const displayData = (data) => {
  let message = "";
  message = message + data.length + " rows\n";
};

function DataBreaches() {
  const [data, setData] = useState(null);

  useEffect(() => {
    d3.csv(csvUrl).then((data) => {
      console.log("Fetched data: ", data);
      setData(data);
    });
  });

  return <div>DataBreaches. {data ? displayData() : "Loading..."}</div>;
}

export default DataBreaches;
