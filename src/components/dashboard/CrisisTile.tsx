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
    const y = 28 - ((val - minVal) / range) * 22;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="crisis-tile">
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="text-[10px] font-semibold text-foreground tracking-wide leading-tight flex-1">
          {title}
        </div>
        <div className="flex-shrink-0">
          {icon}
        </div>
      </div>
      <div className="sparkline">
        <svg viewBox="0 0 100 32" className="w-full h-full" preserveAspectRatio="none">
          {/* Area fill */}
          <polygon
            points={`0,32 ${points} 100,32`}
            fill={sparklineColor}
            opacity="0.15"
          />
          {/* Line */}
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
