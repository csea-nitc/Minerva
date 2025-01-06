'use client';
import { ResponsiveBar } from '@nivo/bar';
import { useEffect, useState } from 'react';

const Graph = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={isMobile ? "w-full h-[400px]" : "h-[300px] w-[600px]"}>
      <ResponsiveBar
        data={data}
        keys={['placed']}
        indexBy="year"
        margin={isMobile ? 
          { top: 20, right: 30, bottom: 50, left: 45 } : 
          { top: 20, right: 20, bottom: 50, left: 60 }
        }
        padding={0.3}
        colors={['#C891C8']}
        borderRadius={4}
        layout="horizontal"
        maxValue={100}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Percentage Placed',
          legendPosition: 'middle',
          legendOffset: 36,
          format: (value) => `${value}%`,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: isMobile ? 12 : 5,
          tickRotation: 0,
          legend: 'Year',
          legendPosition: 'middle',
          legendOffset: -50,
          format: (value) => isMobile ? `20${value}` : value,
        }}
        enableGridX={true}
        enableGridY={false}
        theme={{
          fontSize: 11,
          axis: {
            legend: {
              text: {
                fontSize: 12
              }
            },
            ticks: {
              text: {
                fontSize: isMobile ? 11 : 11
              }
            }
          }
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
      />
    </div>
  );
};

export default Graph;