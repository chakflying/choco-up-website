"use client";

import Image from "next/image";
import type React from "react";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import Card from "@/components/testimonials/card";


/**
 * Testimonials carousel
 * @returns {React.JSX.Element}
 */
export default function Carousel({ items }: { items: Array<{ id: number, image: string, firstName: string, lastName: string, email: string, address: { address: string } }> }) {
  let settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    slidesToScroll: 1,
    prevArrow: (
      <div>
        <div className="h-80 w-12 mt-[-10rem] absolute left-[-1rem] flex flex-row justify-center">
          <Image src="/icon-prev.svg" alt="Previous" width={24} height={24} />
        </div>
      </div>
    ),
    nextArrow: (
      <div>
        <div className="h-80 w-12 mt-[-10rem] absolute left-[-1rem] flex flex-row justify-center">
          <Image src="/icon-next.svg" alt="Next" width={24} height={24} />
        </div>
      </div>
    ),

  };
  return (
    <div>
      <Slider {...settings}>
        {
          items.map((item) => (
            <Card key={item.id} user={item} />
          ))
        }
      </Slider >
    </div >
  );
}
