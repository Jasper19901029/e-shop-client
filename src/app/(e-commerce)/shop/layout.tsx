import { ResolvingMetadata } from "next";
import React from "react";
import { getProductForMetaData } from "@/utils/firebase/firebase";

export async function generateMetadata() {
  const products = (await getProductForMetaData("水果")).map((product) => {
    return product.productName;
  });
  const products1 = (await getProductForMetaData("果乾")).map((product) => {
    return product.productName;
  });
  return {
    title: { default: "購買商品", template: "購買商品 | %s" },
    description: [products, products1],
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
