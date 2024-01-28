"use client";
import React, { useState } from "react";
import Link from "next/link";
import Cart from "@/components/cart/cart";

export default function MobileNavigation(): React.ReactNode {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <div className="sm:hidden flex flex-row justify-between w-full m-4 p-4">
      <Link href="/" className="">
        <p className="text-sm">享家蔬果園</p>
      </Link>

      <div className="flex flex-row space-x-2">
        <button className="" onClick={toggleNav}>
          menu
        </button>

        <div
          className={`fixed top-16 right-0 h-screen w-full bg-green-100/40 backdrop-blur transition-all duration-300 ease-in-out ${
            showNav ? "translate-x-0" : "translate-x-full"
          }`}>
          <div className="flex flex-col items-start space-y-8 mt-8 ml-8">
            <Link href="/about" className="hover:underline" onClick={toggleNav}>
              關於我們
            </Link>
            <Link href="/shop" className="hover:underline" onClick={toggleNav}>
              購買產品
            </Link>
            <Link
              href="/contact"
              className="hover:underline"
              onClick={toggleNav}>
              聯絡我們
            </Link>
          </div>
        </div>

        <Cart />
      </div>
    </div>
  );
}
