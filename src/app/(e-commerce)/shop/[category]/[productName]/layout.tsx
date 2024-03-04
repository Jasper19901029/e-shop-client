import { ResolvingMetadata } from "next";
import React from "react";
import { getProductForMetaData } from "@/utils/firebase/firebase";

// export async function generateMetadata({
//   params,
// }: {
//   params: { category: string; productName: string };
// }) {
//   const products = (await getProductForMetaData("水果")).filter((product) => {
//     return product.productName === params.productName;
//   });
//   const { productName, type, introduction } = products[0];
//   return {
//     title: productName,
//     keywords: [productName, type],
//     description: introduction,
//   };
// }

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
