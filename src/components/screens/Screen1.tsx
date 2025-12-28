import { Language, getTranslation } from '@/lib/translations';
import { SushasanGauge } from '@/components/dashboard/SushasanGauge';
import { KPICard } from '@/components/dashboard/KPICard';
import { ChhattisgarhMap } from '@/components/dashboard/ChhattisgarhMap';
import { DistrictCard } from '@/components/dashboard/DistrictCard';
import { CrisisTile } from '@/components/dashboard/CrisisTile';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

interface Screen1Props {
  lang: Language;
}

export const Screen1 = ({ lang }: Screen1Props) => {
  return (
    <div className="space-y-6">
      {/* Action Alert and Gauge Section */}
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {/* Action Alert */}
          <div className="action-alert">
            <div className="w-5 h-5 rounded-full bg-destructive flex items-center justify-center">
              <XCircle className="w-3 h-3 text-destructive-foreground" />
            </div>
            <div>
              <span className="text-[10px] font-semibold text-destructive uppercase tracking-wide">
                {getTranslation(lang, 'actionNeeded')}
              </span>
              <br />
              <span className="text-xs font-bold text-foreground">
                {getTranslation(lang, 'criticalDistricts')}
              </span>
            </div>
          </div>

          {/* Gauge */}
          <SushasanGauge 
            value={84} 
            maxValue={100} 
            change="2.4%" 
            lang={lang}
          />
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="flex flex-wrap justify-center gap-4">
        <KPICard
          title={getTranslation(lang, 'farmerWealth')}
          subtitle={getTranslation(lang, 'farmerNehon')}
          value={<><span className="text-lg">₹</span>420 <span className="text-base font-normal">CR</span></>}
          footer={getTranslation(lang, 'dbtDisbursed')}
          variant="farmer"
        />
        <KPICard
          title={getTranslation(lang, 'womensTrust')}
          subtitle={getTranslation(lang, 'womensTrustSub')}
          value={<>99.8<span className="text-base font-normal">%</span></>}
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
              4.1<span className="text-base font-normal">/5.0</span>
              <span className="text-warning text-lg">★★</span>
            </span>
          }
          footer={getTranslation(lang, 'realTimeSentiment')}
          variant="citizen"
        />
      </div>

      {/* Map and District Card Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
        <div className="map-container w-full max-w-[480px] h-[300px]">
          <ChhattisgarhMap />
        </div>
        <DistrictCard lang={lang} />
      </div>

      {/* Crisis Response Tray */}
      <div className="glass-card p-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-2">
          <h2 className="font-display text-xs font-semibold tracking-[0.12em] text-foreground uppercase">
            {getTranslation(lang, 'crisisResponseTray')}
          </h2>
          <div className="text-[10px]">
            <span className="text-destructive font-bold">{getTranslation(lang, 'urgent')}</span>
            <span className="text-muted-foreground ml-1">
              {getTranslation(lang, 'urgentMessage')}
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <CrisisTile
            title={getTranslation(lang, 'mahariVandan')}
            icon={<CheckCircle className="w-4 h-4 text-success" />}
            sparklineColor="hsl(145, 70%, 42%)"
            sparklineData={[20, 25, 22, 28, 26, 30, 32, 35, 33, 38]}
          />
          <CrisisTile
            title={getTranslation(lang, 'paddyProcurement')}
            icon={<AlertTriangle className="w-4 h-4 text-warning" />}
            sparklineColor="hsl(35, 100%, 50%)"
            sparklineData={[30, 28, 32, 25, 30, 28, 26, 30, 28, 25]}
          />
          <CrisisTile
            title={getTranslation(lang, 'infraPmay')}
            icon={<XCircle className="w-4 h-4 text-destructive" />}
            sparklineColor="hsl(0, 80%, 55%)"
            sparklineData={[35, 32, 30, 28, 32, 30, 28, 25, 28, 30]}
          />
          <CrisisTile
            title={getTranslation(lang, 'swaAtmaandSchools')}
            icon={<CheckCircle className="w-4 h-4 text-success" />}
            sparklineColor="hsl(145, 70%, 42%)"
            sparklineData={[22, 25, 28, 30, 28, 32, 35, 33, 36, 40]}
          />
        </div>
      </div>
    </div>
  );
};
