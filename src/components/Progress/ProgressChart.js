import React from 'react';
import './ProgressChart.css';
// import '~react-vis/dist/style';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
} from 'react-vis';

export default function ProgressChart() {
  return (
    <div className='chart'>
      <XYPlot width={300} height={300}>
        <HorizontalGridLines />
        <LineSeries
          data={[
            { x: 1, y: 10 },
            { x: 2, y: 5 },
            { x: 3, y: 15 },
          ]}
        />
        <XAxis />
        <YAxis />
      </XYPlot>
    </div>
  );
}
