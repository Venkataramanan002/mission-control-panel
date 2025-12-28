import { Language, getTranslation } from '@/lib/translations';

interface DistrictCardProps {
  lang: Language;
}

export const DistrictCard = ({ lang }: DistrictCardProps) => {
  return (
    <div className="glass-card p-4 w-[220px]">
      <div className="flex items-start gap-3 mb-4">
        {/* Profile image placeholder */}
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(200,30%,30%)] to-[hsl(200,20%,20%)] flex items-center justify-center overflow-hidden border border-[hsl(200,30%,40%)/0.3]">
          <svg viewBox="0 0 40 40" className="w-10 h-10">
            <rect width="40" height="40" fill="hsl(200, 25%, 35%)" />
            <circle cx="20" cy="14" r="8" fill="hsl(30, 60%, 60%)" />
            <ellipse cx="20" cy="36" rx="12" ry="10" fill="hsl(200, 40%, 45%)" />
          </svg>
        </div>
        <div>
          <div className="text-sm font-display font-semibold text-foreground tracking-wide">
            {getTranslation(lang, 'bastarDistrict')}
          </div>
          <div className="text-xs text-muted-foreground mt-0.5">
            {getTranslation(lang, 'collector')}
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="text-xs font-semibold text-destructive mb-1">
          {getTranslation(lang, 'top3Lags')}
        </div>
        <div className="text-[11px] text-muted-foreground leading-relaxed">
          {getTranslation(lang, 'lag1')}<br />
          {getTranslation(lang, 'lag2')}
        </div>
      </div>
      
      <button className="direct-call-btn w-full text-center">
        {getTranslation(lang, 'directCall')}
      </button>
    </div>
  );
};
