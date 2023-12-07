"use client";
import React from "react";
import { useGetProduct } from "@/app/shop/getData";
import Product from "./product";

export default function Shop() {
  const fruit = useGetProduct("水果");
  const vege = useGetProduct("果乾");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
      {fruit.productData?.map((item) => {
        return <Product key={item.name} {...item} />;
      })}
      {vege.productData?.map((item) => {
        return <Product key={item.name} {...item} />;
      })}
    </div>
  );
}
