"use client";

import React, { useEffect, useState } from "react";
import data from "@/utils/api.json"; // путь к файлу

type Props = {};

type imageType = {
  name: string;
  title: string;
  description: string;
  button: string;
  imageUrl: string;
};

const FrontWindow = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentElem, setCurrentElem] = useState<imageType>();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 3000); // каждые 30 секунд

    return () => clearInterval(interval); // очистка таймера при размонтировании
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
      className={`w-full  bg-cover bg-center relative pt-45 pl-60 pb-40 `}
      style={{
        backgroundImage: `url(${currentElem?.imageUrl})`,
      }}
    >
      <div className="border-2 bg-blue-800/80 opacity-90 rounded-md max-w-[900px] pt-10">
        <div className="text-white px-15">
          <div className="flex flex-row gap-6 border-b-1 border-b-white/20">
            {data.map((item, i) => (
              <div key={i} className="m-2">
                <button
                  className={`text-xl uppercase pb-2 flex justify-center ${
                    currentElem?.name === item.name
                      ? "font-extrabold border-b-2 border-b-white"
                      : ""
                  }`}
                  onClick={() => handleChange(i)}
                >
                  {item.name}
                </button>
              </div>
            ))}
          </div>
          <div className="px-4 pt-10">
            <h1 className="h-32 text-3xl font-dancing font-bold transition-opacity duration-1000 ease-in-out opacity-100">
              {currentElem?.title}
            </h1>
            <div className="flex  w-full justify-end mt-30">
              <button className="border-2 border-white py-4 px-6 rounded-full my-10">
                {currentElem?.button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontWindow;
