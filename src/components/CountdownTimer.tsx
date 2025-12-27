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
    { value: timeLeft.days, label: "Dagen" },
    { value: timeLeft.hours, label: "Uren" },
    { value: timeLeft.minutes, label: "Minuten" },
    { value: timeLeft.seconds, label: "Seconden" },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            De Kaaifeesten 2026
          </h2>
          <p className="text-secondary-foreground/80 text-lg">
            2 - 5 oktober 2026 • Eeklo
          </p>
        </div>

        <div className="flex justify-center gap-4 md:gap-8">
          {timeBlocks.map((block, index) => (
            <div
              key={block.label}
              className="flex flex-col items-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                  <span className="font-display text-3xl md:text-5xl font-bold text-secondary">
                    {String(block.value).padStart(2, "0")}
                  </span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-primary to-accent rounded-xl opacity-30 blur-md -z-10" />
              </div>
              <span className="mt-3 text-secondary-foreground/80 text-sm md:text-base font-medium uppercase tracking-wider">
                {block.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
