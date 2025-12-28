import { ReactNode } from 'react';

interface CrisisTileProps {
  title: string;
  icon: ReactNode;
  sparklineColor: string;
  sparklineData: number[];
}

export const CrisisTile = ({ title, icon, sparklineColor, sparklineData }: CrisisTileProps) => {
  const maxVal = Math.max(...sparklineData);
  const minVal = Math.min(...sparklineData);
  const range = maxVal - minVal || 1;
  
  const points = sparklineData.map((val, i) => {
    const x = (i / (sparklineData.length - 1)) * 100;
    const y = 30 - ((val - minVal) / range) * 25;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="crisis-tile flex-1 min-w-[150px]">
      <div className="flex items-center justify-between mb-2">
        <div className="text-[11px] font-semibold text-foreground tracking-wide leading-tight">
          {title}
        </div>
        <div className="text-lg">
          {icon}
        </div>
      </div>
      <div className="sparkline">
        <svg viewBox="0 0 100 35" className="w-full h-full" preserveAspectRatio="none">
          <polyline
            points={points}
            fill="none"
            stroke={sparklineColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
