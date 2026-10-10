export interface StoryBeat {
  id: string;
  startProgress: number; // 0.0 to 1.0
  endProgress: number;
  tagline?: string;
  headline: string;
  subheadline?: string;
  body: string;
  highlightPill?: string;
  callouts?: {
    num: string;
    title: string;
    desc: string;
  }[];
  pillars?: {
    title: string;
    desc: string;
    icon: "touch" | "sight" | "scent";
  }[];
  align: "center" | "left" | "right";
}

export const STORY_BEATS: StoryBeat[] = [
  {
    id: "hero",
    startProgress: 0.0,
    endProgress: 0.16,
    tagline: "THE SCENT YOU CAN SEE",
    headline: "SPARSH GANDHA",
    subheadline: "Where Senses Converge.",
    body: "An exploration of fragrance through sight, touch, and scent.",
    align: "center",
  },
  {
    id: "idea",
    startProgress: 0.18,
    endProgress: 0.42,
    tagline: "PHILOSOPHY",
    headline: "From invisible to tangible.",
    subheadline: "Senses Beyond Scent",
    body: "A fragrance is more than a name and a note. It can have a texture, a form, a material — something to discover before the first spray.",
    pillars: [
      {
        title: "Touch",
        desc: "A sculptural form inspired by the fragrance.",
        icon: "touch",
      },
      {
        title: "Sight",
        desc: "A visual language shaped by material and detail.",
        icon: "sight",
      },
      {
        title: "Scent",
        desc: "The fragrance itself, waiting to be experienced.",
        icon: "scent",
      },
    ],
    align: "left",
  },
  {
    id: "material-language",
    startProgress: 0.44,
    endProgress: 0.7,
    tagline: "CRAFTSMANSHIP",
    headline: "Every scent has a physical language.",
    subheadline: "The Anatomy of Form",
    body: "Distinctive forms, tactile references, and considered details give every fragrance its own visual identity.",
    callouts: [
      {
        num: "01",
        title: "Sculptural Cap",
        desc: "A tactile form inspired by the character of the fragrance.",
      },
      {
        num: "02",
        title: "Keepsake Charm",
        desc: "An antique-gold medallion with an embossed ingredient emblem.",
      },
      {
        num: "03",
        title: "Ingredient Pouch",
        desc: "A visible material reference inviting tactile curiosity and discovery.",
      },
      {
        num: "04",
        title: "Crystal Flacon",
        desc: "Pure architectural glass displaying the radiant liquid within.",
      },
    ],
    align: "right",
  },
  {
    id: "reveal-cta",
    startProgress: 0.74,
    endProgress: 1.0,
    tagline: "EXPERIENCE",
    headline: "Scent becomes an experience.",
    subheadline: "The Complete Harmony",
    body: "See the form. Discover the material. Experience the fragrance.",
    align: "center",
  },
];
