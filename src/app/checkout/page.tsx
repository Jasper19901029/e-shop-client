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
    <div className="">
      <Checkoutform />
      <div>
        {cart.length === 0 ? (
          <p>購物車內沒有商品</p>
        ) : (
          cart.map((item) => (
            <Cartincheckout key={item.productName} {...item} />
          ))
        )}
        <p>Total: ${totalPrice}</p>
      </div>
    </div>
  );
}
