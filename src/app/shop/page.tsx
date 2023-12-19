"use client";
import React, { Suspense } from "react";
import { useGetProduct } from "@/app/shop/getData";
import Product from "./product";

export default function Shop() {
  const fruit = useGetProduct("水果");
  const vege = useGetProduct("果乾");

  return (
    <div className="w-full h-full flex flex-col justify-around items-center sm:grid sm:auto-rows-max sm:grid-cols-3 sm:place-items-center sm:gap-8 sm:mt-4">
      {fruit.productData?.map((item) => {
        return <Product key={item.productName} {...item} />;
      })}

      {vege.productData?.map((item) => {
        return <Product key={item.productName} {...item} />;
      })}
    </div>
  );
}
