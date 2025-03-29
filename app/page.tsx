import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import TechSkills from "@/components/TechSkills";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Border from "@/components/ui/border";

export default function Home() {
  return (
    <div className="relative mx-auto min-h-screen max-w-screen-2xl px-6 py-4 md:px-12 md:py-10 lg:px-24 lg:py-10 font-sans">
      {/* Background Beams */}
      <BackgroundBeams />

      {/* Page Content */}
      <div className="lg:flex lg:justify-between lg:gap-12 relative z-30">
        {/* Left Sidebar */}
        <aside className="lg:sticky lg:top-10 lg:flex lg:max-h-screen lg:w-[45%] lg:flex-col lg:justify-between">
          <div className="space-y-8">
            <Navbar />
            <Profile />
            <TechSkills />
          </div>
          <div className="hidden lg:block mt-8">
            <Footer />
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:w-[50%] mt-10 space-y-12">
          <section id="about">
            <About />
          </section>
          <Border />
          <section id="experience">
            <Experience />
          </section>
          <Border />
          <section id="projects">
            <Projects />
          </section>
          <Border />
          <section id="contact">
            <Contact />
          </section>
          <div className="lg:hidden mt-8">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
