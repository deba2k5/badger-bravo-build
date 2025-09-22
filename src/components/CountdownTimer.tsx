import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (): TimeLeft => {
  const targetDate = new Date('2025-10-04T00:00:00');
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  let days = 0, hours = 0, minutes = 0, seconds = 0;
  if (difference > 0) {
    days = Math.floor(difference / (1000 * 60 * 60 * 24));
    hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    minutes = Math.floor((difference / (1000 * 60)) % 60);
    seconds = Math.floor((difference / 1000) % 60);
  }
  return { days, hours, minutes, seconds };
};

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number): string => num.toString().padStart(2, '0');

  return (
    <div className="flex gap-4 md:gap-8 justify-center items-center my-8">
      <div className="text-center">
        <div className="text-5xl font-bold font-orbitron text-cyber-cyan">{formatNumber(timeLeft.days)}</div>
        <div className="text-xs font-tech text-foreground/80">DAYS</div>
      </div>
      <div className="text-3xl font-bold font-orbitron text-cyber-cyan">:</div>
      <div className="text-center">
        <div className="text-5xl font-bold font-orbitron text-cyber-cyan">{formatNumber(timeLeft.hours)}</div>
        <div className="text-xs font-tech text-foreground/80">HOURS</div>
      </div>
      <div className="text-3xl font-bold font-orbitron text-cyber-cyan">:</div>
      <div className="text-center">
        <div className="text-5xl font-bold font-orbitron text-cyber-cyan">{formatNumber(timeLeft.minutes)}</div>
        <div className="text-xs font-tech text-foreground/80">MINUTES</div>
      </div>
      <div className="text-3xl font-bold font-orbitron text-cyber-cyan">:</div>
      <div className="text-center">
        <div className="text-5xl font-bold font-orbitron text-cyber-cyan">{formatNumber(timeLeft.seconds)}</div>
        <div className="text-xs font-tech text-foreground/80">SECONDS</div>
      </div>
    </div>
  );
};
