"use client";
import React, { useState } from "react";
import CartIcon from "./carticon";
import { useCartStore, calculateTotalPrice } from "@/store/cartstore/cartstore";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { TiPlus, TiMinus } from "react-icons/ti";

export default function Cart(): React.ReactNode {
  const { isCartOpen, setIsCartOpen } = useCartStore();
  return (
    <div className="relative">
      {/* <Button
        variant={"ghost"}
        className="bg-null hover:bg-slate-500/40"
        onClick={() => setIsCartOpen(!isCartOpen)}>
        <CartIcon />
      </Button> */}

      <CartDorpdown
      // isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}
      />
    </div>
  );
}

const CartDorpdown = (
  {
    //   isCartOpen,
    //   setIsCartOpen,
    // }: {
    //   isCartOpen: boolean;
    //   setIsCartOpen: (isCartOpen: boolean) => void;
  }
): React.ReactNode => {
  const {
    cart,
    totalPrice,
    addToCart,
    removeFromCart,
    addTotalPrice,
    isCartOpen,
    setIsCartOpen,
  } = useCartStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="">
        <Button variant={"ghost"} className="bg-null hover:bg-slate-500/40">
          <CartIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-80 overflow-y-auto h-48"
        onCloseAutoFocus={(event) => event.preventDefault()}
        align={"end"}
        alignOffset={5}
        sideOffset={5}>
        <DropdownMenuLabel>購物車</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {cart.map((item) => (
          <DropdownMenuItem
            key={item.productName}
            className="flex flex-row justify-around"
            onSelect={(e) => e.preventDefault()}>
            <Image
              src={item.productUrl ? item.productUrl : ""}
              alt={item.productName}
              width={75}
              height={75}
            />
            <span>{item.productName}</span>
            <DropdownMenuShortcut>
              {item.quantity}
              {item.unit} * ${item.price}
            </DropdownMenuShortcut>
            <div className="p-2">
              <Button
                asChild
                size={"icon"}
                variant={"ghost"}
                className="mr-2 bg-null"
                onClick={() => {
                  removeFromCart(item);
                  addTotalPrice(item.price);
                }}>
                <TiMinus className="h-6 w-6 hover:text-white" />
              </Button>
              <Button
                asChild
                size={"icon"}
                variant={"ghost"}
                className="bg-null"
                onClick={() => {
                  addToCart(item);
                  addTotalPrice(item.price);
                }}>
                <TiPlus className="h-6 w-6 hover:text-white" />
              </Button>
            </div>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem className="w-full ">
          <Button className="w-full fixed right-0 left-0 -bottom-6 p-0" asChild>
            <Link href={"/checkout"}>
              <span>結帳</span>
            </Link>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    // <div className="absolute top-10 right-0 static border-2 border-black bg-gray-200 w-[100px] sm:w-[170px] flex flex-col space-y-2 z-50 max-h-44 overflow-y-auto ">
    //   {cart.map((item) => (
    //     <div
    //       key={item.productName}
    //       className="grid grid-cols-2 justify-items-center items-center pt-2 px-[1px]">
    //       {item.productUrl && (
    //         <Image
    //           src={item.productUrl}
    //           alt={item.productName}
    //           width={100}
    //           height={100}
    //           sizes="100vw"
    //           className="object-contain pl-2"
    //         />
    //       )}
    //       <p>{item.productName}</p>
    //       <p className="col-span-2">
    // {item.quantity}
    // {item.unit} * ${item.price}
    //       </p>
    //   <div className="flex flex-row space-x-2 w-full col-span-2 place-content-center ">
    //     <button
    //       className="border-[1px] border-black w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]"
    //       onClick={() => {
    //         removeFromCart(item);
    //         addTotalPrice(item.price);
    //       }}>
    //       -
    //     </button>
    //     <button
    //       className="border-[1px] border-black w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]"
    //       onClick={() => {
    //         addToCart(item);
    //         addTotalPrice(item.price);
    //       }}>
    //       +
    //     </button>
    //   </div>
    // </div>
    //   ))}
    //   <p className="text-right pr-2">Total: ${totalPrice}</p>
    //   <button
    //     className="bg-black text-white hover:bg-white hover:text-black sticky bottom-0"
    //     onClick={() => setIsCartOpen(false)}>
    //     <Link href={"/checkout"}>結帳</Link>
    //   </button>
    // </div>
  );
};
