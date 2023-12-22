"use client";
import React from "react";

import Input from "@/components/input/input";
import Image from "next/image";
import { Product } from "@/utils/firebase/firebase";
import { useCartStore } from "@/store/cartstore/cartstore";

export default function ProductDetail({
  productName,
  price,
  quantity,
  productUrl,
  isSell,
  introduction,
  inspectionUrl1,
  inspectionUrl2,
  unit,
}: Product): React.ReactNode {
  const { addToCart, addTotalPrice } = useCartStore();
  return (
    <div className="relative flex flex-col justify-around items-center self-start space-y-4 mb-4">
      {isSell && (
        <div className="w-screen flex flex-row justify-around bg-slate-300 sticky top-0">
          <button
            className="bg-black text-white hover:bg-white hover:text-black font-bold rounded"
            onClick={() => {
              addToCart({ productName, price, quantity, productUrl });
              addTotalPrice(price);
            }}>
            加入購物車
          </button>
          <p>
            ${price}/{unit}
          </p>
        </div>
      )}
      <p className="font-bold text-3xl">{productName}</p>
      <p className="w-6/12">{introduction}</p>
      <Image
        src={productUrl}
        alt={productName}
        width={100}
        height={100}
        sizes="100vw"
        className="w-[250px] h-[200px] lg:w-[300px] lg:h-[300px] object-contain border-[1px] border-black"
      />
      {inspectionUrl1 && (
        <Image
          src={inspectionUrl1}
          alt={productName}
          width={100}
          height={100}
          sizes="100vw"
          className="w-[250px] h-[200px] lg:w-[300px] lg:h-[300px] object-contain border-[1px] border-black"
        />
      )}
      {inspectionUrl2 && (
        <Image
          src={inspectionUrl2}
          alt={productName}
          width={100}
          height={100}
          sizes="100vw"
          className="w-[250px] h-[200px] lg:w-[300px] lg:h-[300px] object-contain border-[1px] border-black"
        />
      )}
    </div>
  );
}
