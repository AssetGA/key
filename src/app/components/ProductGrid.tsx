"use client";
import Link from "next/link";
// components/ProductGrid.tsx

import { useAppSelector } from "../store/hooks";
import ProductCard from "./ProductCard";

type GridProduct = {
  type: string;
};

export default function ProductGrid({ type }: GridProduct) {
  const products = useAppSelector((state) => state.product.entity);

  const productList = products.filter((elem) => {
    return elem.type === type;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 my-20">
      {productList.length > 0 ? (
        productList.map((product, index) => (
          <Link href={`/products/${type}/${product._id}`} key={index}>
            <ProductCard product={product} />
          </Link>
        ))
      ) : (
        <div className="font-bold text-2xl">
          Продукция будет доступна в скором времени
        </div>
      )}
    </div>
  );
}
