import React from "react";

const FastLink = () => {
  return (
    <div className="my-3">
      <h2 className="text-2xl text-blue-400 py-5 border-b-2 border-blue-500">
        Быстрые ссылки
      </h2>
      <ul className="space-y-5 py-15 text-xl">
        <li className="flex justify-end hover:text-blue-500 hover:underline transition-colors duration-700">
          Установка замков
        </li>
        <li className="flex justify-end hover:text-blue-500 hover:underline transition-colors duration-700">
          Установка ручек
        </li>
        <li className="flex justify-end hover:text-blue-500 hover:underline transition-colors duration-700">
          Наши работы
        </li>
      </ul>
    </div>
  );
};

export default FastLink;
