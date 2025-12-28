import { useState } from 'react';
import { Language, getTranslation } from '@/lib/translations';
import { SushasanGauge } from '@/components/dashboard/SushasanGauge';
import { KPICard } from '@/components/dashboard/KPICard';
import { ChhattisgarhMap } from '@/components/dashboard/ChhattisgarhMap';
import { DistrictCard } from '@/components/dashboard/DistrictCard';
import { CrisisTile } from '@/components/dashboard/CrisisTile';
import { LanguageToggle } from '@/components/dashboard/LanguageToggle';
import { AlertCircle, CheckCircle, AlertTriangle, Plus } from 'lucide-react';

const Index = () => {
  const [lang, setLang] = useState<Language>('en');

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'hi' : 'en');
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8 overflow-auto">
      <div className="max-w-7xl mx-auto">
        {/* Header with Language Toggle */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex-1" />
          <h1 className="font-display text-lg md:text-xl lg:text-2xl font-bold text-foreground tracking-[0.2em] text-center flex-1">
            {getTranslation(lang, 'title')}
          </h1>
          <div className="flex-1 flex justify-end">
            <LanguageToggle lang={lang} onToggle={toggleLanguage} />
          </div>
        </div>

        {/* Action Alert and Gauge Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center justify-center gap-8 mb-4 flex-wrap">
            {/* Action Alert */}
            <div className="action-alert">
              <div className="w-6 h-6 rounded-full bg-destructive flex items-center justify-center">
                <Plus className="w-4 h-4 text-destructive-foreground rotate-45" />
              </div>
              <div>
                <span className="text-xs font-semibold text-destructive">
                  {getTranslation(lang, 'actionNeeded')}
                </span>
                <br />
                <span className="text-sm font-bold text-foreground">
                  {getTranslation(lang, 'criticalDistricts')}
                </span>
              </div>
            </div>

            {/* Gauge */}
            <SushasanGauge 
              value={84} 
              maxValue={100} 
              change="+2.4%" 
              lang={lang}
            />
          </div>
        </div>

        {/* KPI Cards Row */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <KPICard
            title={getTranslation(lang, 'farmerWealth')}
            subtitle={getTranslation(lang, 'farmerNehon')}
            value={<><span className="text-2xl">₹</span>420 <span className="text-lg font-normal">CR</span></>}
            footer={getTranslation(lang, 'dbtDisbursed')}
            variant="farmer"
          />
          <KPICard
            title={getTranslation(lang, 'womensTrust')}
            subtitle={getTranslation(lang, 'womensTrustSub')}
            value={<>99.8<span className="text-lg font-normal">%</span></>}
            footer={getTranslation(lang, 'matterVendorSuccess')}
            variant="women"
          />
          <KPICard
            title={getTranslation(lang, 'districtHealth')}
            subtitle={getTranslation(lang, 'onlineAlerts')}
            value={<span className="text-destructive">2 {getTranslation(lang, 'redAlerts')}</span>}
            footer={getTranslation(lang, 'criticalTowerUptime')}
            variant="health"
          />
          <KPICard
            title={getTranslation(lang, 'citizenSatisfaction')}
            subtitle={getTranslation(lang, 'womenIncome')}
            value={
              <span className="flex items-center gap-1">
                4.1<span className="text-lg font-normal">/5.0</span>
                <span className="text-warning text-lg">★★</span>
              </span>
            }
            footer={getTranslation(lang, 'realTimeSentiment')}
            variant="citizen"
          />
        </div>

        {/* Map and District Card Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-8">
          <div className="map-container w-full max-w-[500px] h-[320px]">
            <ChhattisgarhMap />
          </div>
          <DistrictCard lang={lang} />
        </div>

        {/* Crisis Response Tray */}
        <div className="glass-card p-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-2">
            <h2 className="font-display text-sm font-semibold tracking-wider text-foreground">
              {getTranslation(lang, 'crisisResponseTray')}
            </h2>
            <div className="text-xs">
              <span className="text-destructive font-bold">{getTranslation(lang, 'urgent')}</span>
              <span className="text-muted-foreground ml-1">
                {getTranslation(lang, 'urgentMessage')}
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <CrisisTile
              title={getTranslation(lang, 'mahariVandan')}
              icon={<CheckCircle className="w-5 h-5 text-success" />}
              sparklineColor="hsl(145, 70%, 45%)"
              sparklineData={[20, 25, 22, 28, 26, 30, 32, 35, 33, 38]}
            />
            <CrisisTile
              title={getTranslation(lang, 'paddyProcurement')}
              icon={<AlertTriangle className="w-5 h-5 text-warning" />}
              sparklineColor="hsl(35, 100%, 50%)"
              sparklineData={[30, 28, 32, 25, 30, 28, 26, 30, 28, 25]}
            />
            <CrisisTile
              title={getTranslation(lang, 'infraPmay')}
              icon={<Plus className="w-5 h-5 text-destructive" />}
              sparklineColor="hsl(0, 75%, 55%)"
              sparklineData={[35, 32, 30, 28, 32, 30, 28, 25, 28, 30]}
            />
            <CrisisTile
              title={getTranslation(lang, 'swaAtmaandSchools')}
              icon={<CheckCircle className="w-5 h-5 text-success" />}
              sparklineColor="hsl(145, 70%, 45%)"
              sparklineData={[22, 25, 28, 30, 28, 32, 35, 33, 36, 40]}
            />
          </div>
        </div>

        {/* Footer Language Display */}
        <div className="mt-6 text-center">
          <span className="text-xs text-muted-foreground">
            {getTranslation(lang, 'english')} / {getTranslation(lang, 'hindi')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Index;
