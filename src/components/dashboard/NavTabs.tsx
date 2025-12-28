import { Language, getTranslation } from '@/lib/translations';

interface NavTabsProps {
  activeScreen: 1 | 2 | 3;
  onScreenChange: (screen: 1 | 2 | 3) => void;
  lang: Language;
}

export const NavTabs = ({ activeScreen, onScreenChange, lang }: NavTabsProps) => {
  const tabs = [
    { id: 1 as const, labelKey: 'screen1' as const },
    { id: 2 as const, labelKey: 'screen2' as const },
    { id: 3 as const, labelKey: 'screen3' as const },
  ];

  return (
    <div className="flex items-center gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onScreenChange(tab.id)}
          className={`nav-tab ${activeScreen === tab.id ? 'nav-tab-active' : ''}`}
        >
          {tab.id}. {getTranslation(lang, tab.labelKey)}
        </button>
      ))}
    </div>
  );
};
