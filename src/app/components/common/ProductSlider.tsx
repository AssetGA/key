"use client";

import Image from "next/image";
import React from "react";

type Product = {
  name: string;
  img: string;
};

type Props = {
  products: Product[];
};

const ProductSlider = ({ products }: Props) => {
  return (
    <div className="whitespace-nowrap py-10 px-4 mt-20">
      <div className="inline-flex space-x-6">
        {products.map((item, index) => (
          <div
            key={index}
            className="w-60 shrink-0 bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative w-full h-72">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="px-5 py-15 text-center text-lg font-medium text-gray-800">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
