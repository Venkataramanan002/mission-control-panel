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
      <div className="relative w-[300px] h-[160px]">
        <svg viewBox="0 0 200 105" className="w-full h-full">
          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(145, 80%, 42%)" />
              <stop offset="35%" stopColor="hsl(60, 100%, 50%)" />
              <stop offset="65%" stopColor="hsl(35, 100%, 50%)" />
              <stop offset="100%" stopColor="hsl(0, 80%, 55%)" />
            </linearGradient>
            <filter id="gaugeGlow">
              <feGaussianBlur stdDeviation="3" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Background track */}
          <path
            d="M 20 95 A 80 80 0 0 1 180 95"
            fill="none"
            stroke="hsl(220, 20%, 15%)"
            strokeWidth="14"
            strokeLinecap="round"
          />
          
          {/* Colored gauge arc */}
          <path
            d="M 20 95 A 80 80 0 0 1 180 95"
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray={`${percentage * 2.51} 251`}
            filter="url(#gaugeGlow)"
          />
          
          {/* Tick marks */}
          {[0, 25, 50, 75, 100].map((tick, i) => {
            const angle = (180 - (tick / 100) * 180) * (Math.PI / 180);
            const x1 = 100 + 62 * Math.cos(angle);
            const y1 = 95 - 62 * Math.sin(angle);
            const x2 = 100 + 72 * Math.cos(angle);
            const y2 = 95 - 72 * Math.sin(angle);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="hsl(200, 15%, 40%)"
                strokeWidth="2"
              />
            );
          })}
        </svg>
        
        {/* Center value display */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
          <div className="text-[10px] font-display tracking-[0.2em] text-muted-foreground uppercase text-center">
            {getTranslation(lang, 'sushasanIndex')}
          </div>
          <div className="flex items-baseline justify-center mt-1">
            <span className="text-4xl font-display font-bold text-primary text-glow-primary leading-none">
              {value}
            </span>
            <span className="text-xl font-display text-muted-foreground leading-none">/</span>
            <span className="text-xl font-display text-muted-foreground leading-none">{maxValue}</span>
          </div>
          <div className="flex items-center justify-center gap-1 mt-1.5">
            <span className="text-xs text-success font-medium">↑ {change}</span>
            <span className="text-xs text-muted-foreground">{getTranslation(lang, 'lastWeek')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
