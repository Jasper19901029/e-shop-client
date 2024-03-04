"use client";
import React from "react";
import ProductDetail from "./productdetail";
import { useGetProduct } from "@/app/(e-commerce)/shop/getData";
import { notFound } from "next/navigation";
import Loading from "@/components/loading/loading";

type Props = {
  category: string;
  productName: string;
};

export default function ProductList({ category, productName }: Props) {
  const { productData } = useGetProduct(decodeURI(category));
  const filterData = productData?.filter(
    (product) => product.productName === decodeURI(productName)
  );
  return (
    <div className="">
      {/* {filterData === undefined ? (
        <Loading />
      ) : filterData?.length > 0 ? (
        <ProductDetail {...filterData[0]} />
      ) : (
        notFound()
      )} */}
      {filterData && <ProductDetail {...filterData[0]} />}
    </div>
  );
}
