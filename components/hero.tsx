import Image from "next/image";
import type React from "react";

/**
 * Hero Graphic and Statistics
 * @returns {React.JSX.Element}
 */
export default function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="max-w-7xl mx-auto">
        <div className="min-h-[90vmin] flex flex-row items-center">
          <div className="prose mx-8 lg:mx-6">
            <div className="prose">
              <h1 className="text-5xl">Choco Up</h1>
              <p className="font-semibold">Helping businesses and e-commerce brands grow by providing easy access to working capital that's flexible and non-dilutive. </p>
              <p className="font-semibold">Say hello to revenue-based financing.</p>
            </div>
            <a className="mt-8 btn btn-lg no-underline text-white font-bold text-xl rounded-full bg-gradient-to-r to-cyan-500 from-indigo-500" href="#">Get Funded</a>
          </div>
          <div>
            <Image
              className="hidden lg:block"
              src="/funding-screenshot.svg"
              alt="Hero Graphic"
              width={800}
              height={800}
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-around items-center">
          <div className="p-4 my-3 prose text-center">
            <h3 className="text-3xl font-bold">US$ 1bn+</h3>
            <p>Total GMV Funded</p>
          </div>
          <div className="p-4 my-3 prose text-center">
            <h3 className="text-3xl font-bold">600+</h3>
            <p>Funding Rounds</p>
          </div>
          <div className="p-4 my-3 prose text-center">
            <h3 className="text-3xl font-bold">50+</h3>
            <p>Digital Partners</p>
          </div>
        </div>
      </div>

    </div>
  );
}
