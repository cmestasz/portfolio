"use client";

import { OnlyChildrenProps } from "@/definitions";
import { createContext, useContext, useEffect, useState } from "react";
import Dictionary from "@/Dictionary.json";

const parsedDictionary = Dictionary as DictionaryShape;

const LanguageContext = createContext({
  lang: "en",
  setLang: (lang: string) => {},
});
export function LanguageProvider({ children }: OnlyChildrenProps) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const localLang = localStorage.getItem("lang");
    if (localLang) {
      setLang(localLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

interface DictionaryShape {
  [key: string]: {
    [lang: string]: string;
  };
}

export function getLanguageText(key: string) {
  const { lang, setLang } = useLanguage();
  if (parsedDictionary[key]) {
    return parsedDictionary[key][lang];
  }
}

export function useLanguage() {
  return useContext(LanguageContext);
}
