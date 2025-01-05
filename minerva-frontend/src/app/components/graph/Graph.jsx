'use client';
import { ResponsiveBar } from '@nivo/bar';

const Graph = ({ data }) => (
    <div style={{ height: 300, width: 600 }}>
        <ResponsiveBar
            data={data}
            keys={['placed']} // Single key representing "Percentage Placed"
            indexBy="year" // x-axis index
            margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
            padding={0.3} // Spacing between bars
            colors={['#C891C8']} // Bar color
            borderRadius={4} // Rounded corners for bars
            layout="horizontal" // Horizontal bars to fit percentage scaling
            maxValue={100} // Ensure the x-axis is limited to 100
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Percentage Placed',
                legendPosition: 'middle',
                legendOffset: 36, // Space for legend below the axis
                format: (value) => `${value}%`, // Add percentage symbol to ticks
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Year',
                legendPosition: 'middle',
                legendOffset: -50, // Space for legend left of the axis
            }}
            enableGridX={true} // Enable vertical grid lines for percentage clarity
            enableGridY={false} // Disable horizontal grid lines
        />
    </div>
);

export default Graph;
