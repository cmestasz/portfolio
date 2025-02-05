"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../Providers/LanguageProvider";
import { useEffect, useState } from "react";

interface LanguageButtonProps {
  lang: string;
  globalLang: string;
  setLang: (lang: string) => void;
}

export function LanguageButton({
  lang,
  globalLang,
  setLang,
}: LanguageButtonProps) {
  return (
    <div className="flex flex-row justify-center gap-2">
      <button
        className={`text-primwriting-100 font-bold bg-slate-700 dark:bg-slate-300 px-2 py-1 rounded-lg ${
          lang === globalLang || "opacity-50"
        }`}
        onClick={() => setLang(lang)}
      >
        {lang.toUpperCase()}
      </button>
    </div>
  );
}

export function DarkModeButton() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
      const elem = document.getElementById(
        "switch-component"
      )! as HTMLInputElement;
      elem.checked = localTheme === "dark";
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <FontAwesomeIcon icon={faMoon} size="2x" className="text-slate-700 dark:text-slate-300" />

      <div className="relative inline-block w-11 h-5">
        <input
          id="switch-component"
          type="checkbox"
          className="peer appearance-none w-11 h-5 bg-slate-700 rounded-full cursor-pointer transition-colors duration-300"
          onClick={toggleTheme}
        />
        <label
          htmlFor="switch-component"
          className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
        ></label>
      </div>
    </div>
  );
}

export default function PageSettings() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex flex-col px-4 gap-2 items-end">
      <div className="flex flex-row gap-2 items-center">
        <div className="flex flex-row justify-center gap-2">
          <LanguageButton lang="en" globalLang={lang} setLang={setLang} />
          <LanguageButton lang="es" globalLang={lang} setLang={setLang} />
        </div>
      </div>
      <DarkModeButton />
    </div>
  );
}
