import Image from "next/image";
import type React from "react";

/**
 * Success point item
 * @returns {React.JSX.Element}
 */
export default function Point({ number, heading, children }: { number: string, heading: React.JSX.Element, children: React.JSX.Element }) {
  return (
    <div className="flex flex-row m-8">
      <div className="mr-8">
        <div className="w-16 h-16 rounded-full bg-primary flex justify-center items-center">
          <span className="ml-[-0.2em] text-3xl font-bold text-white italic">{number}</span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-2xl font-bold">{heading}</div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
