import React from "react";
import Image from "next/image";
import { Product } from "@/utils/firebase/firebase";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import styles from "@/components/ui/button.module.css";

import { useCartStore } from "@/store/cartstore/cartstore";
import { Button } from "@/components/ui/button";

export default function Product({
  productName,
  price,
  isSell,
  productUrl,
  category,
  unit,
}: Product): React.ReactNode {
  const { cart, addToCart, addTotalPrice } = useCartStore();

  return (
    // <div className="flex flex-col items-center justify-around space-y-2 border-2 border-black p-2 bg-white">
    <Card className="">
      <CardHeader>
        <CardTitle>
          <Link href={`/shop/${category}/${productName}`} className="">
            <Image
              src={productUrl}
              alt={productName}
              width={70}
              height={50}
              sizes="100vw"
              className=" w-[200px] h-[150px] object-contain "
            />
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between">
        <Link href={`/shop/${category}/${productName}`} className="">
          <p className="">{productName}</p>
        </Link>

        <p className="">{`$${price} 元 / ${unit}`}</p>
      </CardContent>
      <CardFooter>
        <Button
          variant={"ghost"}
          className={` ${styles.CartBtn} hover:bg-sky-500 text-gray-50 bg-sky-700 w-full `}
          onClick={() => {
            addToCart({ productName, price, quantity: 1, productUrl, unit });
            addTotalPrice(price);
          }}
          disabled={isSell ? false : true}>
          {isSell && (
            <span className={styles.IconContainer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 576 512"
                fill="rgb(17, 17, 17)"
                className="cart">
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
              </svg>
            </span>
          )}
          <p className={`${isSell && styles.text}`}>
            {isSell ? "加入購物車" : "暫無銷售"}
          </p>
        </Button>
      </CardFooter>
    </Card>
    //   <Link href={`/shop/${category}/${productName}`} className="">
    //     <Image
    //       src={productUrl}
    //       alt={productName}
    //       width={70}
    //       height={50}
    //       sizes="100vw"
    //       className="w-[250px] h-[200px] lg:w-[200px] lg:h-[150px] object-contain "
    //     />
    //   </Link>
    //   <Link href={`/shop/${category}/${productName}`} className="">
    //     <p className="text-xl lg:text-3xl">{productName}</p>
    //   </Link>

    //   <p className="text-xl lg:text-3xl">{`${price} 元 / ${unit}`}</p>

    //   <button
    //     onClick={() => {
    //       addToCart({ productName, price, quantity: 1, productUrl, unit });
    //       addTotalPrice(price);
    //     }}
    //     disabled={isSell ? false : true}
    //     className={`${
    //       isSell ? "hover:bg-black hover:text-white " : "bg-red-300 font-bold "
    //     } sm:text-base  max-w-prose border-2 border-black rounded-[8px]`}>
    //     {isSell ? "加入購物車" : "非產季 暫無銷售"}
    //   </button>
    // </div>
  );
}
