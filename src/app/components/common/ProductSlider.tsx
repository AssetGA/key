"use client";

import { IProductType } from "@/app/interface/interface";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  products: IProductType[];
};

const ProductSlider = ({ products }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    scrollRef.current?.addEventListener("scroll", checkScroll);
    return () => scrollRef.current?.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth =
        scrollRef.current.firstElementChild?.firstElementChild?.clientWidth ||
        300;
      const scrollAmount =
        direction === "left" ? -cardWidth - 24 : cardWidth + 24; // 24px = gap
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (products.length < 1) return <div></div>;

  return (
    <div className="relative py-10 px-4 mt-20">
      {/* Left Arrow */}
      {canScrollLeft && (
        <button
          aria-label="Scroll left"
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Right Arrow */}
      {canScrollRight && (
        <button
          aria-label="Scroll right"
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Slider */}
      <div
        ref={scrollRef}
        className="whitespace-nowrap overflow-x-auto scroll-smooth no-scrollbar"
      >
        <div className="inline-flex space-x-6">
          {products.map((item, index) => (
            <div
              key={index}
              className="w-60 sm:w-72 md:w-80 shrink-0 bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative w-full h-72">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 20vw"
                />
              </div>
              <div className="px-5 py-4 text-center text-lg font-medium text-gray-800">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
