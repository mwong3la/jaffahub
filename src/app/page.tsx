import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Process />
      <TechStack />
      <CTASection />
    </div>
  );
}
