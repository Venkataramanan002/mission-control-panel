import { ReactNode } from 'react';

interface KPICardProps {
  title: string;
  subtitle: string;
  value: ReactNode;
  footer: string;
  variant: 'farmer' | 'women' | 'health' | 'citizen';
}

const subtitleStyles = {
  farmer: 'bg-[hsl(175,60%,22%)] text-[hsl(175,80%,65%)]',
  women: 'bg-[hsl(200,45%,22%)] text-[hsl(200,65%,65%)]',
  health: 'bg-[hsl(35,55%,22%)] text-[hsl(35,80%,65%)]',
  citizen: 'bg-[hsl(220,25%,18%)] text-[hsl(220,20%,65%)]',
};

export const KPICard = ({ title, subtitle, value, footer, variant }: KPICardProps) => {
  return (
    <div className={`kpi-card kpi-card-${variant}`}>
      <div className="text-[10px] font-display tracking-[0.12em] text-muted-foreground uppercase">
        {title}
      </div>
      <div className={`inline-block self-start px-2 py-0.5 rounded text-[9px] font-semibold tracking-wide mt-1.5 mb-auto ${subtitleStyles[variant]}`}>
        {subtitle}
      </div>
      <div className="text-2xl font-bold text-foreground leading-none mb-1.5">
        {value}
      </div>
      <div className="text-[10px] text-muted-foreground leading-snug">
        {footer}
      </div>
    </div>
  );
};
