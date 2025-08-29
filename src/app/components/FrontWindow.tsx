"use client";

import React, { useEffect, useState } from "react";
import data from "@/app/lib/mock/front.json";

type imageType = {
  name: string;
  title: string;
  description: string;
  button: string;
  imageUrl: string;
};

const FrontWindow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentElem, setCurrentElem] = useState<imageType>();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 3000); // каждые 3 секунды

    return () => clearInterval(interval);
  }, []);

  const handleChange = (num: number) => {
    setCurrentIndex(num);
  };

  useEffect(() => {
    const currentFeature = data[currentIndex];
    setCurrentElem(currentFeature);
  }, [currentIndex]);

  return (
    <div
      className="w-full h-96 sm:h-screen bg-cover bg-center relative flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24"
      style={{
        backgroundImage: `url(${
          currentElem ? currentElem.imageUrl : "/img/1.jpg"
        })`,
      }}
    >
      {/* Overlay для лучшей читаемости текста */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 w-full max-w-6xl">
        <div className="border-2 bg-blue-800/80 opacity-90 rounded-md w-full p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="text-white">
            {/* Навигационные кнопки */}
            <div className="flex flex-row flex-wrap gap-2 sm:gap-4 md:gap-6 border-b border-white/20 pb-4">
              {data.map((item, i) => (
                <div key={i} className="m-1 sm:m-2">
                  <button
                    className={`text-sm sm:text-base md:text-lg lg:text-xl uppercase pb-2 px-2 sm:px-3 transition-all duration-300 ${
                      currentElem?.name === item.name
                        ? "font-bold border-b-2 border-white text-white"
                        : "font-medium text-white/70 hover:text-white"
                    }`}
                    onClick={() => handleChange(i)}
                  >
                    {item.name}
                  </button>
                </div>
              ))}
            </div>

            {/* Контент */}
            <div className="px-2 sm:px-4 md:px-6 pt-6 md:pt-8 lg:pt-10">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold transition-opacity duration-1000 ease-in-out opacity-100 mb-4 md:mb-6 lg:mb-8">
                {currentElem?.title}
              </h1>

              {currentElem?.description && (
                <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 md:mb-8 lg:mb-10">
                  {currentElem.description}
                </p>
              )}

              <div className="flex justify-end mt-6 md:mt-8 lg:mt-10">
                <button className="border-2 border-white py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-full text-sm sm:text-base md:text-lg hover:bg-white hover:text-blue-800 transition-all duration-300">
                  {currentElem?.button}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontWindow;
