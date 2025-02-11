import Contact from "@/components/layouts/Contact/Contact";
import HeroSection from "@/components/sections/home/hero/HeroSection";
import MessageSection from "@/components/sections/home/message/MessageSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MessageSection />
      <Contact />
    </main>
  );
}
