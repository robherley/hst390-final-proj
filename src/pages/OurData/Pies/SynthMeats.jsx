import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const Age = () => (
  <div className="chart-container">
    <h2>Will People Switch to Synthetic Meat?</h2>
    <div className="chart">
      <ResponsivePie
        data={[
          {
            id: 'Meat Would Eat',
            label: 'Meat Would Eat',
            value: 79
          },
          {
            id: 'Meat Would Not Eat',
            label: 'Meat Would Not Eat',
            value: 11
          },
          {
            id: 'Veg Would Eat',
            label: 'Veg Would Eat',
            value: 6
          },
          {
            id: 'Veg Would Not Eat',
            label: 'Veg Would Not Eat',
            value: 24
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
        colors="set2"
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
            itemWidth: 140,
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
