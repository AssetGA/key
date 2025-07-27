import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-4">О Нас</h3>
          <p className="text-gray-400">
            Мы стремимся обеспечить качественные, стильные и умные решения для
            современной жизни.
          </p>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Продукция</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/product" className="hover:text-white transition">
                Замки
              </a>
            </li>
            <li>
              <a href="/style" className="hover:text-white transition">
                Ручки
              </a>
            </li>
            <li>
              <a href="/smart" className="hover:text-white transition">
                Умные системы
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Услуги</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/product" className="hover:text-white transition">
                Поиск установщика
              </a>
            </li>
            <li>
              <a href="/style" className="hover:text-white transition">
                Вопросы
              </a>
            </li>
            <li>
              <a href="/smart" className="hover:text-white transition">
                Гарантия
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Контакты</h3>
          <ul className="text-gray-400 space-y-2">
            <li>почта: info@example.com</li>
            <li>whatsapp: +123 456 789</li>
            <li>mobile: +77756999475</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; 2025 All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
