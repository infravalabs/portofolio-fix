import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import ServiceSection from "@/components/ServiceSection";

export default function Home() {
  return (
    <div className="flex flex-col relative min-h-screen bg-white overflow-x-hidden font-inter">
      <Navbar />

      <div className="mt-15">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ServiceSection />
        <Faq />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
