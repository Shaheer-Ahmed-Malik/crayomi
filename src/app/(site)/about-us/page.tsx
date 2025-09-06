// import Image from "next/image";
// import Link from "next/link";

// export default function about() {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">About</h1>
//       <p className="text-gray-600 mt-2">this is about page</p>
//       <div className="grid grid-cols-2 md:grid-cols-4 justify-between items-center text-white">
//                       {/* 1 */}
//                       <div className="relative h-44 w-44 md:h-72 md:w-72 group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
//                         <Link href="#">
//                           <Image
//                             src="/categories/clothes.jpg"
//                             alt="Category Image"
//                             fill
//                             className="object-cover group-hover:brightness-110 transition duration-300"
//                           />
//                           <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition">
//                             <h2 className="text-2xl font-bold">Cloths</h2>
//                             <p className="text-lg">5 items</p>
//                           </div>
//                         </Link>
//                       </div>
//                       {/* 1 */}
//                       <div className="relative h-44 w-44 md:h-72 md:w-72 group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
//                         <Link href="#">
//                           <Image
//                             src="/categories/clothes.jpg"
//                             alt="Category Image"
//                             fill
//                             className="object-cover group-hover:brightness-110 transition duration-300"
//                           />
//                           <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition">
//                             <h2 className="text-2xl font-bold">Cloths</h2>
//                             <p className="text-lg">5 items</p>
//                           </div>
//                         </Link>
//                       </div>
//                       </div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Clothes",
    items: 5,
    image: "/categories/clothes.jpg",
    link: "/products/clothes",
  },
  {
    title: "Shoes",
    items: 8,
    image: "/categories/shoes.jpg",
    link: "/products/shoes",
  },
  {
    title: "Toys",
    items: 12,
    image: "/categories/toys.jpg",
    link: "/products/toys",
  },
  {
    title: "Bags",
    items: 4,
    image: "/categories/bags.jpg",
    link: "/products/bags",
  },
];

export default function Categories() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white p-6">
      {categories.map((cat, index) => (
        <div
          key={index}
          className="relative h-44 w-44 md:h-72 md:w-72 group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
        >
          <Link href={cat.link}>
            {/* Image */}
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              className="object-cover group-hover:brightness-110 transition duration-300"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition">
              <h2 className="text-2xl font-bold">{cat.title}</h2>
              <p className="text-lg">{cat.items} items</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
