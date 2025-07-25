import Image from "next/image";
import React from "react";

type Props = {};

const Support = (props: Props) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center ">
        <h1 className="flex justify-center text-4xl text-blue-800">
          Поддержка стала простой.
        </h1>
        <div className="grid grid-cols-3 gap-5 py-10 text-2xl text-white/80">
          <div className="w-full flex flex-col justify-center rounded-md  overflow-hidden">
            <h2 className="py-15 text-center bg-blue-800">Найти установщика</h2>
            <div className="relative w-full h-[350px]">
              <Image
                src="/img/28.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center rounded-md  overflow-hidden">
            <h2 className="py-15 text-center bg-blue-500">Задать вопрос</h2>
            <div className="relative w-full h-[350px]">
              <Image
                src="/img/29.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center rounded-md  overflow-hidden">
            <h2 className="py-15 text-center bg-gray-500">
              Гарантия на продукцию и установку
            </h2>
            <div className="relative w-full h-[350px]">
              <Image
                src="/img/26.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
