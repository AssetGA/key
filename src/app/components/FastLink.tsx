import React from "react";

type FastLinkProps = {
  onClick: (name: string) => void;
};

const FastLink: React.FC<FastLinkProps> = ({ onClick }) => {
  const handleSubmit = (name: string) => {
    onClick(name);
  };

  return (
    <div className="my-3">
      <h2 className="text-2xl text-blue-400 py-5 border-b-2 border-blue-500">
        Быстрые ссылки
      </h2>
      <ul className="space-y-5 py-15 text-xl">
        <li className="flex justify-end hover:text-blue-500 hover:underline transition-colors duration-700">
          <button onClick={() => handleSubmit("/support/lock")}>
            Установка замков
          </button>
        </li>
        <li className="flex justify-end hover:text-blue-500 hover:underline transition-colors duration-700">
          <button onClick={() => handleSubmit("/support/handle")}>
            Установка ручек
          </button>
        </li>
        <li className="flex justify-end hover:text-blue-500 hover:underline transition-colors duration-700">
          <button onClick={() => handleSubmit("/gallery")}>Наши работы</button>
        </li>
      </ul>
    </div>
  );
};

export default FastLink;
