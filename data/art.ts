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
    caption: "Bone Mage",
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
    src: "/images/art/witch.gif",
    alt: "Pixel art idle animation of the witch — the player character of Familiar Frenzy, in a purple hat and robe, dangling a mouse from a fishing pole to direct her familiar.",
    caption: "The Witch",
    from: "Familiar Frenzy",
    kind: "animation",
  },
  {
    src: "/images/art/familiar-cat.gif",
    alt: "Pixel art animation of the ghost-cat familiar — a small purple spectral cat with a wispy tail.",
    caption: "The Familiar",
    from: "Familiar Frenzy",
    kind: "animation",
  },
  {
  src: "/images/art/hourkeeper_idle.gif",
  alt: "Pixel art idle of Hourkeeper - a time-themed boss from Familiar Frenzy",
  caption: "Hourkeeper",
  from: "Familiar Frenzy",
  kind: "animation", // "animation" for GIFs, "still" for PNGs
},
  {
    src: "/images/art/cola-courier-idle.gif",
    alt: "Pixel art idle animation of the Cola Courier — an ape carrying a delivery basket on its back.",
    caption: "Cola Courier Idling",
    from: "Iju Cola Courier (in development)",
    kind: "animation",
  },
  {
    src: "/images/art/cola-courier-walk.gif",
    alt: "Pixel art walk animation of the Cola Courier — an ape carrying a delivery basket on its back.",
    caption: "Cola Courier Walking",
    from: "Iju Cola Courier (in development)",
    kind: "animation",
  },
  {
  src: "/images/art/cola-courier-walk_n.gif",
  alt: "Pixel art walking north animation of the Cola Courier — an ape carrying a delivery basket on its back.",
  caption: "Cola Courier Walking North",
  from: "Iju Cola Courier (in development)",
  kind: "animation", // "animation" for GIFs, "still" for PNGs
},
{
  src: "/images/art/cola-courier-celebrate.gif",
  alt: "Pixel art celebrating animation of the Cola Courier — an ape carrying a delivery basket on its back.",
  caption: "Cola Courier Celebrating!",
  from: "Iju Cola Courier (in development)",
  kind: "animation", // "animation" for GIFs, "still" for PNGs
},
{
  src: "/images/art/cola-courier-burst.gif",
  alt: "Pixel art angry animation of the Cola Courier — an ape carrying a delivery basket on its back.",
  caption: "Cola Courier Angry",
  from: "Iju Cola Courier (in development)",
  kind: "animation", // "animation" for GIFs, "still" for PNGs
},
];
