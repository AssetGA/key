"use client";

import React, { useState } from "react";
import Image from "next/image";

const products = [
  { name: "Замок Alpha", image: "/img/21.jpg" },
  { name: "Замок Beta", image: "/img/12.jpg" },
  { name: "Замок Gamma", image: "/img/13.jpg" },
  { name: "Замок Delta", image: "/img/14.jpg" },
  { name: "Замок Sigma", image: "/img/15.jpg" },
  { name: "Замок Omega", image: "/img/16.jpg" },
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = products.length - 3;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="w-full px-4 py-6">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / 3)}%)`,
          width: `${(products.length * 100) / 6}%`,
        }}
      >
        {products.map((product, i) => (
          <div key={i} className="w-1/3 flex-shrink-0 px-2">
            <div className="bg-white shadow rounded-xl overflow-hidden">
              <div className="relative w-full h-96">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center font-semibold">
                {product.name}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          disabled={currentIndex === 0}
        >
          ← Назад
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          disabled={currentIndex === maxIndex}
        >
          Вперед →
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
