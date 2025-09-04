import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ButtonSm from './components/ui/button-sm';
import Banner from './components/ui/Banner';
import ProductCard from './components/product/product-card';

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
        <div className="grid grid-cols-4 justify-between items-center text-white">
                {/* 1 */}
                <div className="relative h-72 w-72 group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
                  <Link href="#">
                    <Image
                      src="/categories/clothes.jpg"
                      alt="Category Image"
                      fill
                      className="object-cover group-hover:brightness-110 transition duration-300"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition">
                      <h2 className="text-2xl font-bold">Cloths</h2>
                      <p className="text-lg">5 items</p>
                    </div>
                  </Link>
                </div>
                {/* 2 */}
                <div className="relative h-72 w-72 group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
                  <Link href="#">
                    <Image
                      src="/categories/toys.jpg"
                      alt="Category Image"
                      fill
                      className="object-cover group-hover:brightness-110 transition duration-300"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition">
                      <h2 className="text-2xl font-bold">Toys</h2>
                      <p className="text-lg">5 items</p>
                    </div>
                  </Link>
                </div>              
                {/* 3 */}
                <div className="relative h-72 w-72 group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
                  <Link href="#">
                    <Image
                      src="/categories/craft.jpg"
                      alt="Category Image"
                      fill
                      className="object-cover group-hover:brightness-110 transition duration-300"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition">
                      <h2 className="text-2xl font-bold">Craft</h2>
                      <p className="text-lg">5 items</p>
                    </div>
                  </Link>
                </div>
                {/* 4 */}
                <div className="relative h-72 w-72 group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
                  <Link href="#">
                    <Image
                      src="/categories/Educationaltoys.jpg"
                      alt="Category Image"
                      fill
                      className="object-cover group-hover:brightness-110 transition duration-300"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition">
                      <h2 className="text-2xl font-bold">Educational Toys</h2>
                      <p className="text-lg">5 items</p>
                    </div>
                  </Link>
                </div>

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