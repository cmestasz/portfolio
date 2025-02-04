"use client";

import { OnlyChildrenProps } from "@/definitions";
import { LanguageProvider } from "./LanguageProvider";

export function Providers({ children }: OnlyChildrenProps) {
  return <LanguageProvider>{children}</LanguageProvider>;
}