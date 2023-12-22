"use client";
import React from "react";
import CartIcon from "./carticon";
import { useCartStore, calculateTotalPrice } from "@/store/cartstore/cartstore";
import Link from "next/link";
import Image from "next/image";

export default function Cart(): React.ReactNode {
  const { isCartOpen, setIsCartOpen } = useCartStore();
  return (
    <div className="relative">
      <button onClick={() => setIsCartOpen(!isCartOpen)}>
        <CartIcon />
      </button>
      {isCartOpen && (
        <CartDorpdown isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      )}
    </div>
  );
}

const CartDorpdown = ({
  isCartOpen,
  setIsCartOpen,
}: {
  isCartOpen: boolean;
  setIsCartOpen: (isCartOpen: boolean) => void;
}): React.ReactNode => {
  const { cart, totalPrice, addToCart, removeFromCart, addTotalPrice } =
    useCartStore();

  return (
    <div className="absolute top-10 right-0 border-2 border-black bg-gray-200 w-[100px] sm:w-[170px] flex flex-col space-y-2 z-50 max-h-44 overflow-y-auto">
      {cart.map((item) => (
        <div
          key={item.productName}
          className="grid grid-cols-2 justify-items-center items-center pt-2 px-[1px]">
          {item.productUrl && (
            <Image
              src={item.productUrl}
              alt={item.productName}
              width={100}
              height={100}
              sizes="100vw"
              className="object-contain pl-2"
            />
          )}
          <p>{item.productName}</p>
          <p className="col-span-2">
            {item.quantity}
            {item.unit} * ${item.price}
          </p>
          <div className="flex flex-row space-x-2 w-full col-span-2 place-content-center ">
            <button
              className="border-[1px] border-black w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]"
              onClick={() => {
                removeFromCart(item);
                addTotalPrice(item.price);
              }}>
              -
            </button>
            <button
              className="border-[1px] border-black w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]"
              onClick={() => {
                addToCart(item);
                addTotalPrice(item.price);
              }}>
              +
            </button>
          </div>
        </div>
      ))}
      <p className="text-right pr-2">Total: ${totalPrice}</p>
      <button
        className="bg-black text-white hover:bg-white hover:text-black"
        // className="bg-white text-black hover:bg-black hover:text-white"
        onClick={() => setIsCartOpen(false)}>
        <Link href={"/checkout"}>結帳</Link>
      </button>
    </div>
  );
};
