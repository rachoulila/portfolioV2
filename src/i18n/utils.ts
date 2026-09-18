import { ui, defaultLang, type Lang } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split("/");
  if (maybeLang in ui) return maybeLang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

// Fallback FR->EN pour les champs bilingues { fr, en } du contenu.
export function pick<T extends { fr: string; en?: string }>(field: T, lang: Lang): string {
  if (lang === "en" && field.en) return field.en;
  return field.fr;
}

// Construit le lien vers l'équivalent EN/FR d'un chemin donné.
export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, targetLang: Lang = lang): string {
    const cleanPath = path.replace(/^\/(fr|en)\//, "/").replace(/^\/(fr|en)$/, "/");
    return targetLang === defaultLang ? cleanPath : `/en${cleanPath}`;
  };
}
