import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const Age = () => (
  <div className="chart-container single">
    <h2>Age</h2>
    <div className="chart">
      <ResponsivePie
        data={[
          {
            id: '< 18',
            label: 'Under 18 years old',
            value: 8
          },
          {
            id: '18-24',
            label: '18-24 years old',
            value: 57
          },
          {
            id: '25-34',
            label: '25-34 years old',
            value: 50
          },
          {
            id: '35-44',
            label: '35-44 years old',
            value: 19
          },
          {
            id: '45-54',
            label: '45-54 years old',
            value: 10
          },
          {
            id: '55-64',
            label: '55-64 years old',
            value: 2
          },
          {
            id: '> 65',
            label: 'Over 65 years old',
            value: 0
          }
        ]}
        margin={{
          top: 20,
          right: 0,
          bottom: 80,
          left: 0
        }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors="nivo"
        colorBy="id"
        borderWidth={1}
        borderColor="inherit:darker(0.2)"
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#FFF"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor="inherit"
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#000"
        animate
        motionStiffness={90}
        motionDamping={15}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            translateY: 60,
            itemWidth: 80,
            itemHeight: 30,
            itemTextColor: '#FFF',
            symbolSize: 20,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#FFF'
                }
              }
            ]
          }
        ]}
      />
    </div>
  </div>
);

export default Age;
