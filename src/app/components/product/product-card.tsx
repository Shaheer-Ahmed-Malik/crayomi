"use client";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

type Product = {
  id?: number;
  name?: string;
  price?: string;
  image?: string;
};

interface ProductCardProps {
  product?: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Default (hardcoded) values + override if props exist
  const name = product?.name || "Kids Stylish Shirt";
  const price = product?.price || "Rs 750";
  const image = product?.image || "/product-images/1.jpeg";

  return (
    <div className="w-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition relative group">
      {/* Image Section */}
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content Section */}
      <div className="p-3">
        <h2 className="text-sm font-semibold text-gray-800 truncate">{name}</h2>
        <p className="text-xs text-gray-500 mt-1 truncate">
          Stylish and comfy for kids
        </p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-base font-bold text-purple-600">{price}</span>
          <button className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
            <FiShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
