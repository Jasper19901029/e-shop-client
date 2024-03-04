import React from "react";
import Link from "next/link";
import Cart from "@/components/cart/cart";
import { Button } from "@/components/ui/button";

export default function Navigation(): React.ReactNode {
  return (
    <div className="hidden sm:flex sm:flex-row sm:justify-between sm:w-full sm:m-4 sm:p-4  sm:block">
      <Link href="/" className="">
        <p className="">享家蔬果園</p>
      </Link>

      <div className="flex flex-row space-x-6">
        <Button variant={"link"}>
          <Link href="/about">關於我們</Link>
        </Button>
        <Button variant={"link"}>
          <Link href="/shop">購買產品</Link>
        </Button>{" "}
        <Button variant={"link"}>
          <Link href="/contact">聯絡我們</Link>
        </Button>
        <Cart />
      </div>
    </div>
  );
}
