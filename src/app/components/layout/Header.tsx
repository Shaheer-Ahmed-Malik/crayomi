import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";



const Header = () => {
  return (
    <div>

      <div className='flex justify-between items-center py-4 px-10'>
        {/* logo */}

        <div className='flex items-center md:space-x-10' >
            <Link href='/'>
            <Image 
                src="/logo/logo.png"
                alt="Logo"
                width={100}
                height={50}
            />
            </Link>
            {/* mobile hamburger menu */}
            
                

            {/* nav button */}
            <div className='hidden md:block'>
                <ul className='flex space-x-8'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/products" >Products</Link></li>
                </ul>   
            </div>
            
        </div>
        <div>
                <RxHamburgerMenu className='md:hidden text-3xl' />
        </div>

        {/* search feild and icon */}
        <div className='hidden md:block'>
            <div className='flex items-center space-x-8 '>
                <div className='flex rounded-full border-[1px] border-gray-600 p-2 items-center'>
                <input 
                    className='outline-none'
                    type="text"
                    placeholder='search for toys,clothes.....'
                    /> 
                    <CiSearch />

                </div>
                
                <FiShoppingCart />
            </div>
        </div>
        
        
      </div>

    </div>
  )
}

export default Header
