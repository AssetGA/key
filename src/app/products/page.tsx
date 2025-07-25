import React from "react";
import Protect from "../components/Protect";
import AboutBlock from "../components/common/AboutBlock";
import ProductSlider from "../components/common/ProductSlider";
import Link from "next/link";

type Props = {};

const products = [
  { name: "Умный замок", img: "/img/1.jpg" },
  { name: "Дверная ручка", img: "/img/2.jpg" },
  { name: "WiFi контроллер", img: "/img/5.jpg" },
  { name: "Модуль BLE", img: "/img/9.jpg" },
  { name: "Сканер отпечатка", img: "/img/6.jpg" },
  { name: "Цилиндр", img: "/img/7.jpg" },
];

const page = (props: Props) => {
  return (
    <div className="container mx-auto w-full pt-45">
      <ul className="flex flex-row">
        <li className="mx-2">
          <Link href="/">На главную</Link>
        </li>
        {" / "}
        <li className="mx-2">Продукция</li>
      </ul>
      <Protect
        right={true}
        name="Защитите то, что важнее всего."
        description="Инвестируйте в ваше спокойствие. Наши продукты и решения созданы для
            того, чтобы продолжать развиваться вместе с вами. Защитите то, что
            важнее всего - сегодня, завтра и далее. Доверь свой дом в лудшее."
        image="/img/1.jpg"
      />
      <AboutBlock
        right={true}
        name="Умные замки сделаны простыми и безопасными."
        description="Прекратите поиск ключей. Инновационные функции, интеграция с умным
            домом и улучшенная безопасность делают замок с умной дверью простым
            способом обеспечения безопасности вашего дома."
        image="/img/9.jpg"
      />
      <ProductSlider products={products} />
      <AboutBlock
        right={false}
        name="Умные замки сделаны простыми и безопасными."
        description="Прекратите поиск ключей. Инновационные функции, интеграция с умным
            домом и улучшенная безопасность делают замок с умной дверью простым
            способом обеспечения безопасности вашего дома."
        image="/img/9.jpg"
      />
      <ProductSlider products={products} />
    </div>
  );
};

export default page;
