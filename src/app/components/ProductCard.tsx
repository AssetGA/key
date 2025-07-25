import Image from "next/image";

// components/ProductCard.tsx
type Product = {
  _id: string;
  name: string;
  mark: string;
  country: string;
  imageUrl: string;
  type: string;
  quantity?: number;
  price?: number;
  createdAt: Date;
  updatedAt: Date;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className="relative w-full h-96">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="w-full h-96 object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-lg text-gray-700 mt-2">{product.price} тг</p>
      </div>
    </div>
  );
}
