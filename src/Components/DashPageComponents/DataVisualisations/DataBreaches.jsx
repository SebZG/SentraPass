import React, { useState, useCallback, useEffect } from "react";
import { csv , scaleBand} from "d3";
const csvUrl =
  "https://gist.githubusercontent.com/DrWho1369/f759c18dacc0962408c68bd1fd0cf36f/raw/databreaches.csv";

const width = 960;
const height = 500;
// const displayData = (data) => {
//   let message = "";
//   message = message + data.length + " rows\n";
// };

function DataBreaches() {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl).then(setData)
    }, []);
  
    if (!data) {
      return <pre>Loading...</pre>;
    }
    const yScale = scaleBand()
  return <svg width={width} height= {height}>{data.map(d => <rect x={0} y={d.y} width={d.width} height={d.height} /></svg>;
}

export default DataBreaches;
