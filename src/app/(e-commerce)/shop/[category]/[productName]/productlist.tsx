"use client";
import React from "react";
import ProductDetail from "./productdetail";
import { useGetProduct } from "@/app/(e-commerce)/shop/getData";

type Props = {
  category: string;
  productName: string;
};

export default function ProductList({ category, productName }: Props) {
  const { productData } = useGetProduct(decodeURI(category));
  const filterData = productData?.filter(
    (product) => product.productName === decodeURI(productName)
  );
  return <>{filterData && <ProductDetail {...filterData[0]} />}</>;
}
