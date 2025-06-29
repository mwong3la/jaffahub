import { CTASection } from "@/components/CTASection";
import { HomeHero } from "@/components/HomeHero";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HomeHero />
      <Services />
      <Process />
      <TechStack />
      <CTASection />
    </div>
  );
}
