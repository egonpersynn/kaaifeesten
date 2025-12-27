import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const targetDate = new Date("2026-10-02T19:00:00");

  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { value: timeLeft.days, label: "D" },
    { value: timeLeft.hours, label: "H" },
    { value: timeLeft.minutes, label: "M" },
    { value: timeLeft.seconds, label: "S" },
  ];

  return (
    <div className="flex justify-center items-baseline gap-2 md:gap-4">
      {timeBlocks.map((block, index) => (
        <div key={block.label} className="flex items-baseline">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-background tracking-tighter tabular-nums">
              {String(block.value).padStart(2, "0")}
            </span>
            <span className="text-sm md:text-base text-background/50 font-light">
              {block.label}
            </span>
          </div>
          {index < timeBlocks.length - 1 && (
            <span className="text-2xl md:text-4xl text-background/30 ml-2 md:ml-4 font-light">:</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;