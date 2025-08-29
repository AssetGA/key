import React from "react";
import Protect from "../components/Protect";
import AboutBlock from "../components/common/AboutBlock";
import ProductSlider from "../components/common/ProductSlider";
import NavButtons from "../components/NavButtons";
import { IProductType } from "../interface/interface";
import { fetchProducts } from "../active/products";

const page = async () => {
  const products: IProductType[] | undefined = await fetchProducts();

  if (!products) {
    return <div className="container mx-auto w-full">Product not found</div>; // Handle missing product
  }

  const getProductsByType = (type: string) =>
    products.filter((elem) => elem.type === type);

  return (
    <main className="container mx-auto w-full mb-5">
      <NavButtons type="products" />
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
      {getProductsByType("smart").length > 0 && (
        <ProductSlider products={getProductsByType("smart")} />
      )}
      <AboutBlock
        right={false}
        name="Замки проверенные временем"
        description="Надежные замки которые мы рекомендуем. Они будут хранить ваше имущество и ваших близких."
        image="/img/9.jpg"
      />
      {getProductsByType("lock").length > 0 && (
        <ProductSlider products={getProductsByType("lock")} />
      )}
      <AboutBlock
        right={true}
        name="Ручки для дверей комнатных"
        description=""
        image="/img/9.jpg"
      />
      {getProductsByType("handles").length > 0 && (
        <ProductSlider products={getProductsByType("handles")} />
      )}
    </main>
  );
};

export default page;
