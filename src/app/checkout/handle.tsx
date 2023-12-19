"use server";
import { Cart, useCartStore } from "@/store/cartstore/cartstore";
import { addNewOrder } from "@/utils/firebase/firebase";
import dayjs from "dayjs";
import { redirect } from "next/navigation";

export type Order = {
  DeliveryTime: string;
  RecipientAddress: string;
  RecipientMobile: string;
  RecipientName: string;
  IsCollection: string;
  CollectionAmount: number;
  clientMemo: string;
  createDate: string;
  isFinish: boolean;
  Memo: string;
  totalPrice: number;
  cart: Cart[];
  id: string;
};

export default async function handleSub(
  cart: Cart[],
  totalPrice: number,
  formData: FormData
) {
  const data = Object.fromEntries(formData);

  const order: Order = {
    DeliveryTime: "01",
    RecipientAddress: data.RecipientAddress.toString(),
    RecipientMobile: data.RecipientMobile.toString(),
    RecipientName: data.RecipientName.toString(),
    IsCollection: data.IsCollection.toString(),
    CollectionAmount: data.IsCollection.toString() === "Y" ? totalPrice : 0,
    clientMemo: data.clientMemo.toString(),
    createDate: dayjs().format("YYYYMMDD"),
    isFinish: false,
    Memo: "",
    totalPrice,
    cart: cart,
    id: "",
  };
  if (order.cart.length < 1) return "購物車內沒有商品";
  const newOrder = await addNewOrder(order);

  if (typeof newOrder === "undefined") {
    return "error";
  }
  return "感謝您的購買";
}
