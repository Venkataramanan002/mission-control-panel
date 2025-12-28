import { Language } from '@/lib/translations';

interface LanguageToggleProps {
  lang: Language;
  onToggle: () => void;
}

export const LanguageToggle = ({ lang, onToggle }: LanguageToggleProps) => {
  return (
    <div className="flex items-center gap-2">
      <span className={`text-xs font-medium ${lang === 'en' ? 'text-primary' : 'text-muted-foreground'}`}>
        EN
      </span>
      <button
        onClick={onToggle}
        className="relative w-12 h-6 rounded-full bg-secondary border border-border transition-colors"
      >
        <div
          className={`absolute top-0.5 w-5 h-5 rounded-full bg-primary transition-transform duration-200 ${
            lang === 'hi' ? 'translate-x-6' : 'translate-x-0.5'
          }`}
        />
      </button>
      <span className={`text-xs font-medium ${lang === 'hi' ? 'text-primary' : 'text-muted-foreground'}`}>
        HI
      </span>
    </div>
  );
};
