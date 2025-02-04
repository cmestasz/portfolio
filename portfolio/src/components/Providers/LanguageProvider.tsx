"use client";

import { OnlyChildrenProps } from "@/definitions";
import { createContext, useContext, useEffect, useState } from "react";

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
      }
      , []);
    
      useEffect(() => {
        console.log("globalLang", lang);
        localStorage.setItem("lang", lang);
      }, [lang]);

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}