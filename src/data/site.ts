/* ============================================================
   THE POTBELLY — PATNA
   Site-wide data
   ============================================================ */

export type NavItem = { label: string; to: string };

export const site = {
  name: "The Potbelly",
  nameHindi: "थे पोटबेली",
  city: "Patna",
  cityHindi: "पटना",
  cuisine: "North Indian / Bihari-inspired",
  address:
    "3, Bailey Rd, inside Bihar Museum, Officers Flat, Market, Patna, Bihar 800001",
  phone: "070919 10283",
  phoneHref: "tel:+917091910283",
  tagline: "A taste of Bihar, reimagined.",
  venue: "Bihar Museum · Patna",
} as const;

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "Story", to: "/story" },
  { label: "Experience", to: "/experience" },
  { label: "Contact", to: "/contact" },
];