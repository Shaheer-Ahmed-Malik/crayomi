import ProductCard from "../../components/product/product-card";


export default function checkout() {
  return (
    <div>
      <h1 className="text-2xl font-bold">checkout</h1>
      <p className="text-gray-600 mt-2">this is checkout page</p>
      <div className="grid grid-cols-2 justify-items-center gap-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />

      </div>
    </div>
  );
}


// "use client";
// import Image from "next/image";
// import { FiShoppingCart } from "react-icons/fi";

// export default function ProductCard() {
//   return (
//     <div className="w-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition relative group">
//       {/* Image Section */}
//       <div className="relative aspect-square">
//         <Image
//           src="/product-images/1.jpeg"
//           alt="Product"
//           fill
//           className="object-cover group-hover:scale-105 transition-transform duration-500"
//         />
//       </div>

//       {/* Content Section */}
//       <div className="p-3">
//         <h2 className="text-sm font-semibold text-gray-800 truncate">
//           Kids Stylish Shirt
//         </h2>
//         <p className="text-xs text-gray-500 mt-1 truncate">
//           Soft and comfy cotton shirt
//         </p>

//         {/* Price + Icon Button */}
//         <div className="mt-3 flex items-center justify-between">
//           <span className="text-base font-bold text-purple-600">
//             Rs 750
//           </span>
//           <button className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
//             <FiShoppingCart size={18} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
