"use client";

import React from "react";

function NavbarWidget() {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <div className="navbar bg-white w-full text-black py-2 relative z-10">
      <div className="navbar-container sizer">
        <div className="navbar-content flex justify-between items-center relative">
          <div className="nav-logo">
            <h1 className="inline-block">
              <span className="text-transparent inline-block bg-clip-text bg-primary-gradient mr-2">
                Techy
              </span>
              Software
            </h1>
          </div>
          <div className="nav-items max-[800px]:absolute right-0 cursor-pointer">
            <div className="hamb hidden max-[800px]:block">
              {showMobileMenu === true ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer hidden max-[800px]:block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={() => setShowMobileMenu(false)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer max-[800px]:block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={() => {setShowMobileMenu(true); }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </div>

    

            <div className="desktop-items max-[800px]:hidden">
              <ul className="flex gap-5 font-medium">
                <li>
                  <a href="#hero-section">Home</a>
                </li>
                <li>
                  <a href="#intro-section">About Us</a>
                </li>
                <li>
                  <a href="#services-section">Services</a>
                </li>
                <li>
                  <a href="#footer-section">Contact Us</a>
                </li>
                <li>
                  <a
                    href="#"
                    className="bg-primary-gradient text-white px-2 py-2 rounded-sm shadow-md hover:shadow-2xl"
                  >
                    Call Now
                  </a>
                </li>
              </ul>
            </div>

            <div className={`mobile-items ${showMobileMenu ? 'block' : 'hidden'} absolute right-[0px] w-[10em] h-fit bg-white  top-[2.9em] rounded-md shadow-md p-2 pb-4`}>
              <ul className="flex flex-col gap-5 font-medium">
                <li>
                  <a href="#hero-section">Home</a>
                </li>
                <li>
                  <a href="#intro-section">About Us</a>
                </li>
                <li>
                  <a href="#services-section">Services</a>
                </li>
                <li>
                  <a href="#footer-section">Contact Us</a>
                </li>
                <li>
                  <a
                    href="#"
                    className="bg-primary-gradient text-white px-2 py-2 rounded-sm shadow-md hover:shadow-2xl"
                  >
                    Call Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarWidget;
