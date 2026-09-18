import { marked } from "marked";
import type { Lang } from "./ui";

const SEPARATOR = /^<!--\s*en\s*-->\s*$/m;

// Un fichier de contenu contient le texte FR, puis une ligne `<!--en-->`,
// puis le texte EN. Si la ligne est absente, le même texte sert aux deux
// langues (fallback FR->EN demandé dans le cahier des charges).
export function splitBilingualBody(raw: string, lang: Lang): string {
  const parts = raw.split(SEPARATOR);
  const fr = parts[0]?.trim() ?? "";
  const en = parts[1]?.trim();
  const chosen = lang === "en" && en ? en : fr;
  return marked.parse(chosen, { async: false }) as string;
}
