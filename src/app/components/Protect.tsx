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
    <div className="mt-10">
      <div
        className={`w-full grid grid-cols-1 md:grid-cols-2 bg-gray-100 rounded-xl overflow-hidden`}
      >
        {/* Картинка слева или справа */}
        <div
          className={`relative w-full h-64 md:h-96 p-6 order-1 ${
            right ? "md:order-1" : "md:order-2"
          }`}
        >
          <Image
            src={image}
            alt="лудший замок"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Текст */}
        <div
          className={`flex flex-col justify-center p-6 md:p-10 order-2 ${
            right ? "md:order-2" : "md:order-1"
          }`}
        >
          <h1 className="font-bold text-2xl md:text-4xl">{name}</h1>
          <p className="py-6 md:py-10 text-base md:text-2xl leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Protect;
