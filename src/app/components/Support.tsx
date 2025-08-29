import Image from "next/image";
import React from "react";

const supportItems = [
  {
    title: "Найти установщика",
    img: "/img/28.jpg",
    bg: "bg-blue-800",
  },
  {
    title: "Задать вопрос",
    img: "/img/29.jpg",
    bg: "bg-blue-500",
  },
  {
    title: "Гарантия на продукцию и установку",
    img: "/img/26.jpg",
    bg: "bg-gray-500",
  },
];

const Support = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center">
        <h1 className="flex justify-center text-4xl text-blue-800">
          Поддержка стала простой.
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-10 text-2xl text-white/80">
          {supportItems.map(({ title, img, bg }, index) => (
            <div
              key={index}
              className="w-full flex flex-col justify-center rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className={`py-6 text-center ${bg}`}>{title}</h2>
              <div className="relative w-full h-[200px] md:h-[350px] group">
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
