"use client";

import React from "react";
import ReadyImage from "../../public/assets/ready/r1.jpg";
import Image from "next/image";

function ReadySection() {
  return (
    <section className="py-14 overflow-hidden h-auto bg-primary-gradient">
      {/* <div className=" bg-primary-gradient w-full h-full absolute top-0 opacity-10"></div> */}
      <div className="ready-container sizer relative">
        <div className="ready-content flex justify-between flex-row-reverse max-[760px]:flex-col gap-2">
          <div className="ready-left">
            <h1 className="font-extrabold text-5xl">
              Ready For Awesome Project With Us?
            </h1>
            <p className="mt-3">Let&#39;s Talk About Your Project.</p>
            <div className="ready-button mt-4 flex gap-3">
              <button
                onClick={() => (window.location.href = "tel:+919834572839")}
                className="bg-white flex  rounded-md shadow-md text-emerald-400 px-2 py-3"
              >
                <p>Call</p>
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
              <button
                onClick={() =>
                  (window.location.href = "https://wa.link/mqch1c")
                }
                className="bg-white flex  rounded-md shadow-md text-emerald-400 px-2 py-3"
              >
                <p>Whatsapp</p>
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
            </div>
          </div>
          <div className="ready-right max-w-[40em] w-full h-full relative transform -translate-x-[7em] max-[760px]:translate-x-0 max-[760px]:translate-y-[8em]  shadow-md">
            <Image
              src={ReadyImage}
              alt="intro-image"
              placeholder="blur"
              priority
              layout="responsive"
              className="w-full h-full object-cover rounded-md shadow-md"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReadySection;
