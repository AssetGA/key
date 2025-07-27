import ContactForm from "@/app/components/ContactForm";
import ProductGrid from "@/app/components/ProductGrid";
import Protect from "@/app/components/Protect";
import Link from "next/link";
import React from "react";

interface PageProps {
  params: Promise<{ name: string }>;
}
const abouts = [
  {
    right: true,
    name: "Умные замки",
    description:
      "Инновационные умные замки обеспечивают удобство и безопасность. Управляйте доступом через смартфон или Apple Watch и забудьте о традиционных ключах.",
    image: "/img/9.jpg",
    type: "smart",
  },
  {
    right: false,
    name: "Замки",
    description:
      "Надёжные и прочные замки для дома и офиса от проверенных производителей. Идеальное решение для защиты вашего имущества.",
    image: "/img/10.jpg",
    type: "lock",
  },
  {
    right: true,
    name: "Ручки",
    description:
      "Современные и эргономичные дверные ручки, сочетающие комфорт и стиль. Подходят для любых интерьеров.",
    image: "/img/levers-hero.png",
    type: "handles",
  },
  {
    right: false,
    name: "Круглые ручки",
    description:
      "Эстетичные круглые ручки с удобным захватом. Отличный выбор для дверей в жилых и коммерческих помещениях.",
    image: "/img/10.jpg",
    type: "handlesrounded",
  },
  {
    right: true,
    name: "Засовы",
    description:
      "Прочные засовы для дополнительной защиты. Подходят для входных и межкомнатных дверей, обеспечивая максимальную надёжность.",
    image: "/img/10.jpg",
    type: "bolts",
  },
];

const page = async ({ params }: PageProps) => {
  const { name } = await params;
  const findByType = abouts.find((elem) => {
    return elem.type === name;
  });
  return (
    <div className="container mx-auto w-full pt-45">
      <ul className="flex flex-row">
        <li className="mx-2 hover:underline">
          <Link href="/">На главную</Link>
        </li>
        {" / "}
        <li className="mx-2 hover:underline">
          <Link href={`/products`}>Продукция</Link>
        </li>{" "}
        {" / "}
        <li className="mx-2 text-blue-700">{name}</li>
      </ul>
      {findByType !== undefined && (
        <Protect
          right={findByType?.right}
          name={findByType?.name}
          description={findByType?.description}
          image={findByType?.image}
        />
      )}
      <ProductGrid type={name} />
      <ContactForm />
    </div>
  );
};

export default page;
