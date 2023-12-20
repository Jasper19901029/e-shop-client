"use client";
import React, { useRef } from "react";
import { useCartStore } from "@/store/cartstore/cartstore";
import Cartincheckout from "./cartincheckout";
import Input from "@/components/input/input";
import handleSub from "./handle";
import Checkoutform from "./checkoutform";
export default function CheckoutPage(): React.ReactNode {
  const { cart, totalPrice, resetCart } = useCartStore();

  return (
    <div className="h-screen flex flex-col justify-around items-center xl:flex-row xl:items-center xl:w-full mb-4">
      <Checkoutform />
      <hr className="w-[1px] h-full hidden xl:block xl:border-r-2 xl:border-black" />
      <div className="flex flex-col space-y-4 justify-between mt-4">
        {cart.length === 0 ? (
          <p>購物車內沒有商品</p>
        ) : (
          cart.map((item) => (
            <Cartincheckout key={item.productName} {...item} />
          ))
        )}
        <p className="underline underline-offset-2 text-end">
          Total: ${totalPrice}
        </p>
      </div>
    </div>
  );
}
