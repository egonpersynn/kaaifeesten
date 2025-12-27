import { useState, useEffect } from 'react';
import logo from '@/assets/kaaifeesten-logo.png';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 20; // Update every 20ms
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300); // Small delay before hiding
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-8">
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          {/* Base logo at 50% opacity */}
          <img
            src={logo}
            alt="Kaaifeesten Logo"
            className="absolute inset-0 w-full h-full object-contain brightness-0 opacity-50"
          />
          {/* Overlay logo that fills from bottom to top */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ 
              clipPath: `inset(${100 - progress}% 0 0 0)` 
            }}
          >
            <img
              src={logo}
              alt="Kaaifeesten Logo"
              className="w-full h-full object-contain brightness-0"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl md:text-3xl font-bold text-foreground tabular-nums">
            {Math.round(progress)}%
          </span>
          <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
