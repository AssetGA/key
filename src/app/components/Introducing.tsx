import Image from "next/image";
import React from "react";

const Introducing = () => {
  return (
    <div className="container mx-auto bg-teal-100 rounded-xl">
      <div className="flex justify-center mt-20">
        <div className="flex flex-col md:flex-row">
          {/* Текст */}
          <div className="w-full md:w-3/5 p-6 md:p-20">
            <p className="text-2xl md:text-3xl">Introducing</p>
            <h1 className="text-3xl md:text-5xl mt-4">pin&tumbler</h1>
            <p className="my-6 md:my-10 text-lg md:text-2xl tracking-wide leading-relaxed">
              Mosaic Trim Collection - это последний ограниченный выпуск от Pin
              & Tumbler™, нашей новой студии дизайна и инноваций. Благодаря
              свежим стилям и умному дизайну мы переосмысливаем дверное
              оборудование, чтобы помочь вам сделать ваш дом уникально вашим.
            </p>
            <button className="py-3 px-6 md:py-4 md:px-8 rounded-full bg-blue-800/90 hover:bg-white hover:border-2 hover:border-blue-700 text-white hover:text-blue-700 text-lg md:text-xl transition">
              обзор
            </button>
          </div>

          {/* Картинка */}
          <div className="w-full md:w-2/5 hidden md:flex h-64 md:h-96">
            <div className="relative flex justify-center w-full h-full">
              <Image
                src="/img/21.jpg"
                alt="лудший замок"
                fill
                className="object-contain md:my-6"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introducing;
