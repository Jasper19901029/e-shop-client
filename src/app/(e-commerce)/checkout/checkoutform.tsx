"use client";
// import Input from "@/components/input/input";
import { useCartStore, Cart } from "@/store/cartstore/cartstore";
import handleSub from "./checkoutaction";
import { redirect } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Checkoutform() {
  const { cart, totalPrice, resetCart } = useCartStore();
  const checkCellphoneValue = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const pattern = /^\d{0,10}$/;
    if (!pattern.test(e.target.value)) {
      e.target.value = "";
      return alert("請輸入手機號碼10個數字，僅接受數字0-9");
    }
  };
  async function clientAction(formData: FormData) {
    if (cart.length < 1) return alert("購物車內沒有商品");
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
    <form
      action={clientAction}
      className="flex flex-col space-y-4 basis-1/2 lg:mr-16">
      <h2 className="text-2xl font-bold">訂購人資訊</h2>
      <div className="space-y-2">
        <Label htmlFor="RecipientName" className="text-lg">
          姓名
        </Label>
        <Input name="RecipientName" id="RecipientName" type="text" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="RecipientMobile" className="text-lg">
          電話
        </Label>
        <Input
          name="RecipientMobile"
          id="RecipientMobile"
          type="text"
          minLength={10}
          maxLength={10}
          required
          onChange={checkCellphoneValue}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="RecipientAddress" className="text-lg">
          地址
        </Label>
        <Input
          name="RecipientAddress"
          id="RecipientAddress"
          type="text"
          required
        />
      </div>

      <div className="flex flex-col space-y-2">
        <Label className="text-lg">付款方式:</Label>
        <div className="w-full flex flex-row justify-start items-center">
          <div className="flex items-center">
            <Input
              className="h-4"
              name="IsCollection"
              id="IsCollection"
              type="radio"
              value={"N"}
              required
            />
            <Label htmlFor="IsCollection" className="w-[120px] text-lg -ml-4">
              匯款
            </Label>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Input
              className="h-4"
              name="IsCollection"
              id="IsCollection"
              type="radio"
              value={"Y"}
              required
            />
            <Label htmlFor="IsCollection" className="w-[140px] text-lg -ml-4">
              貨到付款
            </Label>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <Label className="text-lg">送貨時間:</Label>
        <div className="w-full flex flex-row justify-start items-center">
          <div className="flex items-center">
            <Input
              className="h-4"
              name="DeliveryTime"
              id="DeliveryTime"
              type="radio"
              value={"01"}
              required
            />
            <Label htmlFor="DeliveryTime" className="w-[120px] text-lg -ml-4">
              13時前
            </Label>
          </div>
          <div className="flex items-center">
            <Input
              className="h-4"
              name="DeliveryTime"
              id="DeliveryTime"
              type="radio"
              value={"02"}
              required
            />
            <Label htmlFor="DeliveryTime" className="w-[140px] text-lg -ml-4">
              14-18時
            </Label>
          </div>
          <div className="flex items-center">
            <Input
              className="h-4"
              name="DeliveryTime"
              id="DeliveryTime"
              type="radio"
              value={"04"}
              required
            />
            <Label htmlFor="DeliveryTime" className="w-[120px] text-lg -ml-4">
              不指定
            </Label>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="clientMemo" className="text-lg">
          備註
        </Label>
        <Input name="clientMemo" id="clientMemo" type="text" />
      </div>
      <Button
        variant={"ghost"}
        className="bg-sky-500 hover:bg-sky-400 text-lg"
        type="submit">
        送出
      </Button>
    </form>
  );
}
