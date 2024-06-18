import React from "react";

function HowItWorksSection() {
  return (
    <section className="py-14 overflow-x-hidden h-auto bg-black relative">
      {/* <div className=" bg-primary-gradient w-full h-full absolute top-0 opacity-10"></div> */}
      <div className="chooseus-container sizer relative">
        <h1 className="text-2xl font-extrabold uppercase">
          <span className="text-transparent inline-block z-10 bg-clip-text bg-primary-gradient">
            Getting Started...
          </span>
        </h1>
        <div className="services flex relative">
          <div className="cards mt-7">
            <div className="card">
              <div className="card-heading">
                <h1 className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    width="32px"
                    fill="#e8eaed"
                    className="bg-primary-gradient rounded-full p-1"
                  >
                    <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                  </svg>
                  <p>Contact Us</p>
                </h1>
              </div>
              <div className="card-body">
                <p>
                  Reach out via phone or WhatsApp to discuss your requirements.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-heading">
                <h1 className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    width="32px"
                    fill="#e8eaed"
                    className="bg-primary-gradient rounded-full p-1"
                  >
                    <path d="M440-200h80v-40h40q17 0 28.5-11.5T600-280v-120q0-17-11.5-28.5T560-440H440v-40h160v-80h-80v-40h-80v40h-40q-17 0-28.5 11.5T360-520v120q0 17 11.5 28.5T400-360h120v40H360v80h80v40ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-560v-160H240v640h480v-480H520ZM240-800v160-160 640-640Z" />
                  </svg>
                  <p className="leading-[35px]">Receive a Quote</p>
                </h1>
              </div>
              <div className="card-body">
                <p>We’ll provide a quote based on your budget and needs.</p>
              </div>
            </div>

            <div className="card">
              <div className="card-heading">
                <h1 className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    width="32px"
                    fill="#e8eaed"
                    className="bg-primary-gradient rounded-full p-1"
                  >
                    <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" />
                  </svg>
                  <p className="leading-[35px]">Development</p>
                </h1>
              </div>
              <div className="card-body">
                <p>
                  Once the quote is accepted, our expert team starts crafting
                  your ideal website or online store.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-heading">
                <h1 className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    width="32px"
                    fill="#e8eaed"
                    className="bg-primary-gradient rounded-full p-1"
                  >
                    <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                  <p className="leading-[35px]">Continued Support</p>
                </h1>
              </div>
              <div className="card-body">
                <p>
                  Enjoy 24/7 support and continuous business strategies to
                  foster your growth.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-heading">
                <h1 className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    width="32px"
                    fill="#e8eaed"
                    className="bg-primary-gradient rounded-full p-1"
                  >
                    <path d="m226-559 78 33q14-28 29-54t33-52l-56-11-84 84Zm142 83 114 113q42-16 90-49t90-75q70-70 109.5-155.5T806-800q-72-5-158 34.5T492-656q-42 42-75 90t-49 90Zm178-65q-23-23-23-56.5t23-56.5q23-23 57-23t57 23q23 23 23 56.5T660-541q-23 23-57 23t-57-23Zm19 321 84-84-11-56q-26 18-52 32.5T532-299l33 79Zm313-653q19 121-23.5 235.5T708-419l20 99q4 20-2 39t-20 33L538-80l-84-197-171-171-197-84 167-168q14-14 33.5-20t39.5-2l99 20q104-104 218-147t235-24ZM157-321q35-35 85.5-35.5T328-322q35 35 34.5 85.5T327-151q-25 25-83.5 43T82-76q14-103 32-161.5t43-83.5Zm57 56q-10 10-20 36.5T180-175q27-4 53.5-13.5T270-208q12-12 13-29t-11-29q-12-12-29-11.5T214-265Z" />
                  </svg>
                  <p className="leading-[35px]">Launch</p>
                </h1>
              </div>
              <div className="card-body">
                <p>
                  We bring your vision to life affordably and help you establish
                  a strong online presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
