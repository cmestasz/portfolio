"use client";

import { getLanguageText } from "../Providers/LanguageProvider";
import PageSettings from "./PageSettings";

export default function FullNavigation() {
  return (
    <div className="w-full flex p-4 flex-col relative">
      <div className="w-fit right-0 absolute">
        <PageSettings />
      </div>
      <div className="flex flex-col gap-2 p-2">
        <p className="font-bold text-4xl md:text-8xl lg:text-9xl text-slate-800 dark:text-slate-200 w-fit drop-shadow">
          Christian
        </p>
        <p className="font-bold text-3xl md:text-7xl lg:text-8xl text-slate-800 dark:text-slate-200 w-fit">
          Mestas
        </p>
        <p className="text-sm md:text-md lg:text-lg text-slate-800 dark:text-slate-200 w-fit">
            {getLanguageText("full-nav-subtitle")}
        </p>
      </div>
    </div>
  );
}
