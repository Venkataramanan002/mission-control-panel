import { Language, getTranslation } from '@/lib/translations';

interface DistrictCardProps {
  lang: Language;
}

export const DistrictCard = ({ lang }: DistrictCardProps) => {
  return (
    <div className="glass-card p-4 w-[200px]">
      <div className="flex items-start gap-3 mb-3">
        {/* Profile avatar */}
        <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[hsl(200,30%,28%)] to-[hsl(200,25%,18%)] flex items-center justify-center overflow-hidden border border-[hsl(200,30%,35%)/0.4]">
          <svg viewBox="0 0 44 44" className="w-full h-full">
            <rect width="44" height="44" fill="hsl(200, 25%, 30%)" />
            <circle cx="22" cy="15" r="8" fill="hsl(30, 55%, 55%)" />
            <ellipse cx="22" cy="40" rx="12" ry="11" fill="hsl(200, 40%, 40%)" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs font-display font-semibold text-foreground tracking-wide leading-tight">
            {getTranslation(lang, 'bastarDistrict')}
          </div>
          <div className="text-[10px] text-muted-foreground mt-0.5 leading-tight">
            {getTranslation(lang, 'collector')}
          </div>
        </div>
      </div>
      
      <div className="mb-3">
        <div className="text-[10px] font-semibold text-destructive mb-1">
          {getTranslation(lang, 'top3Lags')}
        </div>
        <div className="text-[10px] text-muted-foreground leading-relaxed space-y-0.5">
          <div>{getTranslation(lang, 'lag1')}</div>
          <div>{getTranslation(lang, 'lag2')}</div>
        </div>
      </div>
      
      <button className="direct-call-btn w-full text-center">
        {getTranslation(lang, 'directCall')}
      </button>
    </div>
  );
};
