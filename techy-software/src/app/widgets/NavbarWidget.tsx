import React from "react";

function NavbarWidget() {
  return (
    <div className="navbar bg-white w-full text-black py-2 relative z-10">
      <div className="navbar-container sizer">
        <div className="navbar-content flex justify-between items-center">
          <div className="nav-logo">
            <h1 className="inline-block">
              <span className="text-transparent inline-block bg-clip-text bg-primary-gradient mr-2">
                Techy
              </span>
              Software
            </h1>
          </div>
          <div className="nav-items">
            <ul className="flex gap-5 font-medium">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#" className="bg-primary-gradient text-white px-2 py-2 rounded-sm shadow-md hover:shadow-2xl">
                  Call Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarWidget;
