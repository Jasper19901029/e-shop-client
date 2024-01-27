"use client";
import Input from "@/components/input/input";
import { useCartStore, Cart } from "@/store/cartstore/cartstore";
import handleSub from "./checkoutaction";
import { redirect } from "next/navigation";
export default function Checkoutform() {
  const { cart, totalPrice, resetCart } = useCartStore();
  async function clientAction(formData: FormData) {
    const result = await handleSub(cart, totalPrice, formData);

    if (result) {
      alert("訂單建立成功");
      resetCart();
      redirect(`/checkout/${result}`);
    } else {
      alert("訂單建立失敗");
    }
  }
  return (
    <form action={clientAction} className="flex flex-col space-y-4">
      <h2 className="text-xl">訂購人資訊</h2>
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
        type="number"
        min="10"
        max="10"
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
      <div className="flex flex-row">
        <p>付款方式:</p>
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
      </div>
      <div className="flex flex-row">
        <p>送貨時間:</p>
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
      </div>
      <Input
        label="備註"
        name="clientMemo"
        id="clientMemo"
        type="text"
        htmlFor="clientMemo"
      />
      <button
        className="border-2 border-black rounded-[8px] w-[50px] mx-auto hover:bg-black hover:text-white"
        type="submit">
        送出
      </button>
    </form>
  );
}
