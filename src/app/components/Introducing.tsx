import Image from "next/image";
import React from "react";

const Introducing = () => {
  return (
    <div className="container mx-auto bg-teal-100 rounded-xl">
      <div className="flex justify-center mt-20">
        <div className="flex flex-row">
          <div className="w-[60%] p-20">
            <p className="text-3xl">Introducing</p>
            <h1 className="text-5xl mt-5">pin&tumbler</h1>
            <p className="my-15 text-2xl tracking-wider">
              Mosaic Trim Collection - это последний ограниченный выпуск от Pin
              & Tumbler™, нашей новой студии дизайна и инноваций. Благодаря
              свежим стилям и умному дизайну мы переосмысливаем дверное
              оборудование, чтобы помочь вам сделать ваш дом уникально вашим.
            </p>
            <button className="py-4 px-8 rounded-full bg-blue-800/90 hover:bg-white hover:border-2 hover:border-blue-700 text-white hover:text-blue-700 text-xl">
              обзор
            </button>
          </div>
          <div className="w-[40%] h-96">
            <div className="relative flex justify-center w-full h-full">
              <Image
                src="/img/21.jpg"
                alt="лудший замок"
                fill
                className="object-contain my-20"
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
