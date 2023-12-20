import Image from "next/image";
import type React from "react";
import NavbarDropdown from "./navbar-dropdown";

/**
 * Navbar Language Switcher
 * Functionality not yet implemented
 * @returns {React.JSX.Element}
 */
export default function NavbarLanguageSwitch() {
  return (
    <NavbarDropdown
      summary={
        <a className="btn btn-ghost lg:hover:bg-transparent lg:px-1" href="#">
          <Image
            className="h-4 mt-1"
            src="https://cdn.weglot.com/flags/square/gb.svg"
            alt="GB"
            width={20}
            height={14}
          />
          English
        </a>
      }
    >
      <ul className="pt-0 absolute !mt-0">
        <li>
          <a className="btn bg-base-100 rounded-lg shadow lg:shadow-none lg:border-none leading-8" href="#">
            <Image
              className="h-4"
              src="https://cdn.weglot.com/flags/square/hk.svg"
              alt="HK"
              width={20}
              height={14}
            />
            中文 (繁體)
          </a>
        </li>
      </ul>
    </NavbarDropdown>
  );
}
