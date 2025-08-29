import Image from "next/image";
import React from "react";

const AdvertisingBlock = () => {
  return (
    <div className="w-full mt-20">
      <div className="w-full bg-gray-100">
        <div className="flex flex-col lg:flex-row container mx-auto lg:pl-30">
          {/* Блок с картинкой */}
          <div className="w-full lg:w-1/2 h-96 py-10">
            <div className="relative flex h-full rounded-xl overflow-hidden">
              <Image
                src="/img/21.jpg"
                alt="лучший замок"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* Блок с текстом */}
          <div className="w-full lg:w-1/2 p-5 lg:p-20 flex flex-col justify-center">
            <h1 className="text-5xl font-bold mt-5 text-gray-800">
              pin&tumbler
            </h1>
            <p className="my-5 lg:my-10 text-lg lg:text-2xl tracking-wide text-gray-700">
              Легко запирайте и отпирайте дверь с помощью Apple Watch®, iPhone®
              и домашних ключей, а также управляйте кодами. Благодаря полной
              функциональности Schlage® Home всё под вашим контролем.
            </p>
            <button className="py-4 px-8 rounded-full border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white text-xl transition-colors duration-300">
              ознакомиться
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingBlock;
