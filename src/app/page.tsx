import Contact from "@/components/layouts/Contact/Contact";
import HeroSection from "@/components/sections/home/hero/HeroSection";
import MessageSection from "@/components/sections/home/message/MessageSection";
import ProjectSection from "@/components/sections/home/project/ProjectSection";
import SkillSection from "@/components/sections/home/skill/SkillSection";
import { homeFeatures } from "@/components/sections/shared/features/featureItems";
import FeatureSection from "@/components/sections/shared/features/FeatureSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MessageSection />
      <FeatureSection features={homeFeatures} />
      <ProjectSection />
      <SkillSection />
      <Contact />
    </main>
  );
}
