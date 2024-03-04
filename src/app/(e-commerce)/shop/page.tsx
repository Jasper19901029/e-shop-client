"use client";
import React, { Suspense } from "react";
import { useGetProduct } from "@/app/(e-commerce)/shop/getData";
import Product from "./product";
import { unstable_noStore as noStore } from "next/cache";

export default function Shop() {
  noStore();
  const fruit = useGetProduct("水果");
  const vege = useGetProduct("果乾");

  return (
    <div className="w-3/5 flex flex-row flex-wrap justify-start items-center sm:px-4 sm:gap-8 space-y-2 sm:space-y-0 sm:mt-4">
      {fruit.productData?.map((item) => {
        return <Product key={item.productName} {...item} />;
      })}

      {vege.productData?.map((item) => {
        return <Product key={item.productName} {...item} />;
      })}
    </div>
  );
}
