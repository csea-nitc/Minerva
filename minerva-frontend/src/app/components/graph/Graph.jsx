'use client'; 
import { ResponsiveBar } from '@nivo/bar';
import { createContext, useState } from 'react';

const Graph = ({ data }) => (
    <div style={{ height: 300, width: 600 }}>
        <ResponsiveBar
            data={data}
            keys={['placed', 'applied']}
            indexBy="year"
            margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
            padding={0.3}
            groupMode="grouped"
            layout="horizontal"
            colors={['#D8B8E4', '#9B59B6']}  // Light purple and darker purple combination
            borderRadius={4}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Year',
                legendPosition: 'middle',
                legendOffset: 36
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Count',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemDirection: 'left-to-right',
                    itemWidth: 100,
                    itemHeight: 20,
                    itemOpacity: 0.85,
                    symbolSize: 20
                }
            ]}
        />
    </div>
);

export default Graph ;
