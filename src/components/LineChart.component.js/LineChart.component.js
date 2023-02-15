import React from 'react';

import ReactFC from 'react-fusioncharts';

import FusionCharts from 'fusioncharts';

import Column2D from 'fusioncharts/fusioncharts.charts';

import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const chartConfigs = {
  type: 'msspline',
  width: '100%',
  height: '400',
  dataFormat: 'json',

  dataSource: {
    chart: {
      theme: 'fusion',
      paletteColors: '#3751FF, #DFE0EB',
      lineThickness: 3,
    },
    categories: [
      {
        category: [
          {
            label: '0',
          },
          {
            label: '10',
          },
          {
            label: '20',
          },
          {
            label: '30',
          },
          {
            label: '40',
          },
          {
            label: '50',
          },
          {
            label: '60',
          },
        ],
      },
    ],
    dataset: [
      {
        data: [
          {
            value: '2000',
          },
          {
            value: '14233',
          },
          {
            value: '25507',
          },
          {
            value: '9110',
          },
          {
            value: '15529',
          },
          {
            value: '20803',
          },
          {
            value: '19202',
          },
        ],
      },
      {
        data: [
          {
            value: '15400',
          },
          {
            value: '12800',
          },
          {
            value: '22800',
          },
          {
            value: '12400',
          },
          {
            value: '15800',
          },
          {
            value: '19800',
          },
          {
            value: '21800',
          },
        ],
      },
    ],
  },
};

const LineChart = () => {
  return <ReactFC {...chartConfigs} />;
};

export default LineChart;
