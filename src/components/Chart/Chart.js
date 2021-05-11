import React from 'react';
import Chartbar from './ChartBar';
import './Chart.css';

const Chart = props => {
    const dataPointValues = props.dataPoints.map(d => d.value);
    const totalMaximum = Math.max(...dataPointValues);


 return <div className="chart">
     {props.dataPoints.map(dataPoint =>
         <Chartbar 
         key={dataPoint.label}
         maxValue={totalMaximum} 
         value={dataPoint.value}
         label={dataPoint.label}/>)}
 </div>
};

export default Chart;