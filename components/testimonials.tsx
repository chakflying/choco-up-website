import type React from "react";
import Carousel from "./testimonials/carousel";

/**
 * Fetch user data from dummy API
 * @returns {Promise<{users: Array<{id: number, image: string, firstName: string, lastName: string, email: string, address: {address: string}}>}>}
 */
async function getData() {
  const res = await fetch("https://dummyjson.com/users");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

/**
 * Testimonials section
 * @returns {React.JSX.Element}
 */
export default async function Testimonials() {
  const data = await getData();

  return (
    <div className="max-w-7xl mx-auto my-12 flex flex-col items-center">
      <h2 className="text-5xl font-bold my-12 mx-8">Client Testimonials</h2>
      <div className="max-w-full w-[90vw] mb-12">
        <Carousel items={data.users} />
      </div>
    </div>
  );
}
