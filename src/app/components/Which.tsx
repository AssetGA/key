import Image from "next/image";
import React from "react";

type Props = {};

const Which = (props: Props) => {
  return (
    <div className="w-full container mx-auto bg-gray-100 rounded-2xl">
      <div className="w-full flex flex-row justify-between z-20">
        <div className="p-20">
          <h1 className="font-bold text-4xl">
            Какой умный замок подходит для моего дома?
          </h1>
          <p className="text-2xl py-10">
            Вы всего в нескольких кликах от поиска идеального совпадения.
          </p>
          <button className="py-4 px-8 rounded-full border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white text-2xl">
            ознакомиться
          </button>
        </div>
        <div className="relative flex w-full h-96 z-50  overflow-hidden">
          <Image
            src="/img/29.jpg"
            alt="лудший замок"
            fill
            className="object-contain pt-20"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
};

export default Which;
