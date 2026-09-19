import Header from "@/components/Header";
import StartupHero from "@/components/StartupHero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <StartupHero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  );
}
