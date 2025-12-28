import { Language } from '@/lib/translations';

interface LanguageToggleProps {
  lang: Language;
  onToggle: () => void;
}

export const LanguageToggle = ({ lang, onToggle }: LanguageToggleProps) => {
  return (
    <div className="lang-toggle">
      <span 
        className={`cursor-pointer transition-colors ${
          lang === 'en' ? 'text-primary' : 'text-muted-foreground'
        }`}
        onClick={() => lang === 'hi' && onToggle()}
      >
        EN
      </span>
      <button
        onClick={onToggle}
        className="relative w-10 h-5 rounded-full bg-secondary border border-border transition-colors"
        aria-label="Toggle language"
      >
        <div
          className={`absolute top-0.5 w-4 h-4 rounded-full bg-primary transition-transform duration-200 ${
            lang === 'hi' ? 'translate-x-5' : 'translate-x-0.5'
          }`}
        />
      </button>
      <span 
        className={`cursor-pointer transition-colors ${
          lang === 'hi' ? 'text-primary' : 'text-muted-foreground'
        }`}
        onClick={() => lang === 'en' && onToggle()}
      >
        HI
      </span>
    </div>
  );
};
