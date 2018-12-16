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
            reason: 'Personal Preference',
            Surveyors: 95
          },
          {
            reason: 'Natural To Eat',
            Surveyors: 51
          },
          {
            reason: 'Lack of Options',
            Surveyors: 9
          },
          {
            reason: 'Convenience',
            Surveyors: 29
          },
          {
            reason: 'Friends and Family',
            Surveyors: 36
          },
          {
            reason: 'No Reason',
            Surveyors: 12
          }
        ]}
        keys={['Surveyors']}
        indexBy="reason"
        maxValue="auto"
        margin={{
          top: 40,
          right: 80,
          bottom: 40,
          left: 80
        }}
        curve="catmullRomClosed"
        borderWidth={2}
        borderColor="inherit"
        gridLevels={3}
        gridShape="circular"
        gridLabelOffset={34}
        enableDots
        dotSize={8}
        dotColor="inherit"
        dotBorderWidth={0}
        dotBorderColor="#ffffff"
        enableDotLabel
        dotLabel="value"
        dotLabelYOffset={-12}
        colors="pastel1"
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
            translateY: -20,
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
