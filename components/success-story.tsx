import type React from "react";
import Video from "./success-story/video";
import Point from "./success-story/point";


/**
 * Success Story Section
 * @returns {React.JSX.Element}
 */
export default function SuccessStory() {
  return (
    <div className="max-w-7xl mx-auto my-12 flex flex-col items-center">
      <div className="text-center">
        <h4 className="text-primary font-bold uppercase">Success Story</h4>
        <h2 className="text-5xl font-bold max-w-4xl my-6">Maximise <span className="text-primary">business potential</span> with
          growth capital investment</h2>
      </div>
      <div className="my-12">
        <div className="rounded-4xl bg-white p-8 max-w-4xl shadow-xl">
          <Video id="video-1" preview="/thumbnail_Cheak.webp" src="https://www.youtube.com/embed/CaVz9ovVqXs?si=69wnM-Heo7VMfjyQ" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <Point number="1" heading={<span>Increasing product inventory</span>}>
          <span>Using their growth capital from Choco Up to pay for product inventory helped increase their sales and improved their profit margins.</span>
        </Point>
        <Point number="2" heading={<span>Building a strong women&apos;s brand</span>}>
          <span>Creating an activewear brand that catered to Asian women&apos;s bodies proved to be a great success as they are now part of the Love, Bonito family.</span>
        </Point>
      </div>
    </div>
  );
}
