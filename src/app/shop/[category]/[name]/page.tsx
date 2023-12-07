"use client";
import React from "react";
import { notFound } from "next/navigation";

import { useGetProduct } from "@/app/shop/getData";
import ProductDetail from "./productdetail";

export default function Page({
  params,
}: {
  params: { category: string; name: string };
}): React.ReactNode {
  const { category, name } = params;
  const productData = useGetProduct(decodeURI(category));
  const filterData = productData.productData?.filter(
    (product) => product.name === decodeURI(name)
  );
  return (
    <div>
      {filterData === undefined ? (
        <Loading />
      ) : filterData.length > 0 ? (
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
