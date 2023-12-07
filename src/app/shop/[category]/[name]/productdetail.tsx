"use client";
import React from "react";

import Input from "@/components/input/input";
import Image from "next/image";
import { Product } from "@/utils/filebase/firebase";

export default function ProductDetail({
  name,
  price,
  quantity,
  productUrl,
  type,
  unit,
  category,
  introduction,
  isSell,
  inspectionUrl1,
  inspectionUrl2,
}: Product): React.ReactNode {
  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <p>{introduction}</p>
      <Image src={productUrl} alt={name} width={100} height={100} />
      {inspectionUrl1 && (
        <Image src={inspectionUrl1} alt={name} width={100} height={100} />
      )}
      {inspectionUrl2 && (
        <Image src={inspectionUrl2} alt={name} width={100} height={100} />
      )}
      <button>加入購物車</button>
    </div>
  );
}
