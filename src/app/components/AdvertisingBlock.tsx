import Image from "next/image";
import React from "react";

const AdvertisingBlock = () => {
  return (
    <div className=" w-full mt-20">
      <div className="w-full bg-gray-100">
        <div className="flex flex-row container mx-auto pl-30">
          <div className="w-full h-96">
            <div className="relative flex w-full h-full">
              <Image
                src="/img/21.jpg"
                alt="лудший замок"
                fill
                className="object-contain my-20"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <div className="p-20">
            <h1 className="text-5xl mt-5">pin&tumbler</h1>
            <p className="my-15 text-2xl tracking-wider">
              Легко запирайте и отпирайте дверь с помощью Apple Watch®, iPhone®
              и домашних клавиш, а также легко управляйте кодами и т. Д.
              Благодаря полной функциональности Schlage® Home прямо у вас под
              рукой.
            </p>
            <button className="py-4 px-8 rounded-full border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white text-xl">
              ознакомиться
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingBlock;
