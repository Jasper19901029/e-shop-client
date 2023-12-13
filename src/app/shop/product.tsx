import React from "react";
import Image from "next/image";
import { Product } from "@/utils/firebase/firebase";
import Link from "next/link";

import { useCartStore } from "@/store/cartstore/cartstore";

export default function Product({
  name,
  price,
  isSell,
  productUrl,
  category,
}: Product): React.ReactNode {
  const { cart, addToCart } = useCartStore();

  return (
    <div className="border border-black space-y-2">
      <Link href={`/shop/${category}/${name}`} className="">
        <Image
          src={productUrl}
          alt={name}
          width={100}
          height={100}
          loading="lazy"
        />
      </Link>
      <Link href={`/shop/${category}/${name}`} className="">
        <p>{name}</p>
      </Link>
      <p>{isSell ? price : ""}</p>
      <button
        onClick={() => addToCart({ name, price, quantity: 1, productUrl })}
        disabled={isSell ? false : true}
        className={`${isSell ? "" : "bg-red-500 text-xs"}`}>
        {isSell ? "加入購物車" : "非產季 暫無銷售"}
      </button>
    </div>
  );
}
