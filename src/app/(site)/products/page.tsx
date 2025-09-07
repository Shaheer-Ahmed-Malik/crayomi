// "use client";

// import React, { useState } from "react";
// import ProductCard from "../../components/product/product-card";
// import ButtonSm from "../../components/ui/button-sm";

// // Dummy products
// const products = [
//   { id: 1, name: "Baby Stroller", price: "$120", image: "/products/stroller.jpg" },
//   { id: 2, name: "Kids Toy Car", price: "$45", image: "/products/toy-car.jpg" },
//   { id: 3, name: "Soft Teddy Bear", price: "$25", image: "/products/teddy.jpg" },
//   { id: 4, name: "Baby Shoes", price: "$30", image: "/products/shoes.jpg" },
//   { id: 5, name: "Kids Jacket", price: "$55", image: "/products/jacket.jpg" },
// ];

// export default function ProductsPage() {
//   const [search, setSearch] = useState("");
//   const [isFilterOpen, setIsFilterOpen] = useState(false);

//   return (
//     <div className="flex flex-col md:flex-row">
//       {/* Sidebar (Desktop only) */}
//       <aside className="hidden md:block w-64 bg-white border-r p-6 space-y-8">
//         <h2 className="text-lg font-bold">Filters</h2>

//         <div className="space-y-6">
//           <div>
//             <h3 className="font-semibold mb-2">Category</h3>
//             <div className="flex flex-col space-y-2 text-sm text-gray-600">
//               <label className="hover:text-black"><input type="checkbox" className="mr-2" /> Toys</label>
//               <label className="hover:text-black"><input type="checkbox" className="mr-2" /> Clothes</label>
//               <label className="hover:text-black"><input type="checkbox" className="mr-2" /> Shoes</label>
//             </div>
//           </div>

//           <div>
//             <h3 className="font-semibold mb-2">Price</h3>
//             <div className="flex flex-col space-y-2 text-sm text-gray-600">
//               <label className="hover:text-black"><input type="checkbox" className="mr-2" /> Under $50</label>
//               <label className="hover:text-black"><input type="checkbox" className="mr-2" /> $50 - $100</label>
//               <label className="hover:text-black"><input type="checkbox" className="mr-2" /> Above $100</label>
//             </div>
//           </div>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         {/* Search + Filter Button */}
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
//           <div className="flex-1 relative">
//             <input
//               type="text"
//               placeholder="Search products..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//             {search && (
//               <p className="text-sm text-gray-600 mt-2">
//                 You searched for: <span className="font-medium">{search}</span>
//               </p>
//             )}
//           </div>
//           {/* Filter btn (Mobile only) */}
//           <div className="sm:hidden">
//             <ButtonSm onClick={() => setIsFilterOpen(true)}>Filters</ButtonSm>
//           </div>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="w-full transition-transform transform hover:scale-105"
//             >
//               <ProductCard product={product} />
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* Mobile Filters Drawer */}
//       <div
//         className={`fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-white z-50 shadow-lg transform transition-transform duration-300 ${
//           isFilterOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex flex-col h-full justify-between">
//           <div>
//             {/* Close btn */}
//             <div className="flex justify-end p-4">
//               <button onClick={() => setIsFilterOpen(false)} className="text-2xl">
//                 ✕
//               </button>
//             </div>

//             <div className="px-6 space-y-6">
//               <h2 className="text-lg font-bold">Filters</h2>

//               <div>
//                 <h3 className="font-semibold mb-2">Category</h3>
//                 <div className="flex flex-col space-y-2 text-sm text-gray-600">
//                   <label><input type="checkbox" className="mr-2" /> Toys</label>
//                   <label><input type="checkbox" className="mr-2" /> Clothes</label>
//                   <label><input type="checkbox" className="mr-2" /> Shoes</label>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="font-semibold mb-2">Price</h3>
//                 <div className="flex flex-col space-y-2 text-sm text-gray-600">
//                   <label><input type="checkbox" className="mr-2" /> Under $50</label>
//                   <label><input type="checkbox" className="mr-2" /> $50 - $100</label>
//                   <label><input type="checkbox" className="mr-2" /> Above $100</label>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Bottom action btns */}
//           <div className="p-6 border-t border-gray-200">
//             <ButtonSm className="w-full text-white">Apply Filters</ButtonSm>
//           </div>
//         </div>
//       </div>

//       {/* Overlay */}
//       {isFilterOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
//           onClick={() => setIsFilterOpen(false)}
//         />
//       )}
//     </div>
//   );
// }


"use client";

import React, { useState } from "react";
import ProductCard from "../../components/product/product-card";
import ButtonSm from "../../components/ui/button-sm";
import { FaArrowUp } from "react-icons/fa";
import Image from "next/image";

// Dummy products (20+ for testing pagination)
const products = [
  { id: 1, name: "Baby Stroller", price: "rs 20120", image: "/product-images/1.jpeg" },
  { id: 2, name: "Kids Toy Car", price: "rs 2045", image: "/product-images/1.jpeg" },
  { id: 3, name: "Soft Teddy Bear", price: "rs 2025", image: "/product-images/1.jpeg" },
  { id: 4, name: "Baby Shoes", price: "rs 2030", image: "/product-images/1.jpeg" },
  { id: 5, name: "Kids Jacket", price: "rs 2055", image: "/product-images/1.jpeg" },
  { id: 6, name: "Baby Cot", price: "rs 20200", image: "/product-images/1.jpeg" },
  { id: 7, name: "Toy Train", price: "rs 2040", image: "/product-images/1.jpeg" },
  { id: 8, name: "Baby Bottle", price: "rs 2015", image: "/product-images/1.jpeg" },
  { id: 9, name: "Toy Robot", price: "rs 2060", image: "/product-images/1.jpeg" },
  { id: 10, name: "Baby Blanket", price: "rs 2035", image: "/product-images/1.jpeg" },
  { id: 11, name: "Toy Blocks", price: "rs 2020", image: "/product-images/1.jpeg" },
  { id: 12, name: "Baby Swing", price: "rs 20150", image: "/product-images/1.jpeg" },
  { id: 13, name: "Toy Drone", price: "rs 2080", image: "/product-images/1.jpeg" },
  { id: 14, name: "Kids Backpack", price: "rs 2025", image: "/product-images/1.jpeg" },
  { id: 15, name: "Baby Socks", price: "rs 2010", image: "/product-images/1.jpeg" },
  { id: 16, name: "Toy Puzzle", price: "rs 2018", image: "/product-images/1.jpeg" },
  { id: 17, name: "Kids Cap", price: "rs 2012", image: "/product-images/1.jpeg" },
  { id: 18, name: "Baby Chair", price: "rs 2090", image: "/product-images/1.jpeg" },
  { id: 19, name: "Toy Bike", price: "rs 2070", image: "/product-images/1.jpeg" },
  { id: 20, name: "Baby Crib", price: "rs 20250", image: "/product-images/1.jpeg" },
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="flex flex-col f md:flex-row">
      {/* Sidebar (Desktop only) */}
      <aside className="hidden md:block py-8 w-64 bg-white border-r py-4 px-10 space-y-8">
        <h2 className="text-lg font-bold">Filters</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Category</h3>
            <div className="flex flex-col space-y-2 text-sm text-gray-600">
              <label><input type="checkbox" className="mr-2" /> Toys</label>
              <label><input type="checkbox" className="mr-2" /> Clothes</label>
              <label><input type="checkbox" className="mr-2" /> Shoes</label>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Price</h3>
            <div className="flex flex-col space-y-2 text-sm text-gray-600">
              <label><input type="checkbox" className="mr-2" /> Under rs 2050</label>
              <label><input type="checkbox" className="mr-2" /> rs 2050 - rs 20100</label>
              <label><input type="checkbox" className="mr-2" /> Above rs 20100</label>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex- p-8">
        {/* Search + Filter Button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {search && (
              <p className="text-sm text-gray-600 mt-2">
                You searched for: <span className="font-medium">{search}</span>
              </p>
            )}
          </div>
          {/* Filter btn (Mobile only) */}
          <div className="sm:hidden flex items-center justify-between">
            <div className=" text-white">
              <ButtonSm onClick={() => setIsFilterOpen(true)}>Filters</ButtonSm>
            </div>
            <div className="flex items-center gap-2">
              <p>Price</p>
              <FaArrowUp />
            </div>
          </div>
          

        </div>

        {/* Products Grid */}
        <div className="grid gap-4 justify-items-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 w-full ">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className=" transition-transform transform hover:scale-105"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10">
          <div className="inline-flex border border-gray-300 rounded">
            {/* First button */}
            <button
              onClick={() => setCurrentPage(1)}
              className={`px-4 py-2 text-sm border-r border-gray-300 ${
                currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-blue-600"
              }`}
              disabled={currentPage === 1}
            >
              First
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 text-sm border-r border-gray-300 ${
                  currentPage === i + 1
                    ? "bg-blue-500 text-white"
                    : "text-blue-600 hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}

            {/* Next button */}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className={`px-4 py-2 text-sm ${
                currentPage === totalPages
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-blue-600"
              }`}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>

      </main>

      {/* Mobile Filters Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isFilterOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-between">
          <div>
            {/* Close btn */}
            <div className="flex justify-end p-4">
              <button onClick={() => setIsFilterOpen(false)} className="text-2xl">
                ✕
              </button>
            </div>

            <div className="px-6 space-y-6">
              <h2 className="text-lg text-blue-600">Filters</h2>

              <div>
                <h3 className="font-semibold mb-2">Category</h3>
                <div className="flex flex-col space-y-2 text-sm text-gray-600">
                  <label><input type="checkbox" className="mr-2" /> Toys</label>
                  <label><input type="checkbox" className="mr-2" /> Clothes</label>
                  <label><input type="checkbox" className="mr-2" /> Shoes</label>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Price</h3>
                <div className="flex flex-col space-y-2 text-sm text-gray-600">
                  <label><input type="checkbox" className="mr-2" /> Under $50</label>
                  <label><input type="checkbox" className="mr-2" /> $50 - $100</label>
                  <label><input type="checkbox" className="mr-2" /> Above $100</label>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom action btns */}
          <div className="p-6 border-t border-gray-200">
            <ButtonSm className="w-full text-white">Apply Filters</ButtonSm>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isFilterOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsFilterOpen(false)}
        />
      )}
    </div>
  );
}
