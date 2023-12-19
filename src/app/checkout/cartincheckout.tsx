import React from "react";
import { Cart } from "@/store/cartstore/cartstore";
import Image from "next/image";
export default function Cartincheckout({
  productName,
  price,
  quantity,
  productUrl,
}: Cart) {
  return (
    <div>
      <p>{productName}</p>
      <p>
        {quantity}pic * ${price}
      </p>
      <Image src={productUrl} alt={productName} width={100} height={100} />
    </div>
  );
}
