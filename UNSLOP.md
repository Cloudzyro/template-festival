# Unslop pass (November 25, 2026)

Done with the unslop skill by Damir Sokolovsky (@heydamir), CC BY 4.0. Built new in wave 2, then audited against `references/signs.md` before shipping.

## Audit

Light slop on the first build. Signs found and fixed:

- Headline set at 80% width and 12ch, so it read cramped next to the poster (`src/pages/index.astro`)
- The poster's lake printed with multiply over the red hill, turning it near black instead of blue (`src/components/Poster.astro`)
- The poster taller than the first screen and cut at the bottom edge
- Footer link columns stretched to the row height, so links in short columns sat far apart (`src/layouts/Base.astro`)
- Condensed widths silently ignored because the default Fontsource import has no width axis
- "Add to order" wrapping to two lines inside its button on the free tier
- No other signs: no pills above the headline, no glows, gradients or blobs, no uppercase tracked labels, no emoji, weights 400 to 600, no looping motion

## Direction

- Product: the website for a three-day music and arts festival on a Michigan lake, for people deciding to go and planning their weekend
- Character: sunny, printed, a little homemade
- World: a screen-printed festival poster on lake-house paper; wristbands, a folded timetable, stage colors
- Moments: the poster in the hero, and the timetable where each stage's ink color fills the sets you saved
- Signature: three stage inks (red, blue, yellow) used only to mean a stage, everywhere it appears

## Changes

- Type: Bricolage Grotesque loaded with its width axis; poster names condensed at 75%, headings at 85%; headline widened to 13ch
- Color: lake printed flat in stage blue; red and yellow keep the overprint where sun meets hill; chrome stays paper and ink, buttons ink
- Layout: poster capped at 430px and its bill tightened so the whole first screen composes; tickets as horizontal stubs with a perforated price side instead of equal cards
- Details: footer columns align to the top; buttons never wrap; the free tier's action reads "Book"
- Motion: none beyond color changes and a short rise on the set dialog, off with reduced motion

screenshot-2: Timetable, Saturday, with three sets saved to my plan
screenshot-3: Tickets as ticket stubs
