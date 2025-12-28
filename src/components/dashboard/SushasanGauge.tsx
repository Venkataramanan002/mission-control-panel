import { Language, getTranslation } from '@/lib/translations';

interface SushasanGaugeProps {
  value: number;
  maxValue: number;
  change: string;
  lang: Language;
}

export const SushasanGauge = ({ value, maxValue, change, lang }: SushasanGaugeProps) => {
  const percentage = (value / maxValue) * 100;
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[280px] h-[150px]">
        {/* Gauge background arc */}
        <svg viewBox="0 0 200 110" className="w-full h-full">
          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(145, 80%, 45%)" />
              <stop offset="40%" stopColor="hsl(60, 100%, 50%)" />
              <stop offset="70%" stopColor="hsl(35, 100%, 50%)" />
              <stop offset="100%" stopColor="hsl(0, 80%, 55%)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Background track */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="hsl(220, 15%, 20%)"
            strokeWidth="12"
            strokeLinecap="round"
          />
          
          {/* Colored gauge arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={`${percentage * 2.51} 251`}
            filter="url(#glow)"
          />
          
          {/* Tick marks */}
          {[0, 25, 50, 75, 100].map((tick, i) => {
            const angle = (180 - (tick / 100) * 180) * (Math.PI / 180);
            const x1 = 100 + 65 * Math.cos(angle);
            const y1 = 100 - 65 * Math.sin(angle);
            const x2 = 100 + 75 * Math.cos(angle);
            const y2 = 100 - 75 * Math.sin(angle);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="hsl(200, 20%, 50%)"
                strokeWidth="2"
              />
            );
          })}
          
          {/* Needle */}
          <g transform={`rotate(${-90 + (percentage / 100) * 180}, 100, 100)`}>
            <polygon
              points="100,30 96,100 104,100"
              fill="hsl(185, 80%, 50%)"
              filter="url(#glow)"
            />
            <circle cx="100" cy="100" r="8" fill="hsl(220, 20%, 25%)" stroke="hsl(185, 80%, 50%)" strokeWidth="2" />
          </g>
        </svg>
        
        {/* Center value display */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
          <div className="text-xs text-muted-foreground tracking-wider mb-1">
            {getTranslation(lang, 'sushasanIndex')}
          </div>
          <div className="flex items-baseline">
            <span className="text-5xl font-display font-bold text-primary text-glow-primary">
              {value}
            </span>
            <span className="text-2xl font-display text-muted-foreground">/</span>
            <span className="text-2xl font-display text-muted-foreground">{maxValue}</span>
          </div>
          <div className="text-sm text-success flex items-center gap-1 mt-1">
            <span>↑{change}</span>
            <span className="text-muted-foreground text-xs">{getTranslation(lang, 'lastWeek')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
