"use client";
import React, { useEffect, useState } from "react";
import { useCartStore } from "@/store/cartstore/cartstore";
import Cartincheckout from "./cartincheckout";
import Checkoutform from "./checkoutform";
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

export default function CheckoutPage(): React.ReactNode {
  const [mounted, setMounted] = useState(false);
  const { cart, totalPrice } = useCartStore();
  const [windowSize, setWindowSize] = useState<number | null>(null);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    const getWindowSize = () => {
      const { innerWidth } = window;
      setWindowSize(innerWidth);
    };
    getWindowSize();
    window.addEventListener("resize", getWindowSize);
    return () => {
      window.removeEventListener("resize", getWindowSize);
    };
  }, []);

  if (!mounted) return null;
  return (
    <div className="w-4/5 flex flex-col lg:flex-row lg:items-center lg:justify-start">
      <Checkoutform />
      <hr className="w-[1px] h-full hidden lg:block lg:border-r-2 lg:border-black lg:mx-32" />
      <div className="mt-4 lg:mt-0 basis-1/2">
        <Table className="">
          <TableCaption className="text-lg font-bold">購物車商品</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className=" text-center">商品</TableHead>
              <TableHead className="hidden lg:table-cell lg:text-center">
                描述
              </TableHead>
              <TableHead className=" text-center">數量</TableHead>
              <TableHead className=" text-center">單價</TableHead>
              <TableHead className=" text-right">總額</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cart.length === 0 ? (
              <TableRow>
                <TableCell
                  className="text-center text-lg font-bold"
                  colSpan={5}>
                  購物車內沒有商品
                </TableCell>
              </TableRow>
            ) : (
              cart.map((item) => (
                <TableRow key={item.productName}>
                  <Cartincheckout {...item} />
                </TableRow>
              ))
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell
                colSpan={windowSize && windowSize >= 1024 ? 4 : 3}
                className="text-lg font-bold col-span-4">
                購物車總金額
              </TableCell>
              <TableCell className="text-right underline underline-offset-2 text-lg font-bold">
                ${totalPrice}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        {/* {cart.length === 0 ? (
          <p>購物車內沒有商品</p>
        ) : (
          cart.map((item) => (
            <Cartincheckout key={item.productName} {...item} />
          ))
        )} */}
      </div>
    </div>
  );
}
