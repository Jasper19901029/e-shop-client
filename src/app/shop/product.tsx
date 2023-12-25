import React from "react";
import Image from "next/image";
import { Product } from "@/utils/firebase/firebase";
import Link from "next/link";

import { useCartStore } from "@/store/cartstore/cartstore";

export default function Product({
  productName,
  price,
  isSell,
  productUrl,
  category,
  unit,
}: Product): React.ReactNode {
  const { cart, addToCart, addTotalPrice } = useCartStore();

  return (
    <div className="flex flex-col items-center justify-around space-y-2 border-2 border-black p-2">
      <Link href={`/shop/${category}/${productName}`} className="">
        <Image
          src={productUrl}
          alt={productName}
          width={100}
          height={100}
          sizes="100vw"
          className="w-[250px] h-[200px] lg:w-[200px] lg:h-[150px] object-contain border-[1px] border-black"
        />
      </Link>
      <Link href={`/shop/${category}/${productName}`} className="">
        <p className="text-xl lg:text-3xl">{productName}</p>
      </Link>

      <p className="text-xl lg:text-3xl">{`${price} 元 / ${unit}`}</p>

      <button
        onClick={() => {
          addToCart({ productName, price, quantity: 1, productUrl, unit });
          addTotalPrice(price);
        }}
        disabled={isSell ? false : true}
        className={`${
          isSell ? "hover:bg-black hover:text-white " : "bg-red-300 font-bold "
        } sm:text-base  max-w-prose border-2 border-black rounded-[8px]`}>
        {isSell ? "加入購物車" : "非產季 暫無銷售"}
      </button>
    </div>
  );
}
