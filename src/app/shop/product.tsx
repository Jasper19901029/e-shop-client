import React from "react";
import Image from "next/image";
import { Product } from "@/utils/filebase/firebase";
import Link from "next/link";

export default function Product({
  name,
  price,
  isSell,
  productUrl,
  category,
}: Product): React.ReactNode {
  return (
    <div className="border border-black space-y-2">
      <Link href={`/shop/${category}/${name}`} className="">
        <Image
          src={productUrl}
          alt={name}
          width={100}
          height={100}
          loading="lazy"
        />
      </Link>
      <Link href={`/shop/${category}/${name}`} className="">
        <p>{name}</p>
      </Link>
      <p>{isSell ? price : ""}</p>
      <button
        disabled={isSell ? false : true}
        className={`${isSell ? "" : "bg-red-500"}`}>
        {isSell ? "加入購物車" : "暫無銷售"}
      </button>
      <p>{isSell ? null : "非產季"}</p>
    </div>
  );
}
