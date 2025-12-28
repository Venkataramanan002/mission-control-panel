import { Language, getTranslation } from '@/lib/translations';
import { TrendingUp, TrendingDown, AlertCircle, Users, Clock, MessageSquare } from 'lucide-react';

interface Screen2Props {
  lang: Language;
}

const tableData = [
  { district: 'Raipur', target: '2,50,000', achieved: '2,45,000', gap: '5,000', status: 'green' },
  { district: 'Bilaspur', target: '1,80,000', achieved: '1,65,000', gap: '15,000', status: 'yellow' },
  { district: 'Durg', target: '1,50,000', achieved: '1,48,000', gap: '2,000', status: 'green' },
  { district: 'Bastar', target: '1,20,000', achieved: '95,000', gap: '25,000', status: 'red' },
  { district: 'Korba', target: '90,000', achieved: '88,500', gap: '1,500', status: 'green' },
];

const topPerformers = ['Raipur', 'Durg', 'Korba'];
const bottomPerformers = ['Bastar', 'Surguja', 'Jashpur'];

const complaintThemes = [
  { theme: 'Payment Delays', count: 1240 },
  { theme: 'Eligibility Issues', count: 890 },
  { theme: 'Document Rejection', count: 567 },
];

const directives = [
  { id: 1, text: 'Expedite Bastar disbursements by Dec 31', date: '24 Dec' },
  { id: 2, text: 'Weekly review of bottom 5 districts', date: '22 Dec' },
];

export const Screen2 = ({ lang }: Screen2Props) => {
  return (
    <div className="space-y-6">
      {/* Scheme Header */}
      <div className="flex flex-wrap items-center gap-4">
        <h2 className="font-display text-lg font-semibold text-foreground tracking-wide">
          {getTranslation(lang, 'schemeTitle')}
        </h2>
        <span className="rag-pill rag-green">On Track</span>
      </div>

      {/* KPI Tiles */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-card p-4">
          <div className="text-[10px] font-display tracking-wider text-muted-foreground uppercase mb-2">
            {getTranslation(lang, 'outcomeScore')}
          </div>
          <div className="text-3xl font-bold text-success">87%</div>
          <div className="flex items-center gap-1 text-xs text-success mt-1">
            <TrendingUp className="w-3 h-3" /> +3.2%
          </div>
        </div>
        <div className="glass-card p-4">
          <div className="text-[10px] font-display tracking-wider text-muted-foreground uppercase mb-2">
            {getTranslation(lang, 'coverageVsTarget')}
          </div>
          <div className="text-3xl font-bold text-foreground">94.2%</div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
            <Users className="w-3 h-3" /> 7.8L / 8.3L
          </div>
        </div>
        <div className="glass-card p-4">
          <div className="text-[10px] font-display tracking-wider text-muted-foreground uppercase mb-2">
            {getTranslation(lang, 'deliveryLag')}
          </div>
          <div className="text-3xl font-bold text-warning">2.1</div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
            <Clock className="w-3 h-3" /> days avg
          </div>
        </div>
        <div className="glass-card p-4">
          <div className="text-[10px] font-display tracking-wider text-muted-foreground uppercase mb-2">
            {getTranslation(lang, 'complaints')}
          </div>
          <div className="text-3xl font-bold text-destructive">2,697</div>
          <div className="flex items-center gap-1 text-xs text-destructive mt-1">
            <TrendingUp className="w-3 h-3" /> +12%
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Target vs Achieved Table */}
        <div className="lg:col-span-2 glass-card p-4">
          <h3 className="font-display text-sm font-semibold tracking-wider text-foreground mb-4">
            {getTranslation(lang, 'targetVsAchieved')}
          </h3>
          <div className="overflow-x-auto">
            <table className="table-glass">
              <thead>
                <tr>
                  <th>{getTranslation(lang, 'districtName')}</th>
                  <th>{getTranslation(lang, 'target')}</th>
                  <th>{getTranslation(lang, 'achieved')}</th>
                  <th>{getTranslation(lang, 'gap')}</th>
                  <th>{getTranslation(lang, 'status')}</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr key={i}>
                    <td className="font-medium">{row.district}</td>
                    <td>{row.target}</td>
                    <td>{row.achieved}</td>
                    <td className={row.status === 'red' ? 'text-destructive' : ''}>{row.gap}</td>
                    <td>
                      <span className={`rag-pill rag-${row.status}`}>
                        {row.status === 'green' ? '●' : row.status === 'yellow' ? '●' : '●'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Side Panels */}
        <div className="space-y-4">
          {/* District Outliers */}
          <div className="glass-card p-4">
            <h3 className="font-display text-xs font-semibold tracking-wider text-foreground mb-3">
              {getTranslation(lang, 'districtOutliers')}
            </h3>
            <div className="space-y-3">
              <div>
                <div className="text-[10px] text-success font-medium mb-1">{getTranslation(lang, 'topPerformers')}</div>
                {topPerformers.map((d, i) => (
                  <div key={i} className="text-xs text-foreground">{i + 1}. {d}</div>
                ))}
              </div>
              <div>
                <div className="text-[10px] text-destructive font-medium mb-1">{getTranslation(lang, 'bottomPerformers')}</div>
                {bottomPerformers.map((d, i) => (
                  <div key={i} className="text-xs text-foreground">{i + 1}. {d}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Complaint Themes */}
          <div className="glass-card p-4">
            <h3 className="font-display text-xs font-semibold tracking-wider text-foreground mb-3">
              {getTranslation(lang, 'complaintThemes')}
            </h3>
            {complaintThemes.map((c, i) => (
              <div key={i} className="flex justify-between items-center text-xs mb-2">
                <span className="text-foreground">{c.theme}</span>
                <span className="text-muted-foreground">{c.count}</span>
              </div>
            ))}
          </div>

          {/* Fund Flow */}
          <div className="glass-card p-4">
            <h3 className="font-display text-xs font-semibold tracking-wider text-foreground mb-3">
              {getTranslation(lang, 'fundFlow')}
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">{getTranslation(lang, 'released')}</span>
                <span className="text-foreground font-medium">₹1,250 Cr</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">{getTranslation(lang, 'utilized')}</span>
                <span className="text-success font-medium">₹1,180 Cr</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden mt-2">
                <div className="h-full bg-success rounded-full" style={{ width: '94%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CM Directives */}
      <div className="glass-card p-4">
        <h3 className="font-display text-sm font-semibold tracking-wider text-foreground mb-4">
          {getTranslation(lang, 'cmDirectives')}
        </h3>
        <div className="flex flex-wrap gap-4 mb-4">
          <input 
            type="text" 
            placeholder={getTranslation(lang, 'instructionPlaceholder')}
            className="input-glass flex-1 min-w-[200px]"
          />
          <button className="btn-primary">
            {getTranslation(lang, 'submit')}
          </button>
        </div>
        <div className="space-y-2">
          {directives.map((d) => (
            <div key={d.id} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
              <span className="text-sm text-foreground">{d.text}</span>
              <span className="text-xs text-muted-foreground">{d.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
