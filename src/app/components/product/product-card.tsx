"use client";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

export default function ProductCard() {
  return (
    <div className="w-36 sm:w-44 md:w-56 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition relative group">
      {/* Image Section */}
      <div className="relative w-full h-28 sm:h-36 md:h-44">
        <Image
          src="/product-images/1.jpeg" // apni image ka path (public folder)
          alt="Product"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content Section */}
      <div className="p-2 sm:p-3">
        <h2 className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 truncate">
          Kids Stylish Shirt
        </h2>
        <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 mt-1 truncate">
          Soft and comfy cotton shirt
        </p>

        {/* Price + Icon Button */}
        <div className="mt-2 sm:mt-3 flex items-center justify-between">
          <span className="text-sm sm:text-base md:text-lg font-bold text-purple-600">
            Rs 750
          </span>
          <button className="p-1.5 sm:p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
            <FiShoppingCart size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
