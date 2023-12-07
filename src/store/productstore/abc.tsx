"use client";
import React from "react";
import { useGetProduct } from "@/app/shop/getData";
import { useProductStore } from "./productstore";
// import { mySub } from "@/utils/filebase/firebase";

export default function Abc() {
  const fruit = useGetProduct("水果");
  const vege = useGetProduct("果乾");

  return (
    <div>
      {fruit.productData?.map((item) => {
        return (
          <div key={item.name}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.isSell ? "販售中" : "停止販售"}</p>
          </div>
        );
      })}
      {vege.productData?.map((item) => {
        return (
          <div key={item.name}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.isSell ? "販售中" : "停止販售"}</p>
          </div>
        );
      })}
    </div>
  );
}
