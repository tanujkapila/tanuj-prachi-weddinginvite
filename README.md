# Tanuj & Prachi Wedding

Build a single-page wedding invitation website for Tanuj & Prachi, wedding on Friday, 11 December 2026 in Sonipat, Haryana, India. Modern, elegant, minimal aesthetic (no ornate/traditional Indian motifs), English only. Color palette: soft cream background (#FBF8EE), pale butter-yellow section background (#F7EBB8), deep forest-green ink text (#22392B), sage green accent (#6F8F68). Typography: an elegant serif with italic (like Cormorant Garamond) for names/headings, a clean geometric sans (like Jost) for small caps labels.

Sections, top to bottom:
1. Hero: full-bleed photo of the couple in a green forest, dark gradient overlay at top and bottom for text legibility. Large italic serif "Tanuj & Prachi" title, "are getting married" subtitle beneath, gentle fade/rise-in animation on load.
2. Invitation blurb on butter-yellow background: "Together with our families, we joyfully invite you to celebrate our wedding." Below it, a live countdown timer (days / hours / minutes / seconds) counting down to 11 Dec 2026, with a 4-column layout and thin dividers, numbers cross-fading smoothly each second.
3. A pinned/sticky full-height photo (couple walking on a beach) where the wedding date "Friday / 11 / December 2026" writes itself onto the screen as the user scrolls through this section (scroll-linked reveal), image slowly zooms.
4. A full-bleed portrait photo of the couple with the caption "Come celebrate with us" fading in.
5. Location section on butter-yellow background: "Sonipat" in large italic serif, "Haryana, India" beneath, two pill buttons: "Add to calendar" (google calendar link for 11 Dec 2026 Sonipat) and "Open in Maps" (google maps search for Sonipat Haryana India). No physical address, only the town name.
6. RSVP section on cream background: heading "RSVP", subtext "Kindly reply by 15 November 2026", then a form with: Name (text input), an attending toggle with two buttons "Joyfully accepts" / "Regretfully declines" (selected state filled dark green), a "Number of guests" field that only shows when attending is accepted, an optional "Message" textarea, and a "Send RSVP" submit button. On submit, since there is no backend yet, open the user's email client via a mailto: link to tanujkapila1041@gmail.com with the subject "RSVP: Joyfully accepts — {name}" or "RSVP: Regretfully declines — {name}" and a body listing name, attending, guests, and message. Show a small status line "Opening your email app — just hit send."
7. Footer on butter-yellow background: thin horizontal rule, italic "Tanuj & Prachi" signature, small text "With love and blessings from both our families".

Motion/interaction style should feel like Apple's product pages: sections gently fade and rise up into view the first time they're scrolled into view (IntersectionObserver-based, one-time, staggered), photo parallax should be smooth/damped (not 1:1 with scroll), easing curves should be soft "ease-out" cubic-beziers, not linear. Fully responsive, mobile-first (this will mostly be viewed on phones), with safe-area padding for iOS notches. For the three photos, use tasteful royalty-free stock photos of a couple in a forest, a couple on a beach, and a couple embracing outdoors as placeholders — I will replace them with the real engagement photos afterward.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://tanuj-prachi-weddinginvite.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/52555c2d-1d29-4e33-a381-3659c6839744).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
