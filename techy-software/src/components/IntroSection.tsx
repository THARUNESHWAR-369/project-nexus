import React from "react";
import Image from "next/image";
import IntroImage from "../../public/assets/intro/intro1.webp";

function IntroSection() {
  return (
    <section id="intro-section" className="z-[20px] py-10 bg-[#f7f7f7] text-black overflow-hidden">
      <div className="intro-section-container sizer">
        <h2 className="uppercase text-2xl font-extrabold">
          {" "}
          <span className="text-transparent inline-block bg-clip-text bg-primary-gradient">
            About Us
          </span>
        </h2>
        <h1 className="text-3xl font-semibold mt-8">
          We specialize in creating websites that fit your budget perfectly.
        </h1>
        <p className="mt-8 font-medium">
          Welcome to{" "}
          <span className="text-transparent font-bold inline-block bg-clip-text bg-primary-gradient">
            Techy Softwares
          </span>
          , where we specialize in turning your business dreams into reality. We
          create tailored websites that fit your budget and offer advice to
          boost your business growth. A website is essential for showcasing your
          uniqueness and expanding your online presence.
        </p>
        <button className="bg-primary-gradient flex items-center text-white px-3 py-2 my-10 rounded-md shadow-md">
          Services
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </button>

        <div className="img-container rounded-t-md shadow-lg w-full h-full shadow-black">
          <Image
            src={IntroImage}
            alt="intro-image"
            placeholder="blur"
            priority
            className="w-full h-full object-cover rounded-t-md"
          />
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
