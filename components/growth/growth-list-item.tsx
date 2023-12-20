import Image from "next/image";
import type React from "react";

/**
 * Growth section
 * @param {any} props - component props
 * @param {React.JSX.Element} props.children - Content of the list item
 * @returns {React.JSX.Element}
 */
export default function GrowthListItem({ children }: { children: React.JSX.Element; }) {
  return (
    <div className="flex flex-row items-center mt-2">
      <Image
        className="m-2"
        src="/dffead_icon.svg"
        alt="*"
        width={36}
        height={36}
      />
      <h4 className="text-xl font-semibold">
        {children}
      </h4>
    </div>
  );
}
