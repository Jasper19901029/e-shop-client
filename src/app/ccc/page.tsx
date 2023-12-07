// "use client";
import React from "react";
// import { useProductStore } from "@/store/productstore/productstore";
import Abc from "@/store/productstore/abc";

export default async function page({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("page");
  //   const { product } = useProductStore();
  //   console.log(product);
  return (
    <div>
      <Abc />
      {children}
    </div>
  );
}
