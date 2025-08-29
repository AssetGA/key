import Image from "next/image";
import React from "react";
import MotionCarousel from "../MotionCarousel";
import { fetchProducts } from "@/app/active/products";
import { IProductType } from "@/app/interface/interface";

type ShopProps = {
  title: string;
  imageUrl: string;
  type: string;
  alt?: string;
};

const ShopBlock = async ({
  title,
  imageUrl,
  type,
  alt = "Изображение товара",
}: ShopProps) => {
  const products: IProductType[] = await fetchProducts();

  const productList: IProductType[] = products.filter(
    (elem) => elem.type === type
  );

  return (
    <div className="container mx-auto mt-20 z-50">
      <h1 className="text-3xl md:text-5xl font-bold text-blue-800">{title}</h1>
      <div className="flex flex-col md:flex-row mt-8 gap-8">
        {/* Левая колонка */}
        <div className="md:w-1/3 flex flex-col py-5">
          <div className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={imageUrl}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
            />
          </div>
          <div className="text-lg md:text-2xl py-6">
            <button className="border-b-2 border-transparent hover:border-blue-800 transition-colors duration-300 cursor-pointer">
              Весь ассортимент
            </button>
          </div>
        </div>

        {/* Правая колонка */}
        <div className="md:w-2/3 z-20 md:pl-12">
          {productList.length > 0 ? (
            <MotionCarousel products={productList} />
          ) : (
            <div className="w-full max-w-6xl mx-auto text-gray-600 text-lg md:text-xl py-10 text-center">
              Позиции будут доступны в скором времени
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopBlock;
