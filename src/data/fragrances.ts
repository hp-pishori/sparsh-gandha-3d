export interface FragranceData {
  id: string;
  name: string;
  shortName: string;
  bottleLabel: string;
  folder: string;
  frameCount: number;
  capDescription: string;
  charmDescription: string;
  pouchDescription: string;
  fluidDescription: string;
  sensorySummary: string;
  toneColor: string;
  themeAccent: string;
  heroFrame: string;
}

export const FRAGRANCES: FragranceData[] = [
  {
    id: "rose",
    name: "Rose / Gulab",
    shortName: "Rose",
    bottleLabel: "ROSE",
    folder: "RosFram",
    frameCount: 240,
    capDescription: "Layered, petal-inspired sculptural cap in warm terracotta stone",
    charmDescription: "Antique-gold engraved rose medallion charm",
    pouchDescription: "Fine mesh ingredient pouch holding dried rose petals",
    fluidDescription: "Warm radiant amber rose eau de parfum",
    sensorySummary: "A tactile homage to classic Indian rose, translated into layered sculptural petals and warm amber light.",
    toneColor: "#C27A6D",
    themeAccent: "#B49A6A",
    heroFrame: "/FinalFrames/RosFram/ezgif-frame-001.jpg",
  },
  {
    id: "mogra",
    name: "Mogra",
    shortName: "Mogra",
    bottleLabel: "MOGRA",
    folder: "MogFram",
    frameCount: 240,
    capDescription: "Delicate, flower-inspired sculptural cap in ivory porcelain",
    charmDescription: "Antique-gold embossed Mogra blossom medallion",
    pouchDescription: "Pure sheer pouch holding fragrant white jasmine blossoms",
    fluidDescription: "Luminous, crystal-clear floral essence",
    sensorySummary: "An ethereal homage to night-blooming Indian jasmine, captured in carved ivory and radiant dawn illumination.",
    toneColor: "#EAE0D0",
    themeAccent: "#D8C59A",
    heroFrame: "/FinalFrames/MogFram/ezgif-frame-001.jpg",
  },
  {
    id: "kasturi",
    name: "Kasturi",
    shortName: "Kasturi",
    bottleLabel: "KASTURI",
    folder: "KasFram",
    frameCount: 240,
    capDescription: "Distinctive floral sculptural cap in muted celadon with deeper center",
    charmDescription: "Antique-gold embossed Kasturi botanical medallion",
    pouchDescription: "Textured sheer pouch holding natural botanical elements",
    fluidDescription: "Deep, warm golden nectar with mysterious earthen depth",
    sensorySummary: "A distinctive floral form with a deeper, warmer visual identity and earthen mystery.",
    toneColor: "#8FA382",
    themeAccent: "#A68B5B",
    heroFrame: "/FinalFrames/KasFram/ezgif-frame-001.jpg",
  },
  {
    id: "lemon",
    name: "Lemon / Lime",
    shortName: "Lemon",
    bottleLabel: "LEMON",
    folder: "LemFram",
    frameCount: 240,
    capDescription: "Citrus-inspired sculptural cap with sculpted translucent citrus wheel",
    charmDescription: "Antique-gold embossed citrus medallion",
    pouchDescription: "Woven pouch holding fragrant sun-dried citrus peel",
    fluidDescription: "Crisp, sun-drenched golden citrus eau de parfum",
    sensorySummary: "Bright, crisp, and sun-drenched vibrancy captured in a sculptural citrus form.",
    toneColor: "#D6B84A",
    themeAccent: "#D4B04C",
    heroFrame: "/FinalFrames/LemFram/ezgif-frame-001.jpg",
  },
  {
    id: "sandalwood",
    name: "Sandalwood",
    shortName: "Sandalwood",
    bottleLabel: "SANDALWOOD",
    folder: "SanFram",
    frameCount: 240,
    capDescription: "Carved wood-inspired cap with tactile timber grain",
    charmDescription: "Antique-gold embossed sandalwood branch medallion",
    pouchDescription: "Hand-tied pouch with fragrant sandalwood shavings",
    fluidDescription: "Rich, deep warm golden amber essence",
    sensorySummary: "Carved wood-inspired cap and a rich, warm visual identity conveying sacred stillness.",
    toneColor: "#A66D46",
    themeAccent: "#B49A6A",
    heroFrame: "/FinalFrames/SanFram/ezgif-frame-001.jpg",
  },
];

export function getFramePath(folder: string, frameIndex: number): string {
  // frameIndex is 0 to 239 -> formatted to ezgif-frame-001.jpg to ezgif-frame-240.jpg
  const num = Math.min(Math.max(1, frameIndex + 1), 240);
  const padded = num.toString().padStart(3, "0");
  return `/FinalFrames/${folder}/ezgif-frame-${padded}.jpg`;
}
