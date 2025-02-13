"use client";

import Image from "next/image";
import { getLanguageText } from "../Providers/LanguageProvider";
import PageSettings from "./PageSettings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function FullNavigation() {
  return (
    <div className="w-full flex p-4 flex-col h-full">
      <div className="w-full self-center p-2">
        <PageSettings />
      </div>
      <div className="flex flex-col justify-between h-full items-center px-4">
        <div className="flex flex-col md:flex-row-reverse gap-2 px-2 py-8 h-full w-full justify-between items-center">
          <Image src="/profile.jpg" width={300} height={300} className="rounded-full w-1/2 md:w-1/4" alt="Picture" />
          <div className="flex flex-col gap-2 items-center md:items-start md:gap-6">
            <p className="text-3xl md:text-4xl font-bold dark:text-slate-200 text-slate-800">
              {getLanguageText("full-nav-pretitle")}
            </p>
            <div className="font-bold flex flex-col md:block gap-2 items-center">
              <p className="inline text-xl md:text-5xl dark:text-slate-200 text-slate-800">
                {getLanguageText("full-nav-title")}
              </p>
              <p className="inline text-4xl md:text-5xl dark:text-primary-300 text-primary-700">
                {"Christian "}
              </p>
              <p className="inline text-4xl md:text-5xl dark:text-secondary-300 text-secondary-700">
                Mestas
              </p>
            </div>
            <p className="dark:text-slate-200 text-slate-800 text-md md:text-xl">
              {getLanguageText("full-nav-subtitle")}
            </p>
          </div>
        </div>
      </div>
      <FontAwesomeIcon icon={faAngleDown} size="2x" className="dark:text-slate-200 text-slate-800 self-center" />
    </div>
  );
}
