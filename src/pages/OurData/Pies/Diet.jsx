import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const Diet = () => (
  <div className="chart-container single">
    <h2>Diet</h2>
    <div className="chart">
      <ResponsivePie
        data={[
          {
            id: 'Meat Eaters (& Pescatarians)',
            label: 'Meat Eaters (& Pescatarians)',
            value: 103
          },
          {
            id: 'Vegans/Vegetarians',
            label: 'Vegans/Vegetarians',
            value: 39
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
        colors="set3"
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
            itemWidth: 200,
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

export default Diet;
