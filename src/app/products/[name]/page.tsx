import ContactForm from "@/app/components/ContactForm";
import NavButtons from "@/app/components/NavButtons";
import ProductGrid from "@/app/components/ProductGrid";
import Protect from "@/app/components/Protect";
import { abouts } from "@/utils/abouts";
import React from "react";

interface PageProps {
  params: Promise<{ name: string }>;
}

const page = async ({ params }: PageProps) => {
  const { name } = await params;
  const findByType = abouts.find((elem) => {
    return elem.type === name;
  });

  return (
    <div className="container mx-auto w-full">
      <NavButtons type="products" />
      {findByType !== undefined && (
        <Protect
          right={findByType?.right}
          name={findByType?.name}
          description={findByType?.description}
          image={findByType?.image}
        />
      )}
      <ProductGrid type={name} />
      <ContactForm question="Есть вопросы? Пишите" />
    </div>
  );
};

export default page;
