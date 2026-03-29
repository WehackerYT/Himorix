import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Features from "@/components/Features";
import AboutSection from "@/components/AboutSection";
import Industries from "@/components/Industries";
import TechnologyStack from "@/components/TechnologyStack";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
    <main className="min-h-screen pt-[113px]">
      <Header />
      <HeroSlider />
      <Features />
      <AboutSection />
      <Industries />
      <TechnologyStack />
      <Testimonials />
      <Footer />
      <ChatBot />
    </main>
  );
}
