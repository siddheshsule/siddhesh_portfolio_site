import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import TechSkills from "@/components/TechSkills";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Border from "@/components/ui/border";
import { RxDividerHorizontal } from "react-icons/rx";

export default function Home() {
  return (
    <>
      <div className="relative mx-auto min-h-screen max-w-screen-2xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 z-20">
        <BackgroundBeams />
        <div className="lg:flex lg:justify-between lg:gap-12 relative z-30">
          <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-28">
            <Navbar />
            <Profile />
            <TechSkills />
          </div>
          <main className="pt-24 lg:w-[48%] lg:py-24 mt-10">
            <div className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-justify w-auto">
              <div id="about">
                <About />
              </div>
              <Border/>
              <div className="mt-12 p-10" id="experience">
                <Experience />
              </div>
              <Border/>
              <div id='contact'>
                <Contact/>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
