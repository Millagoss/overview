import React from 'react';

import ChartWrapper from './Chart.style';

// import FusionChart from '../../utils/FusionChart';
import LineChart from '../LineChart.component.js/LineChart.component';

const ChartComponent = () => {
  return (
    <ChartWrapper>
      <div className='chart-container'>
        <div className='head'>
          <div className='todays-trend'>
            <h5>Today's trends</h5>
            <span>as of 25 May 2019, 09:41 PM</span>
          </div>

          <div className='info'>
            <div>
              <span className='blue'></span> Today
            </div>
            <div>
              <span className='grey'></span> Yesterday
            </div>
          </div>
        </div>
        <div className='chart'>
          <LineChart />
        </div>
      </div>
      <div className='line'></div>
      <aside>
        <div className='box'>
          <p>Resolved</p>
          <span>449</span>
        </div>
        <div className='underline'></div>
        <div className='box'>
          <p>Received</p>
          <span>426</span>
        </div>
        <div className='underline'></div>
        <div className='box'>
          <p>Average first response time</p>
          <span>33m</span>
        </div>
        <div className='underline'></div>
        <div className='box'>
          <p>Average response time</p>
          <span>3h 8m</span>
        </div>
        <div className='underline'></div>
        <div className='box'>
          <p>Resolution within SLA</p>
          <span>94%</span>
        </div>
      </aside>
    </ChartWrapper>
  );
};

export default ChartComponent;
