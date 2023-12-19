import Image from "next/image";
import type React from "react";
import FooterNavSection from "./footer/footer-nav-section";

/**
 * Page Footer
 * @returns {React.JSX.Element}
 */
export default function Footer() {
  return (
    <footer>
      <div className="bg-indigo-950 w-screen py-12">
        <div className="max-w-7xl mx-auto px-12 flex flex-col lg:flex-row justify-between text-white">
          <div className="flex flex-col mr-24 mb-12">
            <Image
              className="saturate-0 brightness-[1000] my-4"
              src="/ChocoUp.svg"
              alt="ChocoUp Logo"
              width={144}
              height={36}
            />
            <p className="my-4">Asia's largest revenue<br />based financing platform</p>
            <div className="my-4 flex flex-row">
              <a className="mr-4" href="#">
                <Image
                  src="/icon-fb.svg"
                  alt="Facebook"
                  width={32}
                  height={32}
                />
              </a>
              <a className="mr-4" href="#">
                <Image
                  src="/icon-linkedin.svg"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                />
              </a>
            </div>
          </div>
          <div className="flex flex-row flex-wrap max-w-full">
            <FooterNavSection heading={<span>Company</span>} links={[
              { name: "About us", href: "#" },
              { name: "Contact", href: "#" },
              { name: "Press", href: "#" },
              { name: "Careers", href: "#" },
            ]} />
            <FooterNavSection heading={<span>Resources</span>} links={[
              { name: "Blog", href: "#" },
              { name: "Founder Perks", href: "#" },
            ]} />
            <FooterNavSection heading={<span>Success stories</span>} links={[
              { name: "BuyHive", href: "#" },
              { name: "Jaco", href: "#" },
              { name: "Soundbrenner", href: "#" },
            ]} />
            <FooterNavSection heading={<span>Support</span>} links={[
              { name: "Contact us", href: "#" },
              { name: "FAQ", href: "#" },
            ]} />
            <FooterNavSection heading={<span>Legal</span>} links={[
              { name: "Privacy policy", href: "#" },
              { name: "Terms of service", href: "#" },
            ]} />
          </div>
        </div>
        <hr className="max-w-7xl mx-12 lg:mx-auto" />
        <p className="max-w-7xl mx-auto text-center text-white text-sm my-4">© Copyright 2023 Choco Up. All rights reserved.</p>
      </div>
    </footer>
  );
}
