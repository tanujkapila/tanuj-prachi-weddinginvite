import { useState, type FormEvent } from "react";

type Attending = "yes" | "no" | null;

export function Rsvp() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<Attending>(null);
  const [guests, setGuests] = useState("1");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim().slice(0, 100);
    if (!trimmed) {
      setStatus("Please add your name first.");
      return;
    }
    if (!attending) {
      setStatus("Please let us know if you can join.");
      return;
    }
    const accepts = attending === "yes";
    const subject = `RSVP: ${accepts ? "Joyfully accepts" : "Regretfully declines"} — ${trimmed}`;
    const body = [
      `Name: ${trimmed}`,
      `Attending: ${accepts ? "Joyfully accepts" : "Regretfully declines"}`,
      accepts ? `Number of guests: ${guests}` : null,
      `Message: ${message.trim().slice(0, 1000) || "—"}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:tanujkapila1041@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setStatus("Opening your email app — just hit send.");
  };

  const toggleBase =
    "flex-1 rounded-full border border-ink/25 px-5 py-3 text-xs uppercase tracking-[0.18em] transition-all duration-300 ease-soft";

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-10 w-full max-w-md space-y-6 text-left">
      <div className="space-y-2">
        <label htmlFor="rsvp-name" className="label-caps">
          Name
        </label>
        <input
          id="rsvp-name"
          value={name}
          maxLength={100}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-ink/20 bg-transparent px-4 py-3 font-serif text-lg text-ink outline-none transition-colors duration-300 placeholder:text-ink/35 focus:border-sage"
          placeholder="Your full name"
        />
      </div>

      <div className="space-y-2">
        <span className="label-caps">Will you join us?</span>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setAttending("yes")}
            className={`${toggleBase} ${attending === "yes" ? "bg-ink text-cream border-ink" : "text-ink hover:border-sage"}`}
          >
            Joyfully accepts
          </button>
          <button
            type="button"
            onClick={() => setAttending("no")}
            className={`${toggleBase} ${attending === "no" ? "bg-ink text-cream border-ink" : "text-ink hover:border-sage"}`}
          >
            Regretfully declines
          </button>
        </div>
      </div>

      {attending === "yes" && (
        <div className="animate-rise space-y-2">
          <label htmlFor="rsvp-guests" className="label-caps">
            Number of guests
          </label>
          <input
            id="rsvp-guests"
            type="number"
            min={1}
            max={20}
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full rounded-xl border border-ink/20 bg-transparent px-4 py-3 font-serif text-lg text-ink outline-none transition-colors duration-300 focus:border-sage"
          />
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="rsvp-message" className="label-caps">
          Message (optional)
        </label>
        <textarea
          id="rsvp-message"
          rows={3}
          maxLength={1000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-none rounded-xl border border-ink/20 bg-transparent px-4 py-3 font-serif text-lg text-ink outline-none transition-colors duration-300 placeholder:text-ink/35 focus:border-sage"
          placeholder="A note for us"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-ink px-6 py-4 text-xs uppercase tracking-[0.22em] text-cream transition-transform duration-300 ease-soft hover:scale-[1.015]"
      >
        Send RSVP
      </button>

      {status && <p className="text-center text-sm text-ink/60">{status}</p>}
    </form>
  );
}
