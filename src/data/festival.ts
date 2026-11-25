// Everything on the site comes from this file. Change the text, lineup, set times,
// tickets and FAQ here; the pages update themselves.

export const festival = {
  name: "Kettle Lake",
  fullName: "Kettle Lake Festival",
  edition: "2027",
  tagline: "Three days of music and art on the lakeshore",
  description:
    "Kettle Lake Festival: three days of music, art and swimming on the shore of Kettle Lake, Michigan. July 23 to 25, 2027. Lineup, timetable, tickets, camping and travel.",
  dates: "July 23 to 25, 2027",
  place: "Pellston Meadows, Kettle Lake, Michigan",
  // Where every "Buy tickets" button goes: Eventbrite, Dice, a Stripe or Paddle payment link...
  ticketUrl: "https://tickets.example.com/kettle-lake-2027",
  contactEmail: "hello@kettlelake.example.com",
  social: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Bluesky", href: "https://bsky.app/" },
  ],
};

export const nav = [
  { label: "Lineup", href: "/#lineup" },
  { label: "Timetable", href: "/timetable/" },
  { label: "Tickets", href: "/#tickets" },
  { label: "Getting there", href: "/#travel" },
  { label: "Camping", href: "/#camping" },
  { label: "FAQ", href: "/#faq" },
];

export type DayId = "fri" | "sat" | "sun";

export const days: { id: DayId; label: string; date: string; gates: string; first: string; last: string }[] = [
  { id: "fri", label: "Friday", date: "July 23", gates: "Gates 2:00 pm", first: "15:00", last: "23:30" },
  { id: "sat", label: "Saturday", date: "July 24", gates: "Gates 11:00 am", first: "12:00", last: "23:30" },
  { id: "sun", label: "Sunday", date: "July 25", gates: "Gates 11:00 am", first: "12:00", last: "22:30" },
];

// Each stage gets one ink color, used on the poster, the lineup and the timetable.
export const stages = [
  { id: "meadow", name: "Meadow Stage", note: "Main stage, open field", color: "#e0472b" },
  { id: "pines", name: "Pines Tent", note: "Covered, under the white pines", color: "#2f5bd3" },
  { id: "boathouse", name: "Boathouse", note: "Small room on the water, 300 people", color: "#d39a12" },
] as const;

export type StageId = (typeof stages)[number]["id"];

export type Artist = {
  slug: string;
  name: string;
  from: string;
  genre: string;
  bio: string;
};

// Fictional artists. Replace with your own.
export const artists: Artist[] = [
  { slug: "the-marrow-lights", name: "The Marrow Lights", from: "Detroit, MI", genre: "Indie rock", bio: "A five-piece built on two drummers and a horn section, back with a record made in a church hall." },
  { slug: "june-okonkwo", name: "June Okonkwo", from: "Chicago, IL", genre: "Soul", bio: "Big-voiced soul with a string trio. Her second album was recorded live in one afternoon." },
  { slug: "halfmoon-orchard", name: "Halfmoon Orchard", from: "Asheville, NC", genre: "Folk", bio: "Close harmonies, banjo and a pump organ they carry to every show." },
  { slug: "static-harbor", name: "Static Harbor", from: "Cleveland, OH", genre: "Electronic", bio: "Modular synths and live drums, playing the Pines Tent's last set of the weekend." },
  { slug: "ruthie-vance", name: "Ruthie Vance", from: "Nashville, TN", genre: "Country", bio: "Plainspoken songs about small towns, played with a pedal steel and no click track." },
  { slug: "copper-stills", name: "Copper Stills", from: "Milwaukee, WI", genre: "Brass band", bio: "Twelve players, no amplifiers, and usually a parade through the campsite after." },
  { slug: "lake-effect", name: "Lake Effect", from: "Buffalo, NY", genre: "Shoegaze", bio: "Loud, slow and very pretty. Bring earplugs." },
  { slug: "mira-castellanos", name: "Mira Castellanos", from: "Tucson, AZ", genre: "Cumbia", bio: "Accordion-led cumbia that turns any field into a dance floor." },
  { slug: "northbound-quiet", name: "Northbound Quiet", from: "Duluth, MN", genre: "Ambient", bio: "Long pieces for guitar, tape loops and the sound of the lake." },
  { slug: "the-paper-saints", name: "The Paper Saints", from: "Louisville, KY", genre: "Garage rock", bio: "Short songs, fast sets, a singer who ends up in the crowd." },
  { slug: "dellwood", name: "Dellwood", from: "Grand Rapids, MI", genre: "Indie pop", bio: "Hometown favorites with a new record about the summer they turned thirty." },
  { slug: "ade-bankole-trio", name: "Ade Bankole Trio", from: "Philadelphia, PA", genre: "Jazz", bio: "Piano trio playing standards and their own tunes, with plenty of room to stretch." },
  { slug: "velvet-county", name: "Velvet County", from: "Austin, TX", genre: "Psych rock", bio: "Fuzz, Farfisa organ and twenty-minute jams that somehow stay danceable." },
  { slug: "sister-ferns", name: "Sister Ferns", from: "Portland, ME", genre: "Folk pop", bio: "Two sisters, one cello and songs about leaving home." },
  { slug: "kilowatt-choir", name: "Kilowatt Choir", from: "Pittsburgh, PA", genre: "Electronic", bio: "A forty-voice choir over house beats. Saturday's late set at the Pines." },
  { slug: "low-orchard-band", name: "Low Orchard Band", from: "Traverse City, MI", genre: "Bluegrass", bio: "Local pickers who have opened the Meadow Stage every Sunday since the first year." },
  { slug: "nadia-firth", name: "Nadia Firth", from: "Toronto, ON", genre: "Singer-songwriter", bio: "Quiet songs for a quiet room. The Boathouse was made for her." },
  { slug: "the-tin-roofs", name: "The Tin Roofs", from: "Memphis, TN", genre: "R&B", bio: "A tight seven-piece with a horn line and a lot of choreography." },
  { slug: "graywater", name: "Graywater", from: "Minneapolis, MN", genre: "Post-punk", bio: "Angular guitars and a bass player who never stops moving." },
  { slug: "solstice-drum-circle", name: "Solstice Drum Circle", from: "Kettle Lake, MI", genre: "Percussion", bio: "An open drum session on the beach. Bring anything you can hit." },
  { slug: "pale-meridian", name: "Pale Meridian", from: "Seattle, WA", genre: "Dream pop", bio: "Reverb-soaked songs best heard as the sun goes down over the water." },
  { slug: "hollis-and-the-hounds", name: "Hollis and the Hounds", from: "Kansas City, MO", genre: "Roots rock", bio: "Bar-band energy and a frontman who tells long stories between songs." },
  { slug: "tomas-reyes", name: "Tomas Reyes", from: "San Antonio, TX", genre: "Conjunto", bio: "Button accordion and bajo sexto, three generations on one stage." },
  { slug: "quiet-machines", name: "Quiet Machines", from: "Ann Arbor, MI", genre: "Electronic", bio: "Gentle techno for the Sunday afternoon crowd at the Pines." },
];

export type Set = { artist: string; stage: StageId; day: DayId; start: string; end: string };

// Set times use 24-hour "HH:MM" here; the site shows them as 6:30 pm.
export const sets: Set[] = [
  // Friday
  { artist: "low-orchard-band", stage: "meadow", day: "fri", start: "15:30", end: "16:30" },
  { artist: "hollis-and-the-hounds", stage: "meadow", day: "fri", start: "17:15", end: "18:15" },
  { artist: "june-okonkwo", stage: "meadow", day: "fri", start: "19:00", end: "20:15" },
  { artist: "the-marrow-lights", stage: "meadow", day: "fri", start: "21:30", end: "23:15" },
  { artist: "graywater", stage: "pines", day: "fri", start: "16:00", end: "17:00" },
  { artist: "the-paper-saints", stage: "pines", day: "fri", start: "18:00", end: "19:00" },
  { artist: "lake-effect", stage: "pines", day: "fri", start: "20:15", end: "21:30" },
  { artist: "static-harbor", stage: "pines", day: "fri", start: "22:00", end: "23:30" },
  { artist: "nadia-firth", stage: "boathouse", day: "fri", start: "17:00", end: "18:00" },
  { artist: "sister-ferns", stage: "boathouse", day: "fri", start: "19:30", end: "20:30" },
  // Saturday
  { artist: "solstice-drum-circle", stage: "meadow", day: "sat", start: "12:30", end: "13:30" },
  { artist: "tomas-reyes", stage: "meadow", day: "sat", start: "14:30", end: "15:30" },
  { artist: "dellwood", stage: "meadow", day: "sat", start: "16:30", end: "17:45" },
  { artist: "mira-castellanos", stage: "meadow", day: "sat", start: "18:45", end: "20:00" },
  { artist: "halfmoon-orchard", stage: "meadow", day: "sat", start: "21:15", end: "23:00" },
  { artist: "the-tin-roofs", stage: "pines", day: "sat", start: "14:00", end: "15:00" },
  { artist: "velvet-county", stage: "pines", day: "sat", start: "17:00", end: "18:30" },
  { artist: "kilowatt-choir", stage: "pines", day: "sat", start: "21:45", end: "23:30" },
  { artist: "ade-bankole-trio", stage: "boathouse", day: "sat", start: "13:00", end: "14:15" },
  { artist: "northbound-quiet", stage: "boathouse", day: "sat", start: "16:00", end: "17:00" },
  { artist: "pale-meridian", stage: "boathouse", day: "sat", start: "20:00", end: "21:00" },
  // Sunday
  { artist: "low-orchard-band", stage: "meadow", day: "sun", start: "12:30", end: "13:30" },
  { artist: "copper-stills", stage: "meadow", day: "sun", start: "15:00", end: "16:00" },
  { artist: "ruthie-vance", stage: "meadow", day: "sun", start: "17:30", end: "18:45" },
  { artist: "sister-ferns", stage: "meadow", day: "sun", start: "19:30", end: "20:30" },
  { artist: "dellwood", stage: "meadow", day: "sun", start: "21:00", end: "22:30" },
  { artist: "quiet-machines", stage: "pines", day: "sun", start: "14:00", end: "15:30" },
  { artist: "graywater", stage: "pines", day: "sun", start: "17:00", end: "18:00" },
  { artist: "static-harbor", stage: "pines", day: "sun", start: "20:30", end: "22:00" },
  { artist: "northbound-quiet", stage: "boathouse", day: "sun", start: "13:00", end: "14:00" },
  { artist: "nadia-firth", stage: "boathouse", day: "sun", start: "16:00", end: "17:00" },
  { artist: "pale-meridian", stage: "boathouse", day: "sun", start: "19:00", end: "20:00" },
];

// Poster order: the biggest names per day. Slugs from the artists list.
export const headliners: Record<DayId, string[]> = {
  fri: ["the-marrow-lights", "june-okonkwo", "static-harbor"],
  sat: ["halfmoon-orchard", "kilowatt-choir", "mira-castellanos"],
  sun: ["dellwood", "ruthie-vance", "copper-stills"],
};

export const tickets = [
  {
    name: "Day pass",
    price: 89,
    note: "Friday, Saturday or Sunday",
    features: ["Entry for one day", "All three stages", "Lake beach and art trail"],
  },
  {
    name: "Weekend",
    price: 219,
    note: "Friday to Sunday",
    features: ["Entry for all three days", "All three stages", "Lake beach and art trail", "Re-entry any time"],
    featured: true,
  },
  {
    name: "Weekend and camping",
    price: 289,
    note: "Thursday night to Monday morning",
    features: ["Everything in Weekend", "A pitch in the Birch or Pine field", "Hot showers and lockers", "Early entry Thursday 6:00 pm"],
  },
  {
    name: "Under 12",
    price: 0,
    note: "With a paying adult",
    features: ["Free entry for children under 12", "Kids' field with workshops", "Wristband at the gate"],
  },
];

export const ticketNotes = "Prices include fees. Payment plans in three monthly installments are available until April 30, 2027.";

export const travel = {
  address: "Pellston Meadows, 4100 Lakeshore Road, Kettle Lake, MI 49769",
  mapQuery: "Kettle Lake, Michigan",
  ways: [
    { title: "Festival shuttle", text: "Coaches from Detroit, Grand Rapids and Chicago on Thursday and Friday, back on Monday. Seats are sold with tickets." },
    { title: "By car", text: "Parking is in the Orchard lot off Lakeshore Road, $20 for the weekend. Share a car and park closer, in the Carpool lot." },
    { title: "By bike", text: "The North Lakes trail runs past the east gate. Free guarded bike parking all weekend." },
    { title: "Nearest airport", text: "Pellston Regional (PLN) is 15 minutes away. A free shuttle meets every flight on Thursday and Friday." },
  ],
};

export const camping = {
  title: "Camp by the lake",
  text: "The campsite opens at 6:00 pm on Thursday and closes at noon on Monday. Two fields, under the birches and the pines, both a short walk from the beach.",
  points: [
    { title: "Birch field", text: "Quiet camping for families and early sleepers. Music ends at 11:00 pm here." },
    { title: "Pine field", text: "Closer to the stages, livelier at night. Hot showers open from 7:00 am." },
    { title: "Bring your own tent", text: "Or book a ready-pitched bell tent for two, with beds and lanterns, from $340." },
    { title: "Leave nothing behind", text: "Every camper gets a $10 deposit back for returning a full bag of recycling." },
  ],
};

export const faq = [
  { q: "Is there a minimum age?", a: "No. Under 12s come free with a paying adult, and 12 to 17 year olds need an adult with them on site." },
  { q: "Can I bring my own food and drink?", a: "Food, yes. Drinks in sealed plastic bottles, yes. No glass and no alcohol from outside the campsite." },
  { q: "What happens if it rains?", a: "The show goes on. The Pines Tent and the Boathouse are covered, and we only stop the Meadow Stage for lightning." },
  { q: "Is the site accessible?", a: "There is a raised viewing platform at the Meadow Stage, accessible toilets in every area and a quiet tent. Email us to book a free companion ticket." },
  { q: "Can I swim in the lake?", a: "Yes, at the lifeguarded beach from 10:00 am to 6:00 pm each day." },
  { q: "Can I get a refund?", a: "Tickets can be resold through our ticket partner at face value until July 16, 2027. If we cancel, everyone is refunded in full." },
];

// Fictional sponsors, shown as wordmarks. Use real logos by putting files in public/ and setting `logo`.
export const sponsors: { name: string; logo?: string }[] = [
  { name: "Northshore Cider" },
  { name: "Pellston Outfitters" },
  { name: "Great Lakes Radio" },
  { name: "Birchbark Coffee" },
  { name: "Lakeshore Credit Union" },
  { name: "Hollow Oak Brewing" },
];

export const newsletter = {
  title: "Hear about the next lineup first",
  text: "One email when we announce, one when tickets go on sale, and the timetable a week before. Nothing else.",
};
