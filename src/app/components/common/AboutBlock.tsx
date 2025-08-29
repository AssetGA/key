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
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        {/* Левая картинка (если right = false) */}
        {!right && (
          <div className="relative w-full h-[300px] md:h-[500px]">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        {/* Текстовый блок */}
        <div className="flex flex-col justify-center px-6 md:px-10 text-center md:text-left">
          <h1 className="w-full font-bold text-3xl md:text-5xl text-blue-700">
            {name}
          </h1>
          <p className="py-6 md:py-10 text-lg md:text-2xl">{description}</p>
          <div>
            <button className="py-3 px-6 md:py-4 md:px-8 rounded-full border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white text-lg md:text-xl transition">
              Полный список
            </button>
          </div>
        </div>

        {/* Правая картинка (если right = true) */}
        {right && (
          <div className="relative w-full h-[300px] md:h-[500px]">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutBlock;
