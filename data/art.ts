// /data/art.ts
// The Art Corner — Daniel's pixel art showcase.
// Add a piece by dropping its file in /public/images/art/ and appending an
// entry here. GIFs animate on their own; PNGs render static. The page builds
// the rest. Newest/most-striking first is a fine default — order is as-is.

import type { ArtPiece } from "@/lib/types";

export const artPieces: ArtPiece[] = [
  {
    src: "/images/art/watching-hand.gif",
    alt: "Pixel art animation of The Watching Hand — a pale, many-eyed severed hand that crawls and watches.",
    caption: "The Watching Hand",
    from: "Familiar Frenzy",
    kind: "animation",
  },
  {
    src: "/images/art/bone-mage.gif",
    alt: "Pixel art attack animation of the Bone Mage — a skeleton in a purple wizard hat and robe casting with a staff.",
    caption: "Bone Mage — casting",
    from: "Familiar Frenzy",
    kind: "animation",
  },
  {
    src: "/images/art/gutter-gecko.gif",
    alt: "Pixel art idle animation of the Gutter Gecko — a green, belted lizard enemy.",
    caption: "Gutter Gecko",
    from: "Familiar Frenzy",
    kind: "animation",
  },
  {
    src: "/images/art/captain-bee.gif",
    alt: "Pixel art flying animation of Captain Bee — a bee wearing a small captain's hat.",
    caption: "Captain Bee",
    from: "Honey River Raid",
    kind: "animation",
  },
  {
    src: "/images/art/wasp.gif",
    alt: "Pixel art flying animation of a wasp enemy with orange and yellow markings.",
    caption: "Wasp",
    from: "Honey River Raid",
    kind: "animation",
  },
  {
    src: "/images/art/cola-courier-idle.gif",
    alt: "Pixel art idle animation of the Cola Courier — an ape carrying a delivery basket on its back.",
    caption: "Cola Courier — idle",
    from: "Iju Cola Courier (in development)",
    kind: "animation",
  },
  {
    src: "/images/art/cola-courier-walk.gif",
    alt: "Pixel art walk animation of the Cola Courier — an ape carrying a delivery basket on its back.",
    caption: "Cola Courier — walk",
    from: "Iju Cola Courier (in development)",
    kind: "animation",
  },
];
