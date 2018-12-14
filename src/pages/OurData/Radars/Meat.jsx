import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';

import theme from '../theme';

const Meat = () => (
  <div className="chart-container">
    <h2>Why do people eat meat?</h2>
    <div className="chart">
      <ResponsiveRadar
        data={[
          {
            taste: 'fruity',
            chardonay: 100,
            carmenere: 103,
            syrah: 39
          },
          {
            taste: 'bitter',
            chardonay: 52,
            carmenere: 24,
            syrah: 90
          },
          {
            taste: 'heavy',
            chardonay: 44,
            carmenere: 31,
            syrah: 113
          },
          {
            taste: 'strong',
            chardonay: 60,
            carmenere: 81,
            syrah: 100
          },
          {
            taste: 'sunny',
            chardonay: 33,
            carmenere: 88,
            syrah: 73
          }
        ]}
        keys={['chardonay', 'carmenere', 'syrah']}
        indexBy="taste"
        maxValue="auto"
        margin={{
          top: 70,
          right: 80,
          bottom: 40,
          left: 80
        }}
        curve="catmullRomClosed"
        borderWidth={2}
        borderColor="inherit"
        gridLevels={5}
        gridShape="circular"
        gridLabelOffset={36}
        enableDots
        dotSize={8}
        dotColor="inherit"
        dotBorderWidth={0}
        dotBorderColor="#ffffff"
        enableDotLabel
        dotLabel="value"
        dotLabelYOffset={-12}
        colors="nivo"
        colorBy="key"
        fillOpacity={0.1}
        animate
        motionStiffness={90}
        motionDamping={15}
        isInteractive
        theme={theme}
        legends={[
          {
            anchor: 'top-left',
            direction: 'column',
            translateX: -50,
            translateY: -40,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: '#FFF',
            symbolSize: 12,
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

export default Meat;
