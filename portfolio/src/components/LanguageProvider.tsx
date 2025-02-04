"use client";

import { OnlyChildrenProps } from "@/definitions";
import { createContext, useContext, useState } from "react";

const LanguageContext = createContext({
    lang: "en",
    setLang: (lang: string) => {},
});
export function LanguageProvider({ children }: OnlyChildrenProps) {
    const [lang, setLang] = useState("en");

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}