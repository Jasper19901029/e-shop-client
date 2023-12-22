import React from "react";
import { getOrder } from "@/utils/firebase/firebase";
import { Cart } from "@/store/cartstore/cartstore";
import Image from "next/image";
import Link from "next/link";
// flFLDu8RksHsVMOvMbLb

export default async function CheckedOut({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const data = await getOrder(id);
  return (
    <div className="w-full h-full flex flex-col items-center space-y-6">
      <h2 className="text-3xl mb-6 sm:mb-0">感謝您的購買</h2>
      <div className="w-10/12 flex flex-col sm:flex-row sm:space-x-4 justify-center items-start space-y-2 sm:space-y-0">
        <div className="space-y-2 sm:w-1/2 flex flex-col">
          <p className="text-xl">訂單資訊：</p>
          <p>訂單時間: {data.createDate}</p>
          <p>訂購人: {data.RecipientName}</p>
          <p>電話: {data.RecipientMobile}</p>
          <p>地址: {data.RecipientAddress}</p>
          <p>付款方式: {data.IsCollection === "Y" ? "貨到付款" : "匯款"}</p>
          {data.IsCollection === "N" && (
            <p>
              請於匯款後傳訊息至
              <Link
                href="https://www.facebook.com/p/%E5%85%AD%E9%BE%9C%E4%BA%AB%E5%AE%B6%E8%94%AC%E6%9E%9C%E5%9C%92-100057182841285/?locale=zh_TW"
                className="underline text-blue-400 hover:text-blue-600"
                target="_blank">
                臉書粉絲頁
              </Link>
            </p>
          )}
        </div>
        <div className="space-y-3 w-full flex flex-col sm:w-1/2">
          <p>訂購內容:</p>
          {data.cart.map((item: Cart) => (
            <div
              key={item.productName}
              className="grid grid-rows-2 grid-flow-col gap-x-4 place-content-between ml-2 items-center sm:space-y-0">
              {item.productUrl && (
                <Image
                  src={item.productUrl}
                  alt={item.productName}
                  width={100}
                  height={100}
                  sizes="100vw"
                  className="w-[100px] h-[100px] lg:w-[125px] lg:h-[125px] object-contain border-[1px] border-black row-span-2"
                />
              )}
              <p className="col-span-2 text-xl">{item.productName}</p>
              <p className="col-span-2 text-lg">
                {item.quantity}
                {item.unit} * {item.price}
              </p>
            </div>
          ))}
          <p className="text-end text-xl font-bold">
            訂單總金額: {data.totalPrice}
          </p>
        </div>
      </div>
    </div>
  );
}
