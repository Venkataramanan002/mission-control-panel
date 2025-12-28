import { useState } from 'react';
import { Language, getTranslation } from '@/lib/translations';
import { AlertTriangle, CheckCircle, Clock, Camera, FileText, Calendar } from 'lucide-react';

interface Screen3Props {
  lang: Language;
}

const districts = ['Bastar', 'Bilaspur', 'Durg', 'Raipur', 'Korba'];

const priorityIssues = [
  { id: 1, title: 'DBT payment backlog - 5,000 pending', severity: 'high' },
  { id: 2, title: 'Mobile tower downtime in Block A', severity: 'medium' },
  { id: 3, title: 'Document verification delays', severity: 'low' },
];

const slaData = [
  { task: 'Resolve payment failures', assignedTo: 'SDM Finance', dueDate: '26 Dec', daysLeft: -2, status: 'overdue' },
  { task: 'Tower restoration', assignedTo: 'IT Cell', dueDate: '28 Dec', daysLeft: 0, status: 'due' },
  { task: 'Beneficiary verification', assignedTo: 'Block Officer', dueDate: '30 Dec', daysLeft: 2, status: 'ontrack' },
  { task: 'Weekly report submission', assignedTo: 'Statistics', dueDate: '01 Jan', daysLeft: 4, status: 'ontrack' },
];

export const Screen3 = ({ lang }: Screen3Props) => {
  const [selectedDistrict, setSelectedDistrict] = useState('Bastar');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center gap-4">
        <h2 className="font-display text-lg font-semibold text-foreground tracking-wide">
          {getTranslation(lang, 'districtView')}
        </h2>
        <select 
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          className="input-glass w-auto"
        >
          {districts.map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="w-3 h-3" />
          <span>28 Dec 2024</span>
        </div>
        <span className="rag-pill rag-red">Critical</span>
      </div>

      {/* Snapshot KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-card p-4">
          <div className="text-[10px] font-display tracking-wider text-muted-foreground uppercase mb-2">
            Pending Tasks
          </div>
          <div className="text-3xl font-bold text-destructive">12</div>
        </div>
        <div className="glass-card p-4">
          <div className="text-[10px] font-display tracking-wider text-muted-foreground uppercase mb-2">
            SLA Breach
          </div>
          <div className="text-3xl font-bold text-warning">3</div>
        </div>
        <div className="glass-card p-4">
          <div className="text-[10px] font-display tracking-wider text-muted-foreground uppercase mb-2">
            Resolved Today
          </div>
          <div className="text-3xl font-bold text-success">8</div>
        </div>
        <div className="glass-card p-4">
          <div className="text-[10px] font-display tracking-wider text-muted-foreground uppercase mb-2">
            Active Schemes
          </div>
          <div className="text-3xl font-bold text-foreground">24</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Priority Issues */}
          <div className="glass-card p-4">
            <h3 className="font-display text-sm font-semibold tracking-wider text-foreground mb-4">
              {getTranslation(lang, 'priorityIssues')}
            </h3>
            <div className="space-y-3">
              {priorityIssues.map((issue) => (
                <div key={issue.id} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    {issue.severity === 'high' && <AlertTriangle className="w-4 h-4 text-destructive" />}
                    {issue.severity === 'medium' && <Clock className="w-4 h-4 text-warning" />}
                    {issue.severity === 'low' && <CheckCircle className="w-4 h-4 text-success" />}
                    <span className="text-sm text-foreground">{issue.title}</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="btn-primary text-xs py-1 px-3">
                      {getTranslation(lang, 'createTask')}
                    </button>
                    <button className="btn-secondary text-xs py-1 px-3">
                      {getTranslation(lang, 'reviewed')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SLA Tracker */}
          <div className="glass-card p-4">
            <h3 className="font-display text-sm font-semibold tracking-wider text-foreground mb-4">
              {getTranslation(lang, 'slaTracker')}
            </h3>
            <div className="overflow-x-auto">
              <table className="table-glass">
                <thead>
                  <tr>
                    <th>{getTranslation(lang, 'taskName')}</th>
                    <th>{getTranslation(lang, 'assignedTo')}</th>
                    <th>{getTranslation(lang, 'dueDate')}</th>
                    <th>{getTranslation(lang, 'daysLeft')}</th>
                    <th>{getTranslation(lang, 'status')}</th>
                  </tr>
                </thead>
                <tbody>
                  {slaData.map((row, i) => (
                    <tr key={i} className={row.status === 'overdue' ? 'bg-destructive/10' : ''}>
                      <td className="font-medium">{row.task}</td>
                      <td>{row.assignedTo}</td>
                      <td>{row.dueDate}</td>
                      <td className={row.daysLeft < 0 ? 'text-destructive font-bold' : row.daysLeft === 0 ? 'text-warning' : ''}>
                        {row.daysLeft < 0 ? `${Math.abs(row.daysLeft)} ${getTranslation(lang, 'overdue')}` : row.daysLeft}
                      </td>
                      <td>
                        <span className={`rag-pill ${row.status === 'overdue' ? 'rag-red' : row.status === 'due' ? 'rag-yellow' : 'rag-green'}`}>
                          {row.status === 'overdue' ? getTranslation(lang, 'overdue') : row.status === 'due' ? 'Due' : getTranslation(lang, 'onTrack')}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Task Assignment Form */}
          <div className="glass-card p-4">
            <h3 className="font-display text-xs font-semibold tracking-wider text-foreground mb-4">
              {getTranslation(lang, 'taskAssignment')}
            </h3>
            <div className="space-y-3">
              <div>
                <label className="text-[10px] text-muted-foreground uppercase tracking-wider block mb-1">
                  {getTranslation(lang, 'taskDescription')}
                </label>
                <textarea className="input-glass h-16 resize-none" placeholder="Enter task details..." />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] text-muted-foreground uppercase tracking-wider block mb-1">
                    {getTranslation(lang, 'owner')}
                  </label>
                  <input type="text" className="input-glass" placeholder="Assign to..." />
                </div>
                <div>
                  <label className="text-[10px] text-muted-foreground uppercase tracking-wider block mb-1">
                    {getTranslation(lang, 'dueDate')}
                  </label>
                  <input type="date" className="input-glass" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] text-muted-foreground uppercase tracking-wider block mb-1">
                    {getTranslation(lang, 'sla')}
                  </label>
                  <select className="input-glass">
                    <option>24 hours</option>
                    <option>48 hours</option>
                    <option>72 hours</option>
                    <option>1 week</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] text-muted-foreground uppercase tracking-wider block mb-1">
                    {getTranslation(lang, 'escalation')}
                  </label>
                  <select className="input-glass">
                    <option>Auto</option>
                    <option>Manual</option>
                  </select>
                </div>
              </div>
              <button className="btn-primary w-full mt-2">
                {getTranslation(lang, 'assignTask')}
              </button>
            </div>
          </div>

          {/* Evidence */}
          <div className="glass-card p-4">
            <h3 className="font-display text-xs font-semibold tracking-wider text-foreground mb-3">
              {getTranslation(lang, 'evidence')}
            </h3>
            <div className="text-xs text-muted-foreground mb-3">
              {getTranslation(lang, 'photosNotesLogs')}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="aspect-square bg-secondary/50 rounded-lg flex items-center justify-center border border-border border-dashed">
                <Camera className="w-6 h-6 text-muted-foreground" />
              </div>
              <div className="aspect-square bg-secondary/50 rounded-lg flex items-center justify-center border border-border border-dashed">
                <FileText className="w-6 h-6 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
