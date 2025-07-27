import Product, { IProduct } from "@/app/lib/models/Product";
import productMock from "../app/lib/mock/product.json";

import { Model, Document } from "mongoose";

// Основная инициализация
export default async function initDatabase(): Promise<void> {
  const products = await Product.find();

  if (products.length !== productMock.length) {
    await createInitialEntity<IProduct>(Product, productMock);
  }
}

// Удаляет коллекцию и создает новые записи
async function createInitialEntity<T extends Document>(
  Model: Model<T>,
  data: Partial<T>[]
): Promise<(T | unknown)[]> {
  try {
    await Model.collection.drop();
  } catch (error) {
    // если коллекции нет — просто продолжаем
    console.warn("Коллекция не найдена или уже пуста:", error);
  }

  return Promise.all(
    data.map(async (item) => {
      try {
        delete item._id;
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (e) {
        console.error("Create error:", e);
        return e;
      }
    })
  );
}

// То же самое, но вставляет внешний ID (например, внешний ключ)
// async function createInitialEntityNew<T extends Document>(
//   Model: Model<T>,
//   data: Partial<T>[],
//   field: string,
//   list: (Types.ObjectId | string)[]
// ): Promise<(T | unknown)[]> {
//   try {
//     await Model.collection.drop();
//   } catch (error) {
//     console.warn("Коллекция не найдена или уже пуста:", error);
//   }

//   return Promise.all(
//     data.map(async (item, index) => {
//       try {
//         // @ts-expect-error — в случае если _id нет в item
//         delete item._id;
//         const newItem = new Model({ ...item, [field]: list[index] });

//         if ((item as any)?.[field] !== list[index]) {
//           await newItem.save();
//           return newItem;
//         }
//       } catch (e) {
//         console.error("Create error:", e);
//         return e;
//       }
//     })
//   );
// }
