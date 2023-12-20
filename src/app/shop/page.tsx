"use client";
import React, { Suspense } from "react";
import { useGetProduct } from "@/app/shop/getData";
import Product from "./product";

export default function Shop() {
  const fruit = useGetProduct("水果");
  const vege = useGetProduct("果乾");

  return (
    <div className="flex flex-col justify-around items-center sm:grid sm:grid-cols-3 sm:place-items-center sm:gap-8 space-y-2 sm:space-y-0  mb-12 sm:mt-4">
      {fruit.productData?.map((item) => {
        return <Product key={item.productName} {...item} />;
      })}

      {vege.productData?.map((item) => {
        return <Product key={item.productName} {...item} />;
      })}
    </div>
  );
}
