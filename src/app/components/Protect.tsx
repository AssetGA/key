import Image from "next/image";
import React from "react";

type Props = {
  right: boolean;
  name: string;
  description: string;
  image: string;
};

const Protect = ({ right, name, description, image }: Props) => {
  return (
    <div className="mt-20">
      <div className="w-full grid grid-cols-2 bg-gray-100 rounded-xl">
        {right && (
          <div className="relative w-full h-96 m-10">
            <Image
              src={image}
              alt="лудший замок"
              fill
              className="object-contain"
            />
          </div>
        )}
        <div className="py-10 flex flex-col justify-center px-20">
          <h1 className="w-full font-bold text-4xl">{name}</h1>
          <p className="py-10 text-2xl">{description}</p>
        </div>
        {!right && (
          <div className="relative w-full h-96 m-10">
            <Image
              src={image}
              alt="лудший замок"
              fill
              className="object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Protect;
