import NavbarWidget from "@/app/widgets/NavbarWidget";
import React from "react";
import Image from "next/image";
import HeroImage from "../../public/assets/hero/hero1.png";
import Marquee from "react-fast-marquee";

function HeroSection() {
  return (
    <section id="hero-section" className="relative">
  
      <div className="hero-section w-full h-full relative overflow-y-hidden">
        <NavbarWidget />

        <div className="hero-section-container relative w-full h-full">
          <div className="hero-section-image h-full w-full relative bg-blue-200">
            <div className="img-overlay bg-gradient-to-t from-black/60 to-black/90 absolute top-0 w-full h-full backdrop-blur-[1px]"></div>
            <Image
              src={HeroImage}
              alt="hero-image"
              placeholder="blur"
              priority
              className="w-full h-full object-cover top-0"
            />
          </div>
          <div className="hero-section-content w-full absolute top-0 left-1/2 transform -translate-x-[50%]">
            <div className="hero-content sizer text-center relative top-[12em] items-center max-[745px]:top-[8em] max-[390px]:top-[4em]">
              <h1 className="text-6xl font-extrabold -tracking-wider max-w-[14em] m-auto w-full max-[490px]:text-5xl">
                {" "}
                <span className="text-transparent inline-block bg-clip-text bg-primary-gradient">
                  Affordable Website Solutions for Your Business
                </span>{" "}
              </h1>
              <p className="mt-7 text-lg  max-w-[30em] leading-5 tracking-wider  m-auto w-full">
                Providing IT solutions and website development services to help
                your business grow.
              </p>
              <button className="bg-primary-gradient py-2 px-2 rounded-md mt-14 w-fit">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="marquee w-full bottom-0 absolute">
          <Marquee className="fixed bottom-0 px-3 overflow-hidden flex select-none bg-black/50">
            <b className="ml-[10em]">
              Building Your Digital Dreams | 3000+ Active Learning Interns |
              100+ Happy Clients | Call Us and Get free ideas for your business
              growth
            </b>
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
