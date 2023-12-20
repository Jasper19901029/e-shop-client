"use client";
import React from "react";
import { notFound } from "next/navigation";

import { useGetProduct } from "@/app/shop/getData";
import ProductDetail from "./productdetail";

export default function Page({
  params,
}: {
  params: { category: string; productName: string };
}): React.ReactNode {
  const { category, productName } = params;
  const { productData } = useGetProduct(decodeURI(category));
  const filterData = productData?.filter(
    (product) => product.productName === decodeURI(productName)
  );
  return (
    <div className="relative">
      {filterData === undefined ? (
        <Loading />
      ) : filterData?.length > 0 ? (
        <ProductDetail {...filterData[0]} />
      ) : (
        notFound()
      )}
    </div>
  );
}

const Loading = (): React.ReactNode => {
  return <>Loading...</>;
};
