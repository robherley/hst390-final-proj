import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const Gender = () => (
  <div className="chart-container">
    <h2>Gender</h2>
    <div className="chart">
      <ResponsivePie
        data={[
          {
            id: 'Male',
            label: 'Male',
            value: 99
          },
          {
            id: 'Female',
            label: 'Female',
            value: 36
          },
          {
            id: 'Non-Binary/Third',
            label: 'Non-Binary/Third-Gender',
            value: 4
          },
          {
            id: 'Prefer Not To Say',
            label: 'Prefer Not To Say',
            value: 3
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
        colors="accent"
        colorBy="id"
        borderWidth={1}
        borderColor="inherit:darker(0.2)"
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#FFF"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={10}
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
            itemWidth: 120,
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

export default Gender;
