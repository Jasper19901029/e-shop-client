import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import Loading from "@/components/loading/loading";
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
      <Suspense fallback={<Loading />}>
        <ProductList category={category} productName={productName} />
      </Suspense>
    </>
  );
}
