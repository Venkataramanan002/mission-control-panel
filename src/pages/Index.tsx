import { useState } from 'react';
import { Language, getTranslation } from '@/lib/translations';
import { NavTabs } from '@/components/dashboard/NavTabs';
import { LanguageToggle } from '@/components/dashboard/LanguageToggle';
import { Screen1 } from '@/components/screens/Screen1';
import { Screen2 } from '@/components/screens/Screen2';
import { Screen3 } from '@/components/screens/Screen3';

const Index = () => {
  const [lang, setLang] = useState<Language>('en');
  const [activeScreen, setActiveScreen] = useState<1 | 2 | 3>(1);

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'hi' : 'en');
  };

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 overflow-auto text-center">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-6">
          {/* Title Row */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1" />
            <h1 className="font-display text-base md:text-lg lg:text-xl font-bold text-foreground tracking-[0.15em] text-center flex-1">
              {getTranslation(lang, 'title')}
            </h1>
            <div className="flex-1 flex justify-end">
              <LanguageToggle lang={lang} onToggle={toggleLanguage} />
            </div>
          </div>
          
          {/* Navigation Row */}
          <div className="flex justify-center">
            <NavTabs 
              activeScreen={activeScreen} 
              onScreenChange={setActiveScreen} 
              lang={lang} 
            />
          </div>
        </header>

        {/* Screen Content */}
        <main>
          {activeScreen === 1 && <Screen1 lang={lang} />}
          {activeScreen === 2 && <Screen2 lang={lang} />}
          {activeScreen === 3 && <Screen3 lang={lang} />}
        </main>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <span className="text-[10px] text-muted-foreground">
            {getTranslation(lang, 'english')} / {getTranslation(lang, 'hindi')}
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Index;
