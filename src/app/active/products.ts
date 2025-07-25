"use server";

import fetch from "node-fetch";
import { IProduct } from "../lib/models/Product";

export async function fetchProducts() {
  try {
    const url = new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/lib/api/product`);
    // url.searchParams.append("lang", lang); // Добавляем параметр lang
    const res = await fetch(url.href);
    if (!res.ok) throw new Error("Ошибка при загрузке товаров");
    const products = await res.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Возвращаем пустой массив, если произошла ошибка
  }
}

export async function fetchProductById(id: string) {
  try {
    const url = new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/lib/api/product`);
    // url.searchParams.append("lang", lang); // Добавляем параметр lang
    const res = await fetch(url.href);
    if (!res.ok) throw new Error("Ошибка при загрузке товаров");

    const products: IProduct[] = await res.json();
    const findProduct = products.find((elem) => {
      return elem._id === id;
    });
    return findProduct || null;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Возвращаем пустой массив, если произошла ошибка
  }
}
