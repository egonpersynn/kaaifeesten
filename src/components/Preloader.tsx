import { useState, useEffect } from 'react';
import logo from '@/assets/kaaifeesten-logo.png';

interface PreloaderProps { onComplete: () => void }
export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const start = performance.now();
    let frame = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = (now: number) => {
      const value = Math.min(100, (now - start) / 16);
      setProgress(value);
      if (value < 100) frame = requestAnimationFrame(tick);
      else timer = setTimeout(onComplete, 250);
    };
    frame = requestAnimationFrame(tick);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { cancelAnimationFrame(frame); clearTimeout(timer); document.body.style.overflow = previous; };
  }, [onComplete]);
  return <div className="preloader fixed inset-0 z-[9999] bg-background text-foreground" role="status" aria-label="De Kaai wordt geopend">
    <span className="loader-corner eyebrow">Eeklo / sinds 1927</span>
    <div className="loader-center">
      <div className="relative w-64 h-24">
        <img src={logo} alt="Kaaifeesten" className="absolute inset-0 w-full h-full object-contain brightness-0 opacity-50" />
        <div className="absolute inset-0" style={{ clipPath: `inset(${100-progress}% 0 0 0)` }}><img src={logo} alt="" className="w-full h-full object-contain brightness-0" /></div>
      </div>
      <p className="loader-tagline">Even landen. Dan beleven.</p>
      <div className="loader-meter"><span className="eyebrow text-primary">Tot op de Kaai</span><span className="tabular-nums text-primary">{Math.round(progress)}%</span></div>
      <div className="h-1 w-64 bg-muted overflow-hidden"><div className="h-full bg-primary" style={{ width: `${progress}%` }} /></div>
    </div>
    <div className="loader-bottom"><span>Kaaifeesten</span><span>Kaai Festival</span><span>Rommelmarkt</span></div>
  </div>;
}
