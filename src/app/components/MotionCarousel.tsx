"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IProductType } from "../interface/interface";

const items = [
  { name: "Продукт 1", image: "/img/21.jpg" },
  { name: "Продукт 2", image: "/img/22.jpg" },
  { name: "Продукт 3", image: "/img/23.jpg" },
  { name: "Продукт 4", image: "/img/24.jpg" },
  { name: "Продукт 5", image: "/img/25.jpg" },
  { name: "Продукт 6", image: "/img/26.jpg" },
];

const visibleCount = 3;

type Props = {
  products: IProductType[];
};

export default function Carousel({ products }: Props) {
  const [index, setIndex] = useState(0);
  const maxIndex = items.length - visibleCount;

  const handleNext = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden py-15">
      {/* Слайдер */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: `-${(100 / visibleCount) * index}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          style={{
            width: `${(100 / visibleCount) * items.length}%`,
          }}
        >
          {products.map((item, i) => (
            <div
              key={i}
              className="w-1/3 flex-shrink-0"
              style={{ flex: `0 0 ${100 / items.length}%` }}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                <div className="relative w-32 h-46 md:w-72 md:h-96">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 text-center font-semibold">{item.name}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <div
        className="pointer-events-none absolute top-0 right-0 w-32 h-full 
           bg-gradient-to-l from-white via-white/50 to-transparent"
      ></div>
      {/* Кнопки */}
      <div className="flex justify-between mb-4 px-20 py-10">
        <button
          onClick={handlePrev}
          disabled={index === 0}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-30"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={handleNext}
          disabled={index === maxIndex}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-30"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
