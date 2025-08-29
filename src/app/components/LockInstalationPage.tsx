import React from "react";

type supportType = {
  type: string;
  name: string;
  title: string;
};

type lockProps = {
  header: supportType | undefined;
};

const LockInstallationPage = ({ header }: lockProps) => {
  return (
    <div className="text-gray-800 py-30">
      {/* Hero Section */}
      <section className="bg-blue-100 py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">{header?.title}</h1>
        <p className="text-xl mb-6">Надежно. Быстро. Профессионально.</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          Вызвать мастера
        </button>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        {[
          "Работаем по гарантии",
          "Опытные мастера (10+ лет)",
          "Выезд в течение 30 минут",
          "Установка любых типов замков",
          "Удобная оплата (нал/безнал)",
        ].map((benefit, i) => (
          <div key={i} className="bg-blue-50 p-6 rounded-xl shadow">
            <p>{benefit}</p>
          </div>
        ))}
      </section>

      {/* Types of Locks */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Что мы устанавливаем?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "Врезные замки",
            "Накладные замки",
            "Электронные",
            "Механические",
            "Замена цилиндров",
          ].map((type, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow text-center">
              <p>{type}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Как мы работаем
        </h2>
        <ol className="list-decimal list-inside space-y-4 max-w-xl mx-auto">
          <li>Вы оставляете заявку</li>
          <li>Мастер выезжает и консультирует</li>
          <li>Мы подбираем и устанавливаем замок</li>
          <li>Проверка и приёмка</li>
          <li>Вы довольны — мы уехали 😄</li>
        </ol>
      </section>

      {/* Feedback Form */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Оставьте заявку
        </h2>
        <form className="max-w-md mx-auto space-y-4">
          <input
            className="w-full p-3 border rounded"
            type="text"
            placeholder="Имя"
            required
          />
          <input
            className="w-full p-3 border rounded"
            type="tel"
            placeholder="Телефон"
            required
          />
          <input
            className="w-full p-3 border rounded"
            type="text"
            placeholder="Удобное время звонка"
          />
          <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition">
            Получить консультацию
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center p-6">
        <p>
          © {new Date().getFullYear()} Установка замков | Все права защищены
        </p>
      </footer>
    </div>
  );
};

export default LockInstallationPage;
