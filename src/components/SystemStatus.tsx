import { useEffect, useState } from 'react';

interface StatusMetric {
  label: string;
  value: string | number;
  unit?: string;
  status: 'good' | 'warning' | 'error' | 'info';
}

export const SystemStatus = () => {
  const [metrics, setMetrics] = useState<StatusMetric[]>([
    { label: 'PWR', value: 86, unit: '%', status: 'good' },
    { label: 'SIG', value: -48, unit: 'dBm', status: 'warning' },
    { label: 'LAT', value: 59, unit: 'ms', status: 'info' },
    { label: 'ERR', value: 2, unit: '', status: 'error' },
  ]);

  const [activeUsers, setActiveUsers] = useState(2847);
  const [systemStatus, setSystemStatus] = useState<string[]>([
    'AI_ZENERA.exe',
    'INITOK',
    'LOADOK',
    'CONN...',
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 3) - 1);
      
      // Occasionally update metrics
      if (Math.random() < 0.1) {
        setMetrics(prev => prev.map(metric => ({
          ...metric,
          value: typeof metric.value === 'number' 
            ? metric.value + (Math.random() - 0.5) * 2
            : metric.value
        })));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'good': return 'status-good';
      case 'warning': return 'status-warning';
      case 'error': return 'status-error';
      case 'info': return 'status-info';
      default: return 'text-foreground';
    }
  };

  return (
    <>
      {/* Top Left Status Panel */}
      <div className="fixed top-4 left-4 z-50 bg-card/80 backdrop-blur-sm border border-cyber-cyan/30 p-3 font-mono text-xs space-y-1">
        {metrics.map((metric, index) => (
          <div key={index} className="flex justify-between items-center gap-4">
            <span className="text-muted-foreground">{metric.label}:</span>
            <span className={getStatusClass(metric.status)}>
              {metric.value}{metric.unit}
            </span>
          </div>
        ))}
      </div>

      {/* Top Right User Count */}
      <div className="fixed top-4 right-4 z-50 bg-card/80 backdrop-blur-sm border border-cyber-cyan/30 p-3 font-mono text-xs">
        <div className="text-center space-y-1">
          <div className="text-muted-foreground">USERS</div>
          <div className="text-cyber-cyan text-lg font-bold">{activeUsers.toLocaleString()}</div>
          <div className="text-terminal-green">ACTIVE</div>
        </div>
      </div>

      {/* Top System Status */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-card/80 backdrop-blur-sm border border-cyber-cyan/30 p-2 font-mono text-xs">
        <div className="text-center text-cyber-cyan">
          {systemStatus.map((status, index) => (
            <span key={index} className="mr-4">
              {status}
              {index === systemStatus.length - 1 && <span className="animate-terminal-blink">_</span>}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Right System Info */}
      <div className="fixed bottom-4 right-4 z-50 bg-card/80 backdrop-blur-sm border border-cyber-cyan/30 p-3 font-mono text-xs space-y-1">
        <div className="text-muted-foreground">AI_ZENERA.exe</div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">INIT</span>
          <span className="status-good">OK</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">LOAD</span>
          <span className="status-good">OK</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">CONN</span>
          <span className="status-info">...</span>
        </div>
      </div>
    </>
  );
};