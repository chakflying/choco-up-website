import Image from "next/image";
import type React from "react";
import GrowthListItem from "./growth/growth-list-item";

/**
 * Growth section
 * @returns {React.JSX.Element}
 */
export default function Growth() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center my-12 mx-8">
        <h2 className="text-5xl font-bold">Unlock <span className="text-primary">Business Growth</span></h2>
        <div className="font-bold my-8">
          Manage your cash flow and reach business milestones with accessible growth capital.<br />
          It's e-commerce funding that's fast, flexible and founder-friendly.
        </div>
      </div>
      <Image
        src="/RBF-1.webp"
        alt="Growth Diagram"
        width={1024}
        height={581}
      />
      <div className="m-8 flex flex-col md:flex-row justify-between">
        <div>
          <GrowthListItem>
            <span>Purchase inventory</span>
          </GrowthListItem>
          <GrowthListItem>
            <span>Invest in ads and marketing</span>
          </GrowthListItem>
          <GrowthListItem>
            <span>Expand into new markets</span>
          </GrowthListItem>
        </div>
        <div>
          <GrowthListItem>
            <span>No collateral needed</span>
          </GrowthListItem>
          <GrowthListItem>
            <span>Simple, one-time flat fee</span>
          </GrowthListItem>
          <GrowthListItem>
            <span>Use the funds the way you want</span>
          </GrowthListItem>
        </div>
      </div>
    </div>
  );
}
