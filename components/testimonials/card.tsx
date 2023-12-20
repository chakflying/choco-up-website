import Image from "next/image";
import type React from "react";

/**
 * Carousel Card
 * @param {any} props - component props
 * @param {{ id: number, image: string, firstName: string, lastName: string, email: string, address: { address: string } }} props.user - The user data
 * @returns {React.JSX.Element}
 */
export default function Card({ user }: { user: { id: number, image: string, firstName: string, lastName: string, email: string, address: { address: string } } }) {
  return (
    <div className="my-12 mx-4">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="px-10 pt-10 flex flex-row items-center">
          <Image src={user.image}
            alt={user.firstName + " " + user.lastName}
            width={100}
            height={100}
            className="rounded-full"
          />
          <div className="flex flex-col items-center">
            <h2 className="card-title">{user.firstName + " " + user.lastName}</h2>
            <p>{user.email}</p>
          </div>
        </div>
        <div className="card-body items-center">
          <p>{user.address.address}</p>
        </div>
      </div>
    </div>

  );
}
