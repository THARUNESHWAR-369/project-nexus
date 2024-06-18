import React from "react";
import Image from "next/image";
import ServiceImage from "../../public/assets/services/s1.webp";

function ServiceSection() {
  return (
    <section className="py-14 overflow-x-hidden h-auto">
      <div className="service-container sizer">
        <h1 className="text-2xl font-extrabold uppercase">
          <span className="text-transparent inline-block bg-clip-text bg-primary-gradient">
            What We Offer
          </span>
        </h1>
        <div className="service-cont flex relative max-[780px]:flex-col max-[780px]:gap-14">
          <div className="services w-[145%] max-[780px]:w-full h-full">
            <div className="cards mt-7">
              <div className="card">
                <div className="card-heading">
                  <h1 className="flex">
                    <span className="bg-primary-gradient"></span>
                    <p>Website Development</p>
                  </h1>
                </div>
                <div className="card-body">
                  <p>
                    Custom-built websites that reflect your brand&apos;s
                    identity and goals.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-heading">
                  <h1 className="flex">
                    <span className="bg-primary-gradient"></span>
                    <p className="leading-[35px]">IT Solutions</p>
                  </h1>
                </div>
                <div className="card-body">
                  <p>
                    Comprehensive IT services to support and elevate your
                    business operations.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-heading">
                  <h1 className="flex">
                    <span className="bg-primary-gradient"></span>
                    <p className="leading-[35px]">Business Growth Strategies</p>
                  </h1>
                </div>
                <div className="card-body">
                  <p>
                    Personalized strategies to enhance your online reputation,
                    boost sales, and generate leads.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="services-image relative transform translate-x-[10em] max-[780px]:translate-x-0">
            <Image
              src={ServiceImage}
              alt="service-image"
              placeholder="blur"
              priority
              className="w-full h-full object-cover rounded-md"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
