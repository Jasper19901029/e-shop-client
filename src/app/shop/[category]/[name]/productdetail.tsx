"use client";
import React from "react";

import Input from "@/components/input/input";
import Image from "next/image";
import { Product } from "@/utils/firebase/firebase";
import { useCartStore } from "@/store/cartstore/cartstore";

export default function ProductDetail({
  name,
  price,
  quantity,
  productUrl,
  isSell,
  introduction,
  inspectionUrl1,
  inspectionUrl2,
}: Product): React.ReactNode {
  const { cart, addToCart, addTotalPrice, totalPrice, removeFromCart } =
    useCartStore();
  console.log(cart, totalPrice);
  return (
    <div>
      {isSell ? (
        <>
          <button
            onClick={() => {
              addToCart({ name, price, quantity, productUrl });
              addTotalPrice(price);
            }}>
            加入購物車
          </button>
          <button
            onClick={() => {
              removeFromCart({ name, price, quantity, productUrl });
              addTotalPrice(price);
            }}>
            減少購物車
          </button>
        </>
      ) : null}
      <p>{name}</p>
      <p>{price}</p>
      <p>{introduction}</p>
      <Image src={productUrl} alt={name} width={100} height={100} />
      {inspectionUrl1 && (
        <Image src={inspectionUrl1} alt={name} width={100} height={100} />
      )}
      {inspectionUrl2 && (
        <Image src={inspectionUrl2} alt={name} width={100} height={100} />
      )}
    </div>
  );
}
