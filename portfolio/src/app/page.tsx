"use client";

import About from "@/components/About/About";
import Certifications from "@/components/Certifications/Certifications";
import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";
import Projects from "@/components/Projects/Projects";
import { useEffect } from "react";

export default function Home() {
  let theme = "light";
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      theme = localTheme; 
    }
  }, []);


  return (
    <div className="w-screen h-screen bg-slate-200 dark:bg-slate-800">
      <div className="w-full flex flex-col gap-2 items-center justify-center">
        <Navigation />
        <About />
        <Projects />
        <Certifications />
        <Footer />
      </div>
    </div>
  );
}
