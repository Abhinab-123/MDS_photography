import Navbar from "@/components/studio/Navbar";
import Hero from "@/components/studio/Hero";
import Portfolio from "@/components/studio/Portfolio";
import Packages from "@/components/studio/Packages";
import Services from "@/components/studio/Services";
import Team from "@/components/studio/Team";
import Contact from "@/components/studio/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Packages />
        <Team />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-gray-400 border-t border-gray-100">
        <p>&copy; {new Date().getFullYear()} Mahalaxmi Digital Studio. All rights reserved.</p>
      </footer>
    </div>
  );
}
