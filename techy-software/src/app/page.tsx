"use client";

import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ServiceSection from "@/components/ServiceSection";
import ChooseUsSection from "@/components/ChooseUsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ReadySection from "@/components/ReadySection";
import FooterSection from "@/components/FooterSection";
import React from "react";

export default function Home() {
  const [showScroll, setShowScroll] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative">
      {showScroll && (
        <div className="fixed z-[100] right-5 bottom-5">
          <button
            className="bg-primary-gradient rounded-full shadow-xl p-2"
            onClick={scrollToTop}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              width="38px"
              fill="#e8eaed"
            >
              <path d="m280-400 200-200 200 200H280Z" />
            </svg>
          </button>
        </div>
      )}
      <div>
        <HeroSection />
        <IntroSection />
        <ServiceSection />
        <ChooseUsSection />
        <HowItWorksSection />
        <ReadySection />
        <FooterSection />
      </div>
    </main>
  );
}
