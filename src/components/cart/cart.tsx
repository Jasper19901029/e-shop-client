"use client";
import React, { useState } from "react";
import CartIcon from "./carticon";
import { useCartStore, calculateTotalPrice } from "@/store/cartstore/cartstore";

export default function Cart(): React.ReactNode {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        <CartIcon />
      </button>
      {open && <CartDorpdown open={open} />}
    </div>
  );
}

const CartDorpdown = ({ open }: { open: boolean }): React.ReactNode => {
  const { cart, totalPrice } = useCartStore();

  return (
    <div>
      {cart.map((item) => (
        <div key={item.name}>
          <p>{item.name}</p>
          <p>
            {item.quantity}pic * ${item.price}
          </p>
        </div>
      ))}
      <p>Total: ${totalPrice}</p>
    </div>
  );
};
