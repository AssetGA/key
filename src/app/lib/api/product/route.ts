import { NextResponse } from "next/server";
import Product, { IProduct } from "@/app/lib/models/Product";
import { connectToDatabase } from "@/app/lib/mongodb";

// Типы для продукта и перевода (можно расширить по модели)

// Shared error type guard (could be in a separate utils file)
function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === "string") {
    return error;
  }
  return "На сервере произошла ошибка, попробуйте позже.";
}

export async function GET() {
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
        message: getErrorMessage(error),
      },
      { status: 500 }
    );
  }
}
