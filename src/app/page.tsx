"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Banner from './components/ui/Banner';
import ProductCard from './components/product/product-card';

const categories = [
  {
    title: "Clothes",
    items: 5,
    image: "/categories/clothes.jpg",
    link: "/products/clothes",
  },
  {
    title: "Toys",
    items: 5,
    image: "/categories/toys.jpg",
    link: "/products/toys",
  },
  {
    title: "Craft",
    items: 5,
    image: "/categories/craft.jpg",
    link: "/products/craft",
  },
  {
    title: "Educational Toys",
    items: 5,
    image: "/categories/educationaltoy.jpg",
    link: "/products/educationaltoy",
  },
];

export default function Home() {
  return (
    <div>
      {/* hero */}
        <Banner />

      {/* category */} 
      <div  className='py-24 px-10 space-y-20'>
        <div className=' text-center space-y-2 mb-6'>
          <h1>
            Shop by category
          </h1>
          <p>
            Find the perfect products for your little ones
          </p>

        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white justify-items-center">
      {categories.map((cat, index) => (
        <div
          key={index}
          className="relative h-40 w-40 sm:h-52 sm:w-52 md:h-72 md:w-72 group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
        >
          <Link href={cat.link}>
            {/* Image */}
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              className="object-cover group-hover:brightness-110 transition duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition">
              <h2 className="text-sm sm:text-lg md:text-2xl font-bold">{cat.title}</h2>
              <p className="text-xs sm:text-sm md:text-lg">{cat.items} items</p>
            </div>
          </Link>
        </div>
      ))}
    </div>       
      </div> 
      {/* featured products */}
      <div  className='py-10 px-10 space-y-20 bg-gray-100'>
        <div className=' text-center space-y-2 mb-10'>
          <h1>
            Featured Products
          </h1>
          <p>
            Browse through our handpicked selection of top-quality items
          </p>

        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
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
    </div>
  );
}