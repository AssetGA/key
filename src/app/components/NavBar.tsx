"use client";

import React, { useState } from "react";
// import { Search } from "lucide-react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import data from "@/utils/type.json"; // путь к файлу
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAppSelector } from "../store/hooks";
import FastLink from "./FastLink";
import ToggleArrow from "./ToggleArrow";
import { menuItems } from "@/utils/menu";

export default function NavBar() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

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
    setMobileOpen(false);
  };

  return (
    <nav className="fixed bg-white w-full z-50 shadow-md">
      <div className="w-full mx-auto px-6 py-4 flex items-center justify-between">
        {/* Логотип */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Замки Астаны
        </Link>

        {/* Кнопки справа (desktop) */}
        <div className="hidden md:flex gap-3">
          <button className="px-5 py-3 border border-blue-500 text-blue-500 hover:bg-gray-100 rounded-3xl">
            Установка замка
          </button>
          <button className="px-5 py-3 border border-blue-500 text-blue-500 hover:bg-gray-100 rounded-3xl">
            Подобрать замок
          </button>
        </div>

        {/* Бургер кнопка (mobile) */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Десктопное меню */}
      <div
        className="hidden md:flex relative w-full justify-center border-t border-gray-200"
        onClick={() => setActiveIndex(null)}
      >
        <ul className="flex space-x-6 text-xl">
          {menuItems.map((item, index) => (
            <li
              key={item.href}
              onMouseEnter={() => setActiveIndex(index)}
              className={`relative cursor-pointer flex items-center px-6 py-4 ${
                activeIndex === index
                  ? "bg-gray-100 border-b-4 border-blue-500"
                  : ""
              }`}
            >
              <Link
                href={item.href}
                className="text-gray-700 hover:text-black transition"
              >
                {item.label}
              </Link>
              <div className="ml-2">
                <ToggleArrow open={activeIndex === index} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Мобильное меню */}
      <div
        className={`md:hidden bg-gray-50 shadow-inner transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[500px] py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 text-2xl">
          {menuItems.map((item) => (
            <li key={item.href}>
              <button
                className="w-full text-left text-gray-800 font-semibold hover:text-blue-600 active:text-blue-600 focus:text-blue-600"
                onClick={() => handleIndex(item.href)}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li className="pt-10 space-y-2">
            <button
              className="w-full px-4 py-3 border border-blue-500 text-blue-500 hover:bg-gray-100 rounded-2xl"
              onClick={() => handleIndex("/support")}
            >
              Установка замка
            </button>

            <button
              className="w-full px-4 py-3 border border-blue-500 text-blue-500 hover:bg-gray-100 rounded-2xl"
              onClick={() => handleIndex("/products")}
            >
              Подобрать замок
            </button>
          </li>
        </ul>
      </div>
      {/* Выплывающее окно под Nav */}
      <div
        className={`absolute top-full w-full bg-gray-100 shadow-inner transition-all duration-500 ease-in-out transform ${
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
                        onClick={() => handleIndex(`/products${elem.nameUrl}`)}
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
                <FastLink onClick={handleIndex} />
              </div>
            </div>
          </div>
        )}
        {/* smart */}
        {activeIndex === 1 && (
          <div
            className="px-10 text-gray-700 text-base"
            onClick={() => setActiveIndex(null)}
          >
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
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        <div className="p-4 text-center font-semibold bg-white">
                          {elem.name}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                <FastLink onClick={handleIndex} />
              </div>
            </div>
          </div>
        )}
        {/* style */}
        {activeIndex === 2 && (
          <div
            className="px-10 text-gray-700 text-base"
            onClick={() => setActiveIndex(null)}
          >
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
                <FastLink onClick={handleIndex} />
              </div>
            </div>
          </div>
        )}
        {/* support */}
        {activeIndex === 3 && (
          <div
            className="px-10 text-gray-700 text-base"
            onClick={() => setActiveIndex(null)}
          >
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

                <FastLink onClick={handleIndex} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
