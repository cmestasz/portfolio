import About from "@/components/About/About";
import Certifications from "@/components/Certifications/Certifications";
import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-primary-100">
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
