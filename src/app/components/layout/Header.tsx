"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiX } from "react-icons/fi";
import ButtonSm from "../ui/button-sm";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center py-2 px-4 md:py-4 md:px-10">
        {/* logo + nav */}
        <div className="flex items-center md:space-x-10">
          <Link href="/">
            <Image src="/logo/logo.png" alt="Logo" width={100} height={50} />
          </Link>

          {/* Desktop nav */}
        <div className="hidden md:block">
  <ul className="flex space-x-8">
    <li>
      <Link
        href="/"
        className="transition duration-300 hover:bg-primary-gradient hover:bg-clip-text hover:text-transparent"
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        href="/about"
        className="transition duration-300 hover:bg-primary-gradient hover:bg-clip-text hover:text-transparent"
      >
        About
      </Link>
    </li>
    <li>
      <Link
        href="/contact"
        className="transition duration-300 hover:bg-primary-gradient hover:bg-clip-text hover:text-transparent"
      >
        Contact
      </Link>
    </li>
    <li>
      <Link
        href="/products"
        className="transition duration-300 hover:bg-primary-gradient hover:bg-clip-text hover:text-transparent"
      >
        Products
      </Link>
    </li>
  </ul>
</div>


        </div>

        {/* Hamburger (mobile only) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <RxHamburgerMenu className="text-3xl" />
          </button>
        </div>

        {/* search + cart + auth (desktop only) */}
      <div className="hidden md:flex items-center space-x-8">
        {/* search */}
        <div className="flex rounded-full border border-gray-600 p-2 items-center">
          <input
            className="outline-none w-40"
            type="text"
            placeholder="Search..."
          />
          <CiSearch />
        </div>

        {/* cart */}
        <FiShoppingCart className="text-2xl cursor-pointer" />

        {/* auth/profile */}
        {/* auth/profile */}
        {false ? (
          <Image
            src="/profile/user.jpg"
            alt="User"
            width={36}
            height={36}
            className="rounded-full cursor-pointer"
          />
        ) : (
          <div className="flex items-center gap-3">
            <Link href="/login">
              <ButtonSm className="bg-transparent border border-gray-400 text-gray-700 hover:bg-gray-100">
                Login
              </ButtonSm>
            </Link>
            <Link href="/signup">
              <ButtonSm>
                Sign Up
              </ButtonSm>
            </Link>
          </div>
        )}

      </div>

      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile slide menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-white z-50 shadow-lg flex flex-col justify-between transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* close btn */}
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)}>
              <FiX className="text-2xl" />
            </button>
          </div>

          {/* search + cart (mobile) */}
          <div className="px-6 mb-6 flex items-center space-x-4">
            <div className="flex flex-1 rounded-full border border-gray-400 p-2 items-center">
              <input
                className="flex-1 outline-none text-sm"
                type="text"
                placeholder="Search..."
              />
              <CiSearch className="text-lg" />
            </div>
            <FiShoppingCart className="text-2xl text-gray-700" />
          </div>

          {/* nav links */}
          <nav className="flex flex-col gap-6 px-6 text-lg text-gray-800">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link href="/products" onClick={() => setIsOpen(false)}>
              Products
            </Link>
          </nav>
        </div>

        {/* bottom section (login/signup) */}
        <div className="p-6 border-t border-gray-200">
          <div className="flex flex-col gap-4">
            {/* Login */}
            <Link href="/login" onClick={() => setIsOpen(false)}>
              <ButtonSm className="w-full bg-transparent border border-gray-400 text-gray-700 hover:bg-gray-100">
                Login
              </ButtonSm>
            </Link>

            {/* Sign Up */}
            <Link href="/signup" onClick={() => setIsOpen(false)}>
              <ButtonSm className="w-full">
                Sign Up
              </ButtonSm>
            </Link>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Header;
