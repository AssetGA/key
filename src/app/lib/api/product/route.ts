import { NextRequest, NextResponse } from "next/server";
import Product, { IProduct } from "@/app/lib/models/Product";
import { connectToDatabase } from "@/app/lib/mongodb";

// Типы для продукта и перевода (можно расширить по модели)

export async function GET(request: NextRequest) {
  await connectToDatabase();
  // const url = new URL(request.url);
  // const lang = url.searchParams.get("lang");

  try {
    const list: IProduct[] = await Product.find();
    return NextResponse.json(list, { status: 200 });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      {
        message: "На сервере произошла ошибка, попробуйте позже.",
      },
      { status: 500 }
    );
  }
}
