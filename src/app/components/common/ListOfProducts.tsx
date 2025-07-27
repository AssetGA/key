import Image from "next/image";
import React from "react";
import data from "@/utils/type.json"; // путь к файлу

const ListOfProducts = () => {
  return (
    <div className="w-full overflow-x-auto mt-20">
      <div className="flex justify-center space-x-6 px-4 py-6 ">
        {data.map((product, i) => (
          <div
            key={i}
            className="min-w-[200px] bg-gray-100 hover:shadow-xl rounded-sm overflow-hidden"
          >
            <div className="p-4 text-center font-semibold">{product.name}</div>
            <div className="relative w-full h-60">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListOfProducts;
