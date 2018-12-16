import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

import theme from '../theme';

const Awareness = () => (
  <div className="chart-container">
    <h2>Environmental Awareness</h2>
    <div className="chart">
      <ResponsiveBar
        data={[
          {
            aw: 'Very',
            meat: 46,
            veg: 32,
            meatColor: '#E84855',
            vegColor: '#AEF78E'
          },
          {
            aw: 'Somewhat',
            meat: 46,
            veg: 7,
            meatColor: '#E84855',
            vegColor: '#AEF78E'
          },
          {
            aw: 'Neutral',
            meat: 5,
            veg: 0,
            meatColor: '#E84855',
            vegColor: '#AEF78E'
          },
          {
            aw: 'Not Very',
            meat: 5,
            veg: 0,
            meatColor: '#E84855',
            vegColor: '#AEF78E'
          },
          {
            aw: 'Not at All',
            meat: 1,
            veg: 0,
            meatColor: '#E84855',
            vegColor: '#AEF78E'
          }
        ]}
        keys={['meat', 'veg']}
        indexBy="aw"
        margin={{
          top: 50,
          right: 130,
          bottom: 50,
          left: 60
        }}
        padding={0.3}
        groupMode="grouped"
        colors="nivo"
        colorBy={({ id, data }) => data[`${id}Color`]}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        // fill={[
        //   {
        //     match: {
        //       id: 'fries'
        //     },
        //     id: 'dots'
        //   },
        //   {
        //     match: {
        //       id: 'sandwich'
        //     },
        //     id: 'lines'
        //   }
        // ]}
        borderColor="inherit:darker(1.6)"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Awareness',
          legendPosition: 'middle',
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Surveyors',
          legendPosition: 'middle',
          legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="inherit:darker(1.6)"
        animate
        motionStiffness={90}
        motionDamping={15}
        theme={theme}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemTextColor: '#FFF',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </div>
  </div>
);

export default Awareness;
