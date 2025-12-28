import { ReactNode } from 'react';

interface KPICardProps {
  title: string;
  subtitle: string;
  value: ReactNode;
  footer: string;
  variant: 'farmer' | 'women' | 'health' | 'citizen';
}

const variantStyles = {
  farmer: 'bg-gradient-to-br from-[hsl(185,40%,18%)] to-[hsl(185,30%,12%)] border-[hsl(185,50%,30%)/0.3]',
  women: 'bg-gradient-to-br from-[hsl(200,25%,18%)] to-[hsl(200,20%,12%)] border-[hsl(200,30%,30%)/0.3]',
  health: 'bg-gradient-to-br from-[hsl(35,40%,18%)] to-[hsl(35,30%,12%)] border-[hsl(35,50%,35%)/0.3]',
  citizen: 'bg-gradient-to-br from-[hsl(220,20%,16%)] to-[hsl(220,15%,10%)] border-[hsl(220,20%,30%)/0.3]',
};

const subtitleStyles = {
  farmer: 'bg-[hsl(185,60%,25%)] text-[hsl(185,80%,70%)]',
  women: 'bg-[hsl(200,40%,25%)] text-[hsl(200,60%,70%)]',
  health: 'bg-[hsl(35,50%,25%)] text-[hsl(35,80%,70%)]',
  citizen: 'bg-[hsl(220,20%,22%)] text-[hsl(220,20%,70%)]',
};

export const KPICard = ({ title, subtitle, value, footer, variant }: KPICardProps) => {
  return (
    <div className={`rounded-xl p-4 min-w-[170px] border backdrop-blur-sm ${variantStyles[variant]}`}>
      <div className="text-xs font-display tracking-wider text-muted-foreground mb-2">
        {title}
      </div>
      <div className={`inline-block px-2 py-0.5 rounded text-[10px] font-medium tracking-wide mb-3 ${subtitleStyles[variant]}`}>
        {subtitle}
      </div>
      <div className="text-3xl font-bold text-foreground mb-1">
        {value}
      </div>
      <div className="text-xs text-muted-foreground">
        {footer}
      </div>
    </div>
  );
};
