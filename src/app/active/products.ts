"use server";

import fetch from "node-fetch";
import { IProductType } from "../interface/interface";

export async function fetchProducts(): Promise<IProductType[]> {
  try {
    const url = new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/lib/api/product`);
    // url.searchParams.append("lang", lang); // Добавляем параметр lang
    const res = await fetch(url.href);
    if (!res.ok) throw new Error("Ошибка при загрузке товаров");
    const products = (await res.json()) as IProductType[];
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Возвращаем пустой массив, если произошла ошибка
  }
}

export async function fetchProductById(
  id: string
): Promise<IProductType | undefined> {
  try {
    const url = new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/lib/api/product`);
    // url.searchParams.append("lang", lang); // Добавляем параметр lang
    const res = await fetch(url.href);
    if (!res.ok) throw new Error("Ошибка при загрузке товаров");

    const products = (await res.json()) as IProductType[];

    const findProduct: IProductType | undefined = products.find((elem) => {
      return elem._id === id;
    });
    return findProduct;
  } catch (error) {
    console.error("Error fetching products:", error);
    return undefined; // Возвращаем пустой массив, если произошла ошибка
  }
}
