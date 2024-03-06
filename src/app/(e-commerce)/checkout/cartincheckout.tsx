"use client";
import React from "react";
import { Cart } from "@/store/cartstore/cartstore";
import Image from "next/image";
import { useCartStore } from "@/store/cartstore/cartstore";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { TiPlus, TiMinus } from "react-icons/ti";
export default function Cartincheckout({
  productName,
  price,
  quantity,
  productUrl,
}: Cart) {
  const { addToCart, removeFromCart, addTotalPrice } = useCartStore();
  return (
    <>
      <TableCell className="text-center">
        {productUrl && (
          <Image
            src={productUrl}
            alt={productName}
            width={100}
            height={100}
            className="mb-2 lg:mb-0"
          />
        )}
        <span className="text-lg lg:hidden">{productName}</span>
      </TableCell>
      <TableCell className="hidden text-center lg:table-cell">
        {productName}
      </TableCell>

      <TableCell className="w-[100px] text-center">
        <Button
          asChild
          size={"icon"}
          variant={"ghost"}
          className=" bg-null"
          onClick={() => {
            removeFromCart({ productName, price, quantity });
            addTotalPrice(price);
          }}>
          <TiMinus className="h-6 w-6 hover:text-white" />
        </Button>
        <span className="font-bold text-lg h-6 w-6 align-middle mx-1">
          {quantity}
        </span>
        <Button
          asChild
          size={"icon"}
          variant={"ghost"}
          className="bg-null"
          onClick={() => {
            addToCart({ productName, price, quantity });
            addTotalPrice(price);
          }}>
          <TiPlus className="h-6 w-6 hover:text-white" />
        </Button>
      </TableCell>
      <TableCell className="text-center">${price}</TableCell>
      <TableCell className="text-right">${quantity * price}</TableCell>
      {/* <div className="flex flex-row space-x-2 w-full col-span-2 place-content-center "> */}
      {/* <button
        className=""
        onClick={() => {
          removeFromCart({ productName, price, quantity });
          addTotalPrice(price);
        }}>
        -
      </button>
      <button
        className=""
        onClick={() => {
          addToCart({ productName, price, quantity });
          addTotalPrice(price);
        }}>
        +
      </button> */}
      {/* </div> */}
    </>
  );
}
