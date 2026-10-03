/* ============================================================
   THE POTBELLY — PATNA
   Image references
   ------------------------------------------------------------
   Every image on the site is defined here so it can be swapped
   in one place. When real photography arrives, drop the files
   into /public/images/ and update the `src` paths below.
   ============================================================ */

export type SiteImage = {
  src: string;
  alt: string;
};

export const images: Record<string, SiteImage> = {
  /* ---------- Home ---------- */

  hero: {
    src: "/images/placeholder.svg",
    alt: "The Potbelly, Patna — an editorial vignette of the dining room",
  },
  intro: {
    src: "/images/placeholder.svg",
    alt: "Slow-cooked Bihari preparation, plated for the contemporary table",
  },
  editorial: {
    src: "/images/placeholder.svg",
    alt: "An earthen pot of Ahuna Mutton, opened at the table",
  },
  setting: {
    src: "/images/placeholder.svg",
    alt: "The dining room at The Potbelly, inside the Bihar Museum",
  },
  experience: {
    src: "/images/placeholder.svg",
    alt: "A shared table at The Potbelly, plates passed between guests",
  },

  /* ---------- Story ---------- */

  storyHearth: {
    src: "/images/placeholder.svg",
    alt: "A whole wheat litti roasting over open flame, the smell of sattu rising",
  },
  storyTable: {
    src: "/images/placeholder.svg",
    alt: "A Bihari platter arranged for sharing — chokha, pooris and pickle",
  },
  storyClose: {
    src: "/images/placeholder.svg",
    alt: "An editorial detail of the dining room at The Potbelly, Patna",
  },

  /* ---------- Experience ---------- */

  experienceHero: {
    src: "/images/placeholder.svg",
    alt: "The dining room at The Potbelly, set for an evening inside the Bihar Museum",
  },
  experienceTable: {
    src: "/images/placeholder.svg",
    alt: "A shared table at The Potbelly — plates passed, glasses filled",
  },
  experienceFlavour: {
    src: "/images/placeholder.svg",
    alt: "A close editorial detail of mustard, chokha and pickle on a platter",
  },
  experienceAtmosphere: {
    src: "/images/placeholder.svg",
    alt: "Warm, low-lit dining at The Potbelly, Patna",
  },
  experienceOccasion: {
    src: "/images/placeholder.svg",
    alt: "Guests seated at The Potbelly — an unhurried evening meal",
  },
};