import Image from "next/image";
import React from "react";
import MotionCarousel from "../MotionCarousel";
import { fetchProducts } from "@/app/active/products";
import { IProductType } from "@/app/interface/interface";

type shopProps = {
  title: string;
  imageUrl: string;
  type: string;
};

const ShopBlock = async ({ title, imageUrl, type }: shopProps) => {
  const products: IProductType[] = await fetchProducts();

  const productList: IProductType[] = products.filter((elem) => {
    return elem.type === type;
  });
  return (
    <div className="container mx-auto mt-20 z-50">
      <h1 className="text-5xl text-blue-800">{title}</h1>
      <div className="flex flex-row">
        <div className="w-[30%] flex flex-col py-5">
          <div className="relative w-full h-[500px]">
            <Image
              src={imageUrl}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="text-2xl py-10">
            <button className=" hover:border-b-2 cursor-pointer">
              Весь ассортимент
            </button>
          </div>
        </div>
        <div className="w-[70%] z-20 pl-15">
          {productList.length > 0 ? (
            <MotionCarousel products={productList} />
          ) : (
            <div className="w-full max-w-6xl mx-auto overflow-hidden py-15">
              Позиции будут доступны в скором времени
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopBlock;
