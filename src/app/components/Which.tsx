import Image from "next/image";
import React from "react";

const Which = () => {
  return (
    <div className="w-full container mx-auto bg-gray-100 rounded-2xl">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center z-20">
        {/* Текстовый блок */}
        <div className="p-6 lg:p-20 text-center lg:text-left">
          <h1 className="font-bold text-3xl lg:text-4xl">
            Какой умный замок подходит для моего дома?
          </h1>
          <p className="text-xl lg:text-2xl py-6 lg:py-10">
            Вы всего в нескольких кликах от поиска идеального совпадения.
          </p>
          <button className="py-3 px-6 lg:py-4 lg:px-8 rounded-full border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white text-xl lg:text-2xl transition-colors duration-300">
            подобрать
          </button>
        </div>

        {/* Картинка */}
        <div className="relative flex w-full lg:w-1/2 h-60 lg:h-96 overflow-hidden">
          <Image
            src="/img/29.jpg"
            alt="умный замок для дома"
            fill
            className="object-contain pt-10 lg:pt-20"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
};

export default Which;
