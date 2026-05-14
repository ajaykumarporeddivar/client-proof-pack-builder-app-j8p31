'use client';

import { useState } from 'react';

interface SparklineProps {
  data: number[];
  color?: string;
  width?: number;
  height?: number;
}

export function Sparkline({
  data,
  color = '#6366f1',
  width = 80,
  height = 28,
}: SparklineProps) {
  const [maxValue, setMaxValue] = useState(Math.max(...data));

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <polyline
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        points={data
          .map((value, index) => {
            const x = (index / data.length) * width;
            const y = height - (value / maxValue) * height;
            return `${x},${y}`;
          })
          .join(' ')}
      />
    </svg>
  );
}

// Rest of the chart components...