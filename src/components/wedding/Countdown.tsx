import { useEffect, useState } from "react";

const TARGET = new Date("2026-12-11T00:00:00+05:30").getTime();

function parts(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 px-1">
      <div className="relative h-[1.15em] w-full overflow-hidden text-center font-serif text-4xl leading-[1.15em] tabular-nums sm:text-5xl md:text-6xl">
        <span key={value} className="block animate-number-in">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="label-caps text-[0.6rem] sm:text-xs">{label}</span>
    </div>
  );
}

export function Countdown() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const { days, hours, minutes, seconds } = parts(TARGET - now);

  return (
    <div className="mx-auto grid w-full max-w-xl grid-cols-4 divide-x divide-ink/15">
      <Unit value={days} label="Days" />
      <Unit value={hours} label="Hours" />
      <Unit value={minutes} label="Minutes" />
      <Unit value={seconds} label="Seconds" />
    </div>
  );
}
