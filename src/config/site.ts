// Configuration centrale du site : rien ici n'a besoin d'être un fichier de
// contenu (ce ne sont pas des "projets"), donc on garde ça en TypeScript.
// Pour changer une URL externe ou une couleur de casquette, c'est ici et
// nulle part ailleurs.

export type CasquetteId = "design" | "digital" | "gamberge" | "bbcarnage" | "recherches";

export interface Casquette {
  id: CasquetteId;
  label: { fr: string; en: string };
  tagline: { fr: string; en: string };
  color: string; // valeur CSS (variable --accent-*), voir tokens.css
  kind: "internal" | "external" | "soon";
  href?: string; // requis si kind = "internal" ou "external"
}

export const casquettes: Casquette[] = [
  {
    id: "design",
    label: { fr: "Design", en: "Design" },
    tagline: {
      fr: "Identité visuelle, print, web, événementiel.",
      en: "Visual identity, print, web, events.",
    },
    color: "var(--accent-design)",
    kind: "internal",
    href: "/design/",
  },
  {
    id: "digital",
    label: { fr: "Digital & expériences", en: "Digital & experiences" },
    tagline: {
      fr: "Installations, temps réel, dispositifs interactifs.",
      en: "Installations, real-time, interactive devices.",
    },
    color: "var(--accent-digital)",
    kind: "internal",
    href: "/digital/",
  },
  {
    id: "gamberge",
    label: { fr: "Gamberge", en: "Gamberge" },
    tagline: {
      fr: "Bientôt disponible.",
      en: "Coming soon.",
    },
    color: "var(--accent-gamberge)",
    kind: "soon",
    href: undefined,
  },
  {
    id: "bbcarnage",
    label: { fr: "BB Carnage", en: "BB Carnage" },
    tagline: {
      fr: "Musique — retrouve-moi sur Linktree.",
      en: "Music — find me on Linktree.",
    },
    color: "var(--accent-bbcarnage)",
    kind: "external",
    href: "https://l.instagram.com/?u=https%3A%2F%2Flinktr.ee%2Fencorebbcarnagestrates&e=AUAVJ194A6KlUiJXfAHwUIcst46HieZHRAXhQLHsVLbmF2EDe4Z3UGez7vMxhum3gwwy40VswKZwG0-xRJ36wcyTcBOkp3rZhjZgQcTtIthICZYsIHjR3xlNyukVy5dGjg6t6tpN-rfguUYgYDk6vYxMm_u39Fdy36oCFYeRyKk",
  },
  {
    id: "recherches",
    label: { fr: "Recherches", en: "Research" },
    tagline: {
      fr: "Notes de recherche et éditions.",
      en: "Research notes and editions.",
    },
    color: "var(--accent-recherches)",
    kind: "internal",
    href: "/recherches/",
  },
];

export const contact = {
  email: "hello@racheltruchot.fr",
  instagram: "https://instagram.com/",
  linkedin: "https://www.linkedin.com/",
};

export const site = {
  name: "Rachel Truchot",
  defaultOgImage: "/og/default.jpg",
};
