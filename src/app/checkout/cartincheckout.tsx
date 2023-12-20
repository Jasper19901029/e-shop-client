import React from "react";
import { Cart } from "@/store/cartstore/cartstore";
import Image from "next/image";
import { useCartStore } from "@/store/cartstore/cartstore";
export default function Cartincheckout({
  productName,
  price,
  quantity,
  productUrl,
}: Cart) {
  const { addToCart, removeFromCart, addTotalPrice } = useCartStore();
  return (
    <div className="flex flex-row space-x-4 items-center justify-around">
      {productUrl && (
        <Image
          src={productUrl}
          alt={productName}
          width={100}
          height={100}
          sizes="100vw"
          className="w-[50px] h-[50px] lg:w-[150px] lg:h-[150px] object-contain"
        />
      )}
      <p>{productName}</p>
      <p>
        {quantity}pic * ${price}
      </p>
      {/* <div className="flex flex-row space-x-2 w-full col-span-2 place-content-center "> */}
      <button
        className="border-[1px] border-black w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]"
        onClick={() => {
          removeFromCart({ productName, price, quantity });
          addTotalPrice(price);
        }}>
        -
      </button>
      <button
        className="border-[1px] border-black w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]"
        onClick={() => {
          addToCart({ productName, price, quantity });
          addTotalPrice(price);
        }}>
        +
      </button>
      {/* </div> */}
    </div>
  );
}
