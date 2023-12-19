"use client";
import React from "react";
import CartIcon from "./carticon";
import { useCartStore, calculateTotalPrice } from "@/store/cartstore/cartstore";
import Link from "next/link";

export default function Cart(): React.ReactNode {
  const { isCartOpen, setIsCartOpen } = useCartStore();
  return (
    <div>
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
  const { cart, totalPrice } = useCartStore();

  return (
    <div>
      {cart.map((item) => (
        <div key={item.productName}>
          <p>{item.productName}</p>
          <p>
            {item.quantity}pic * ${item.price}
          </p>
        </div>
      ))}
      <p>Total: ${totalPrice}</p>
      <button onClick={() => setIsCartOpen(false)}>
        <Link href={"/checkout"}>結帳</Link>
      </button>
    </div>
  );
};

// const CartDorpdown = ({
//   isCartOpen,
//   setIsCartOpen,
// }: {
//   isCartOpen: boolean;
//   setIsCartOpen: (isCartOpen: boolean) => void;
// }): React.ReactNode => {
//   const { cart, totalPrice } = useCartStore();

//   return (
//     <Modalow isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}>
//       {cart.map((item) => (
//         <div key={item.name}>
//           <p>{item.name}</p>
//           <p>
//             {item.quantity}pic * ${item.price}
//           </p>
//         </div>
//       ))}
//       <p>Total: ${totalPrice}</p>
//       <button onClick={() => setIsCartOpen(false)}>
//         <Link href={"/checkout"}>結帳</Link>
//       </button>
//     </Modalow>
//   );
// };
