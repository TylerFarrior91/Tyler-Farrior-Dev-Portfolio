import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavLinks from "./components/NavLinks";
import ProjectCards from "./components/ProjectCards";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <Aboutme />
        <Projects />
        <Contact />
        <NavLinks />
        <ProjectCards />
      </div>
      <Footer />
    </main>
  );
}