import React from "react";
import Link from "next/link";
import Image from "next/image";
import Cart from "@/components/cart/cart";

export default function Navigation(): React.ReactNode {
  return (
    <div className="flex flex-row justify-between w-full m-4 p-4">
      <Link href="/" className="">
        <p className="">享家蔬果園</p>
      </Link>

      <div className="flex flex-row space-x-2 sm:space-x-6">
        <Link href="/about" className="hover:underline">
          關於我們
        </Link>
        <Link href="/shop" className="hover:underline">
          購買產品
        </Link>
        <Link href="/contact" className="hover:underline">
          聯絡我們
        </Link>
        <Cart />
      </div>
    </div>
  );
}
