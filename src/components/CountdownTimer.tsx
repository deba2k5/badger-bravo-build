import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 39,
    hours: 8,
    minutes: 21,
    seconds: 13,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  const timeUnits = [
    { value: timeLeft.days, label: 'DAYS' },
    { value: timeLeft.hours, label: 'HOURS' },
    { value: timeLeft.minutes, label: 'MINUTES' },
    { value: timeLeft.seconds, label: 'SECONDS' },
  ];

  return (
    <div className="flex gap-4 md:gap-8 justify-center items-center my-8">
      {timeUnits.map((unit, index) => (
        <div key={index} className="text-center">
          <div className="relative">
            <div className="bg-terminal-amber text-background text-2xl md:text-4xl lg:text-5xl font-bold font-mono px-3 md:px-6 py-2 md:py-4 border-2 border-terminal-amber shadow-[0_0_20px_hsl(var(--terminal-amber)/0.5)] neon-glow">
              {formatNumber(unit.value)}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-terminal-amber/20 to-transparent pointer-events-none"></div>
          </div>
          <div className="text-cyber-cyan text-xs md:text-sm font-mono mt-2 tracking-wider">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
};