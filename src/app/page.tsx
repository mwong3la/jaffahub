import { Header } from "./components/shared/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { TechStack } from "./components/TechStack";
import { CTA } from "./components/CTA";
import { Footer } from "./components/shared/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Process />
      <TechStack />
      <CTA />
      <Footer />
    </div>
  );
}
