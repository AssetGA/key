import Image from "next/image";
import React from "react";
import data from "@/utils/type.json"; // путь к файлу

const ListOfProducts = () => {
  return (
    <div className="w-full mt-20 px-4">
      <div
        className="
          grid
          gap-6
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-5
        "
      >
        {data.map((product, i) => (
          <div
            key={i}
            className="bg-gray-100 hover:shadow-xl transition rounded-lg overflow-hidden flex flex-col"
          >
            <div className="p-4 text-center font-semibold">{product.name}</div>
            <div className="relative w-full h-60">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw,
                       (max-width: 1024px) 50vw,
                       25vw"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListOfProducts;
