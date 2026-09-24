import { useState } from "react";

/**
 * Full-screen sealed envelope that opens on tap and reveals the invitation.
 * Timeline once tapped: seal breaks (0–450ms) → flap swings open (400–1400ms)
 * → invitation card rises out of the pocket (1100–2100ms) → overlay fades (2100–2800ms).
 */
export function Envelope({ onOpen }: { onOpen: () => void }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (open) return;
    setOpen(true);
    window.setTimeout(onOpen, 2750);
  };

  return (
    <div
      aria-hidden={open}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream px-8 transition-opacity duration-700 ease-soft"
      style={{
        opacity: open ? 0 : 1,
        transitionDelay: open ? "2100ms" : "0ms",
        pointerEvents: open ? "none" : "auto",
      }}
    >
      {/* Whisper of a heading */}
      <p
        className="animate-rise mb-10 text-[10px] uppercase tracking-[0.42em] text-ink/55"
        style={{ animationDelay: "500ms" }}
      >
        You are invited
      </p>

      <button
        type="button"
        onClick={handleOpen}
        aria-label="Open the invitation"
        className="group relative block w-full max-w-[300px] cursor-pointer outline-none sm:max-w-[340px]"
      >
        <div className="relative aspect-[3/4] [perspective:1400px]">
          {/* Invitation card tucked inside the pocket */}
          <div
            className="absolute inset-x-5 bottom-4 top-4 z-0 flex flex-col items-center justify-center rounded-[2px] border border-ink/10 bg-cream px-6 text-center shadow-[0_18px_40px_-18px_rgba(34,57,43,0.35)] transition-transform duration-1000 ease-soft"
            style={{
              transform: open ? "translateY(-46%)" : "translateY(0)",
              transitionDelay: open ? "1050ms" : "0ms",
            }}
          >
            <span className="label-caps text-ink/50">The wedding of</span>
            <span className="mt-3 font-serif text-3xl italic leading-tight text-ink">
              Tanuj
              <br />
              &amp; Prachi
            </span>
            <span className="mx-auto mt-4 block h-px w-10 bg-sage/50" />
            <span className="mt-4 text-[10px] uppercase tracking-[0.3em] text-ink/70">
              11 · 12 · 2026
            </span>
          </div>

          {/* Envelope body (front pocket) */}
          <div className="absolute inset-0 z-10 rounded-[3px] border border-ink/10 bg-butter shadow-[0_30px_60px_-25px_rgba(34,57,43,0.4)] transition-transform duration-700 ease-soft [transform-origin:center_78%] group-active:scale-[0.99]">
            {/* pocket side folds */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                background:
                  "linear-gradient(to top right, transparent 49.4%, var(--color-ink) 50%, transparent 50.6%), linear-gradient(to top left, transparent 49.4%, var(--color-ink) 50%, transparent 50.6%)",
              }}
            />
            {/* soft inner shading at pocket top edge */}
            <div className="absolute inset-x-0 top-1/3 h-px bg-ink/10" />
          </div>

          {/* Flap */}
          <div
            className="absolute left-0 top-0 z-20 h-[46%] w-full transition-transform duration-[950ms] ease-soft [backface-visibility:hidden] [transform-origin:top_center]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              background: "linear-gradient(to bottom, var(--color-butter-deep, #efe0a0), var(--color-butter))",
              transform: open ? "rotateX(-168deg)" : "rotateX(0deg)",
              transitionDelay: open ? "380ms" : "0ms",
              boxShadow: open ? "none" : "0 6px 18px -8px rgba(34,57,43,0.35)",
            }}
          />

          {/* Wax seal */}
          <div
            className="absolute left-1/2 top-[46%] z-30 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-soft"
            style={{
              opacity: open ? 0 : 1,
              transform: `translate(-50%, -50%) scale(${open ? 1.35 : 1}) rotate(${open ? 8 : 0}deg)`,
            }}
          >
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-ink shadow-[0_10px_22px_-6px_rgba(34,57,43,0.6),inset_0_2px_4px_rgba(251,248,238,0.25)] sm:h-24 sm:w-24">
              {/* organic wax rim */}
              <div
                className="absolute -inset-1 rounded-full border-2 border-ink opacity-70"
                style={{
                  clipPath:
                    "polygon(50% 0%, 78% 4%, 96% 22%, 100% 50%, 95% 79%, 76% 97%, 48% 100%, 22% 94%, 4% 74%, 0% 46%, 6% 20%, 26% 3%)",
                }}
              />
              <div className="absolute inset-2 rounded-full border border-cream/25" />
              <span className="mt-[-2px] select-none font-serif text-xl italic text-cream sm:text-2xl">
                T&nbsp;&amp;&nbsp;P
              </span>
            </div>
          </div>
        </div>

        {/* Hint */}
        <span
          className="mt-10 block text-center text-[10px] uppercase tracking-[0.34em] text-sage transition-opacity duration-300"
          style={{ opacity: open ? 0 : 1 }}
        >
          Tap to open
        </span>
      </button>
    </div>
  );
}
