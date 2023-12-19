import Image from "next/image";
import type React from "react";
import NavbarDropdown from "./navbar-dropdown";
import NavbarLanguageSwitch from "./navbar-language-switch";

/**
 * Home page navbar
 * @returns {React.JSX.Element}
 */
export default function Navbar() {
  return (
    <div className="navbar fixed z-10 bg-transparent backdrop-blur-lg max-w-7xl">
      <div className="">
        <a className="text-xl p-3" href="#">
          <Image
            src="/ChocoUp.svg"
            alt="ChocoUp Logo"
            width={144}
            height={36}
          />
        </a>
      </div>
      <div className="hidden lg:flex grow">
        <ul className="menu menu-horizontal flex-nowrap px-1 font-bold text-lg">
          <li>
            <a href="#">Funding</a>
          </li>
          <li>
            <a href="#">Success Stories</a>
          </li>
          <li>
            <a href="#">Partners</a>
          </li>
          <li>
            <NavbarDropdown summary={<span className="py-2">About</span>}>
              <ul className="!mt-0">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </NavbarDropdown>
          </li>
          <li>
            <NavbarDropdown summary={<span className="py-2">Resources</span>}>
              <ul className="!mt-0">
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Founder Perks</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </NavbarDropdown>
          </li>
          <li><a href="#">Login</a></li>
          <li>
            <a href="#" className="btn btn-ghost text-primary font-bold text-lg mx-3 rounded-full px-6">
              Get Funded
            </a>
          </li>
          <li>
            <NavbarLanguageSwitch />
          </li>
        </ul>
      </div>
      <div className="navbar-end lg:hidden grow">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-16 6h16"
              />
            </svg>
          </div>
          <div className="dropdown-content mr-[-1rem] mt-4 z-[1] p-2 shadow bg-white/70 backdrop-blur-lg rounded-box">
            <ul tabIndex={0} className="menu menu-lg w-screen">
              <li>
                <a href="#">Funding</a>
              </li>
              <li>
                <a href="#">Success Stories</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
              <li>
                <NavbarDropdown summary={<span>About</span>}>
                  <ul className="p-2">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Press</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                  </ul>
                </NavbarDropdown>
              </li>
              <li>
                <NavbarDropdown summary={<span>Resources</span>}>
                  <ul className="p-2">
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Founder Perks</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                  </ul>
                </NavbarDropdown>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
            <div className="w-full flex flex-row justify-center">
              <a href="#" className="btn text-primary font-bold mx-3">
                Get Funded
              </a>
              <NavbarLanguageSwitch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
