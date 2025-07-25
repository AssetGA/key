"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import Image from "next/image";
import data from "@/utils/type.json"; // путь к файлу
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAppSelector } from "../store/hooks";
import FastLink from "./FastLink";

const menuItems = [
  {
    label: "Продукция",
    href: "/products",
    content: "Описание продукции",
    num: 0,
    imageUrl: "/img/17.jpg",
  },
  {
    label: "Смарт замки",
    href: "/smart",
    content: "Инфо о смарт замках",
    num: 1,
    imageUrl: "/img/smart/smart1.jpg",
  },
  {
    label: "Стильно",
    href: "/style",
    content: "Стили и дизайн",
    num: 2,
    imageUrl: "/img/19.jpg",
  },
  {
    label: "Установка",
    href: "/support",
    content: "Сервис и поддержка",
    num: 3,
    imageUrl: "/img/support.png",
  },
];

export default function NavBar() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const router = useRouter();
  const products = useAppSelector((state) => state.product.entity);

  const productListSmart = products.filter((elem) => {
    return elem.type === "smart";
  });
  const productListStyle = products.filter((elem) => {
    return elem.type === "style";
  });

  const handleIndex = (name: string) => {
    router.push(name); // or any route
    setActiveIndex(null);
  };

  return (
    <nav className="fixed bg-white w-full z-50">
      <div className="absolute max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className=" text-2xl font-bold text-gray-800 z-60">
          DUKA Company
        </Link>
      </div>

      {/* ОБЕРТКА для меню и выплывающего блока */}
      <div
        className="relative flex justify-end px-10"
        onMouseEnter={() => {}}
        onMouseLeave={() => setActiveIndex(null)}
      >
        <ul className="hidden md:flex space-x-6 text-lg">
          {menuItems.map((item, index) => (
            <li
              key={item.href}
              onMouseEnter={() => setActiveIndex(index)}
              className={`relative cursor-pointer flex flex-row px-6 pb-6 pt-4 mt-2 ${
                activeIndex === index
                  ? "bg-gray-100 border-b-4 border-blue-500"
                  : ""
              }`}
            >
              <Link
                href={item.href}
                className={`text-gray-700 hover:text-black transition `}
              >
                {item.label}
              </Link>
              <div className="px-3">
                {activeIndex !== index ? <ChevronDown /> : <ChevronUp />}
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-center px-4 py-3">
          <button className="p-2 hover:bg-gray-50 rounded-full">
            <Search />
          </button>
        </div>
        <button className="px-5 py-3 border border-blue-500 text-blue-500 rounded-3xl m-2">
          Установка замка
        </button>
        <button className="px-5 py-3 border border-blue-500 text-blue-500 rounded-3xl m-2">
          Подобрать замок
        </button>
        {/* Выплывающее окно под Nav */}
        <div
          className={`absolute left-0 top-full w-full bg-gray-100 shadow-inner transition-all duration-500 ease-in-out transform ${
            activeIndex !== null
              ? "opacity-100 translate-y-0 pointer-events-auto py-6"
              : "opacity-0 -translate-y-4 pointer-events-none py-0"
          }`}
        >
          {/* {activeIndex !== null && ( */}
          {/* products */}
          {activeIndex === 0 && (
            <div
              className="px-10 text-gray-700 text-base"
              onClick={() => setActiveIndex(null)}
            >
              {/* {menuItems[activeIndex].content} */}
              <div className="container mx-auto w-full my-10">
                <div className="grid grid-cols-4 gap-20">
                  <div className="">
                    <h1 className="text-2xl py-4 font-bold">Продукция</h1>
                    <div className=" hover:shadow-xl hover:border-2 hover:border-blue-500">
                      <button
                        className="w-full"
                        onClick={() => handleIndex("/products")}
                      >
                        <div className="relative w-full h-130">
                          <Image
                            src={menuItems[0].imageUrl}
                            alt={menuItems[0].label}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                          />
                        </div>
                        <p className="text-xl flex justify-center py-5 bg-white">
                          Вся продукция
                        </p>
                      </button>
                    </div>
                  </div>
                  <div className="flex col-span-2">
                    <div className="mx-auto grid grid-cols-3 grid-rows-2 gap-5 mt-22">
                      {data.map((elem, i) => (
                        <button
                          key={i}
                          className="min-w-[200px] bg-gray-100 hover:shadow-xl rounded-md hover:border-2 hover:border-blue-500 overflow-hidden"
                          onClick={() =>
                            handleIndex(`/products${elem.nameUrl}`)
                          }
                        >
                          <div className="relative w-full h-50">
                            <Image
                              src={elem.imageUrl}
                              alt={elem.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                              priority
                            />
                          </div>
                          <div className="p-4 text-center font-semibold bg-white">
                            {elem.name}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  <FastLink />
                </div>
              </div>
            </div>
          )}
          {/* smart */}
          {activeIndex === 1 && (
            <div className="px-10 text-gray-700 text-base">
              {/* {menuItems[activeIndex].content} */}
              <div className="container mx-auto w-full my-10">
                <div className="grid grid-cols-4 gap-20">
                  <div className="">
                    <h1 className="text-2xl py-4 font-bold">Умные замки</h1>
                    <div className=" hover:shadow-xl hover:border-2 hover:border-blue-500">
                      <button
                        className="w-full"
                        onClick={() => handleIndex("/products/smart")}
                      >
                        <div className="relative w-full h-130">
                          <Image
                            src={menuItems[1].imageUrl}
                            alt={menuItems[1].label}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                          />
                        </div>
                        <p className="text-xl flex justify-center py-5 bg-white">
                          Все умные замки
                        </p>
                      </button>
                    </div>
                  </div>
                  <div className="flex col-span-2">
                    <div className="mx-auto grid grid-cols-3 grid-rows-2 gap-5 mt-22">
                      {productListSmart.map((elem, i) => (
                        <button
                          key={i}
                          className="min-w-[200px] bg-gray-100 hover:shadow-xl rounded-md hover:border-2 hover:border-blue-500 overflow-hidden"
                          onClick={() =>
                            handleIndex(`/products/smart/${elem._id}`)
                          }
                        >
                          <div className="relative w-full h-50">
                            <Image
                              src={elem.imageUrl}
                              alt={elem.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-4 text-center font-semibold bg-white">
                            {elem.name}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  <FastLink />
                </div>
              </div>
            </div>
          )}
          {/* style */}
          {activeIndex === 2 && (
            <div className="px-10 text-gray-700 text-base">
              {/* {menuItems[activeIndex].content} */}
              <div className="container mx-auto w-full my-10">
                <div className="grid grid-cols-4 gap-20">
                  <div className="">
                    <h1 className="text-2xl py-4 font-bold">Ваш стиль</h1>
                    <div className=" hover:shadow-xl hover:border-2 hover:border-blue-500">
                      <button
                        className="w-full"
                        onClick={() => handleIndex("/style")}
                      >
                        <div className="relative w-full h-130">
                          <Image
                            src={menuItems[2].imageUrl}
                            alt={menuItems[2].label}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                          />
                        </div>
                        <p className="text-xl flex justify-center py-5 bg-white">
                          Все Стили
                        </p>
                      </button>
                    </div>
                  </div>
                  <div className="flex col-span-2">
                    <div className="mx-auto grid grid-cols-3 gap-5 mt-22">
                      {productListStyle.map((elem, i) => (
                        <div
                          key={i}
                          className="min-w-[200px] bg-gray-100 hover:shadow-xl rounded-md hover:border-2 hover:border-blue-500 overflow-hidden"
                        >
                          <div className="relative w-full h-50">
                            <Image
                              src={elem.imageUrl}
                              alt={elem.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                              priority
                            />
                          </div>
                          <div className="p-4 text-center font-semibold bg-white">
                            {elem.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <FastLink />
                </div>
              </div>
            </div>
          )}
          {/* support */}
          {activeIndex === 3 && (
            <div className="px-10 text-gray-700 text-base">
              {/* {menuItems[activeIndex].content} */}
              <div className="container mx-auto w-full my-10">
                <div className="grid grid-cols-4 gap-20">
                  <div></div>
                  <div className="">
                    <h1 className="text-2xl py-4 font-bold">Установка</h1>
                    <div className=" hover:shadow-xl hover:border-2 hover:border-blue-500">
                      <button
                        className="w-full"
                        onClick={() => handleIndex("/support")}
                      >
                        <div className="relative w-full h-130">
                          <Image
                            src={menuItems[3].imageUrl}
                            alt={menuItems[3].label}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                          />
                        </div>
                        <p className="text-xl flex justify-center py-5 bg-white">
                          Выбор специалиста
                        </p>
                      </button>
                    </div>
                  </div>

                  <FastLink />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
