import Image from "next/image";
import React from "react";

type Props = {
  right: boolean;
  name: string;
  description: string;
  image: string;
};

const AboutBlock = ({ right, name, description, image }: Props) => {
  return (
    <div className="mt-20">
      <div className="grid grid-cols-2">
        {!right && (
          <div className="relative w-full h-[500px]">
            <Image
              src={image}
              alt="лудший замок"
              fill
              className="object-contain"
            />
          </div>
        )}
        <div className="py-15 flex flex-col justify-center px-10">
          <h1 className="w-full font-bold text-5xl text-blue-700">{name}</h1>
          <p className="py-10 text-2xl">{description}</p>
          <div>
            <button className="py-4 px-8 rounded-full border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white text-xl">
              Полный список
            </button>
          </div>
        </div>
        {right && (
          <div className="relative w-full h-[500px]">
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

export default AboutBlock;
