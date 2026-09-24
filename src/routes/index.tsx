import { createFileRoute } from "@tanstack/react-router";

import heroForest from "@/assets/hero-forest.jpg";
import beachWalk from "@/assets/beach-walk.jpg";
import embrace from "@/assets/embrace.jpg";
import { Countdown } from "@/components/wedding/Countdown";
import { Reveal } from "@/components/wedding/Reveal";
import { Rsvp } from "@/components/wedding/Rsvp";
import { useScrollProgress } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tanuj & Prachi — 11 December 2026" },
      {
        name: "description",
        content:
          "Tanuj & Prachi are getting married on Friday, 11 December 2026 in Sonipat, Haryana. Join us — RSVP by 15 November 2026.",
      },
      { property: "og:title", content: "Tanuj & Prachi — 11 December 2026" },
      {
        property: "og:description",
        content:
          "Together with our families, we joyfully invite you to celebrate our wedding in Sonipat, Haryana.",
      },
    ],
  }),
  component: Invitation,
});

const CALENDAR_URL =
  "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" +
  encodeURIComponent("Tanuj & Prachi — Wedding") +
  "&dates=20261211/20261212&location=" +
  encodeURIComponent("Sonipat, Haryana, India") +
  "&details=" +
  encodeURIComponent("Together with our families, we joyfully invite you to celebrate our wedding.");

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Sonipat, Haryana, India");

function DateSection() {
  const { ref, progress } = useScrollProgress<HTMLElement>();
  const lines = ["Friday", "11", "December 2026"];

  return (
    <section ref={ref} className="relative h-[280vh] bg-cream">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <img
          src={beachWalk}
          alt="Couple walking along the shore"
          loading="lazy"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
          style={{ transform: `scale(${1.06 + progress * 0.14})` }}
        />
        <div className="absolute inset-0 bg-ink/35" />
        <div className="relative flex h-full flex-col items-center justify-center gap-2 px-6 text-center text-cream">
          {lines.map((line, i) => {
            const start = 0.12 + i * 0.22;
            const t = Math.min(1, Math.max(0, (progress - start) / 0.22));
            return (
              <span
                key={line}
                className={`font-serif italic leading-[1.05] ${
                  i === 1 ? "text-[22vw] sm:text-[14vw]" : "text-[11vw] sm:text-[6vw]"
                }`}
                style={{
                  opacity: t,
                  transform: `translateY(${(1 - t) * 24}px)`,
                  filter: `blur(${(1 - t) * 6}px)`,
                }}
              >
                {line}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Invitation() {
  return (
    <main className="bg-cream font-sans text-ink [padding-bottom:env(safe-area-inset-bottom)]">
      {/* 1 — Hero */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        <img
          src={heroForest}
          alt="Tanuj and Prachi in a forest"
          width={1536}
          height={1920}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink/70" />
        <div className="relative flex h-full flex-col items-center justify-end px-6 pb-[max(4rem,env(safe-area-inset-bottom))] text-center text-cream">
          <h1
            className="animate-rise font-serif text-[16vw] italic leading-[1] sm:text-[9vw]"
            style={{ animationDelay: "180ms" }}
          >
            Tanuj &amp; Prachi
          </h1>
          <p
            className="animate-rise mt-4 text-xs uppercase tracking-[0.34em] opacity-90"
            style={{ animationDelay: "620ms" }}
          >
            are getting married
          </p>
        </div>
      </section>

      {/* 2 — Invitation + countdown */}
      <section className="bg-butter px-6 py-24 text-center sm:py-32">
        <Reveal>
          <p className="mx-auto max-w-2xl font-serif text-2xl leading-relaxed sm:text-4xl">
            Together with our families, we joyfully invite you to celebrate our wedding.
          </p>
        </Reveal>
        <Reveal delay={160} className="mt-16">
          <Countdown />
        </Reveal>
      </section>

      {/* 3 — Scroll-written date */}
      <DateSection />

      {/* 4 — Portrait */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        <img
          src={embrace}
          alt="Tanuj and Prachi embracing"
          loading="lazy"
          width={1280}
          height={1600}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/65 to-transparent" />
        <div className="relative flex h-full items-end justify-center pb-24 text-center">
          <Reveal>
            <p className="font-serif text-4xl italic text-cream sm:text-6xl">
              Come celebrate with us
            </p>
          </Reveal>
        </div>
      </section>

      {/* 5 — Location */}
      <section className="bg-butter px-6 py-24 text-center sm:py-32">
        <Reveal>
          <span className="label-caps">The celebration</span>
          <h2 className="mt-6 font-serif text-6xl italic leading-none sm:text-8xl">Sonipat</h2>
          <p className="mt-4 font-serif text-xl opacity-75 sm:text-2xl">Haryana, India</p>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink/30 px-7 py-3 text-xs uppercase tracking-[0.2em] transition-colors duration-300 ease-soft hover:bg-ink hover:text-cream"
            >
              Add to calendar
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink/30 px-7 py-3 text-xs uppercase tracking-[0.2em] transition-colors duration-300 ease-soft hover:bg-ink hover:text-cream"
            >
              Open in Maps
            </a>
          </div>
        </Reveal>
      </section>

      {/* 6 — RSVP */}
      <section className="bg-cream px-6 py-24 text-center sm:py-32">
        <Reveal>
          <h2 className="font-serif text-5xl italic sm:text-7xl">RSVP</h2>
          <p className="mt-3 text-xs uppercase tracking-[0.24em] opacity-65">
            Kindly reply by 15 November 2026
          </p>
        </Reveal>
        <Reveal delay={140}>
          <Rsvp />
        </Reveal>
      </section>

      {/* 7 — Footer */}
      <footer className="bg-butter px-6 pb-[max(3rem,env(safe-area-inset-bottom))] pt-16 text-center">
        <div className="mx-auto h-px w-full max-w-md bg-ink/20" />
        <p className="mt-10 font-serif text-4xl italic sm:text-5xl">Tanuj &amp; Prachi</p>
        <p className="mt-4 text-[0.65rem] uppercase tracking-[0.24em] opacity-60">
          With love and blessings from both our families
        </p>
      </footer>
    </main>
  );
}
