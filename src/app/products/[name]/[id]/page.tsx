import { fetchProductById, fetchProducts } from "@/app/active/products";
import NavButtons from "@/app/components/NavButtons";
import { IProductType } from "@/app/interface/interface";
import Image from "next/image";
import React from "react";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const products: IProductType[] = await fetchProducts();
  return products.map((product) => ({
    // name: product.name.toLowerCase().replace(/\s+/g, "-"), // Convert to slug format
    id: product._id.toString(),
  }));
}

const Page = async ({ params }: PageProps) => {
  // Changed to PascalCase
  const { id } = await params;
  const product: IProductType | undefined = await fetchProductById(id);

  if (!product) {
    return (
      <div className="container mx-auto w-full pt-45">Product not found</div>
    ); // Handle missing product
  }

  console.log("price", product);

  return (
    <div className="container mx-auto w-full">
      <NavButtons type="products" />
      {/* Add your product details rendering here */}
      <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-lg bg-gray-100"
                >
                  <Image
                    src={`/img/${i}.jpg`} // Replace with actual image URLs
                    alt={`${product.name} variant ${i}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-6 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {product.name}
            </h1>

            <div className="mt-4">
              {" "}
              <p className="text-2xl font-medium text-gray-900">
                {product.price !== undefined
                  ? product.price.toFixed(2) + " тг"
                  : "цену уточните у менеджера"}{" "}
              </p>
            </div>

            <div className="mt-4 space-y-4">
              <p className="text-gray-600">{product.name}</p>

              {/* {product.features && (
                <ul className="list-disc space-y-2 pl-5 text-gray-600">
                  {product.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              )} */}
            </div>

            <div className="mt-6">
              <div className="flex items-center space-x-4">
                <button className="flex-1 rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Заявка на установку
                </button>
                <button className="p-3 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Add to favorites</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="text-sm font-medium text-gray-900">Детали</h2>
              <div className="mt-4 space-y-4">
                {/* {product.details && (
                  <ul className="list-disc space-y-2 pl-5 text-gray-600">
                    {Object.entries(product.details).map(([key, value]) => (
                      <li key={key}>
                        <span className="font-medium">{key}:</span> {value}
                      </li>
                    ))}
                  </ul>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
