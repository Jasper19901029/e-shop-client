"use client";
import Input from "@/components/input/input";
import { useCartStore, Cart } from "@/store/cartstore/cartstore";
import handleSub from "./handle";
export default function Checkoutform() {
  const { cart, totalPrice, resetCart } = useCartStore();
  async function clientAction(formData: FormData) {
    const result = await handleSub(cart, totalPrice, formData);

    if (result === "感謝您的購買") {
      alert("訂單建立成功");
      resetCart();
    } else {
      alert("訂單建立失敗");
    }
  }
  return (
    //   <h2>基本資料</h2>
    <form action={clientAction}>
      <Input
        label="姓名"
        name="RecipientName"
        id="RecipientName"
        type="text"
        htmlFor="RecipientName"
        required
      />
      <Input
        label="電話"
        name="RecipientMobile"
        id="RecipientMobile"
        type="text"
        htmlFor="RecipientMobile"
        required
      />
      <Input
        label="地址"
        name="RecipientAddress"
        id="RecipientAddress"
        type="text"
        htmlFor="RecipientAddress"
        required
      />
      <Input
        label="匯款"
        name="IsCollection"
        id="IsCollection"
        type="radio"
        htmlFor="IsCollection"
        value={"N"}
        required
      />
      <Input
        label="貨到付款"
        name="IsCollection"
        id="IsCollection"
        type="radio"
        htmlFor="IsCollection"
        value={"Y"}
        required
      />
      <Input
        label="備註"
        name="clientMemo"
        id="clientMemo"
        type="text"
        htmlFor="clientMemo"
      />
      <Input
        label="13時前"
        name="DeliveryTime"
        id="DeliveryTime"
        type="radio"
        htmlFor="DeliveryTime"
        value={"01"}
        required
      />
      <Input
        label="14-18時"
        name="DeliveryTime"
        id="DeliveryTime"
        type="radio"
        htmlFor="DeliveryTime"
        value={"02"}
        required
      />
      <Input
        label="不指定"
        name="DeliveryTime"
        id="DeliveryTime"
        type="radio"
        htmlFor="DeliveryTime"
        value={"04"}
        required
      />
      <button type="submit">送出</button>
    </form>
  );
}
