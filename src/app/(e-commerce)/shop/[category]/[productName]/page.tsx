import React from "react";
import { notFound } from "next/navigation";
import ProductList from "./productlist";
import { getProductForMetaData } from "@/utils/firebase/firebase";

export async function generateMetadata({
  params,
}: {
  params: { category: string; productName: string };
}) {
  const products = (
    await getProductForMetaData(decodeURI(params.category))
  ).filter((product) => {
    return product.productName === decodeURI(params.productName);
  });
  if (products.length < 1) return notFound();
  const { productName, type, introduction } = products[0];
  return {
    title: productName,
    keywords: [productName, type],
    description: `${productName}:${introduction}`,
  };
}

export default function Page({
  params,
}: {
  params: { category: string; productName: string };
}): React.ReactNode {
  const { category, productName } = params;

  return (
    <>
      <ProductList category={category} productName={productName} />
    </>
  );
}
