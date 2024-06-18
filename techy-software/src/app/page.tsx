import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ServiceSection from "@/components/ServiceSection";
import ChooseUsSection from "@/components/ChooseUsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ReadySection from "@/components/ReadySection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <ServiceSection />
      <ChooseUsSection />
      <HowItWorksSection />
      <ReadySection />
      <FooterSection/>
    </main>
  );
}
