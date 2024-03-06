"use client";
import React from "react";
import Input from "@/components/input/input";
import Image from "next/image";
import { Product } from "@/utils/firebase/firebase";
import { useCartStore } from "@/store/cartstore/cartstore";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import styles from "@/components/ui/button.module.css";

export default function ProductDetail({
  productName,
  price,
  quantity,
  productUrl,
  isSell,
  introduction,
  inspectionUrl1,
  inspectionUrl2,
  unit,
}: Product): React.ReactNode {
  const { addToCart, addTotalPrice } = useCartStore();
  return (
    <div className="static flex flex-col lg:flex-row items-center w-full h-full justify-center">
      {/* image */}
      <Carousel
        className="max-w-xs "
        opts={{
          align: "start",
          loop: true,
        }}>
        <CarouselContent className="">
          <CarouselItem className="flex items-center justify-center basis bg-slate-100/20">
            <Image
              src={productUrl}
              alt={productName}
              width={500}
              height={500}
            />
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center basis bg-slate-100/20">
            <Image
              src={inspectionUrl1 ? inspectionUrl1 : ""}
              alt={productName}
              width={500}
              height={500}
            />
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center basis bg-slate-100/20">
            <Image
              src={inspectionUrl2 ? inspectionUrl2 : ""}
              alt={productName}
              width={500}
              height={500}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="w-6 h-6 right-2/3 -bottom-12 bg-slate-100/20" />
        <CarouselNext className="w-6 h-6 left-2/3 -bottom-12 bg-slate-100/20" />
      </Carousel>
      {/* content */}
      <div className="relative w-full my-20 lg:my-0 lg:w-2/5 h-[350px] flex flex-col justify-around">
        <CardHeader>
          <CardTitle>{productName}</CardTitle>
          <CardDescription>
            ${price} / {unit}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-lg">{introduction}</CardContent>
        <CardFooter className="flex justify-center">
          <Button
            variant="ghost"
            className={` ${styles.CartBtn} hover:bg-sky-500 text-gray-50 bg-sky-700 w-[200px]`}
            disabled={isSell ? false : true}
            onClick={() => {
              addToCart({ productName, price, quantity, productUrl });
              addTotalPrice(price);
            }}>
            {isSell && (
              <span className={styles.IconContainer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  fill="rgb(17, 17, 17)"
                  className="cart">
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                </svg>
              </span>
            )}
            <p className={`${isSell && styles.text}`}>
              {isSell ? "加入購物車" : "暫無銷售"}
            </p>
          </Button>
        </CardFooter>
      </div>
    </div>
    // <div className="relative flex flex-col justify-around items-center self-start space-y-4 mb-4">
    //   {isSell && (
    //     <div className="w-screen flex flex-row justify-around bg-slate-300 sticky top-0">
    //       <button
    //         className="bg-black text-white hover:bg-white hover:text-black font-bold rounded"
    // onClick={() => {
    //   addToCart({ productName, price, quantity, productUrl });
    //   addTotalPrice(price);
    // }}>
    //         加入購物車
    //       </button>
    //       <p>
    //         ${price}/{unit}
    //       </p>
    //     </div>
    //   )}
    //   <p className="font-bold text-3xl">{productName}</p>
    //   <p className="w-6/12">{introduction}</p>
    //   <Image
    //     src={productUrl}
    //     alt={productName}
    //     width={100}
    //     height={100}
    //     sizes="100vw"
    //     className="w-[250px] h-[200px] lg:w-[500px] lg:h-[450px] object-contain border-[1px] border-black"
    //   />
    //   {inspectionUrl1 && (
    //     <Image
    //       src={inspectionUrl1}
    //       alt={productName}
    //       width={100}
    //       height={100}
    //       sizes="100vw"
    //       className="w-[250px] h-[200px] lg:w-[500px] lg:h-[450px] object-contain border-[1px] border-black"
    //     />
    //   )}
    //   {inspectionUrl2 && (
    //     <Image
    //       src={inspectionUrl2}
    //       alt={productName}
    //       width={100}
    //       height={100}
    //       sizes="100vw"
    //       className="w-[250px] h-[200px] lg:w-[500px] lg:h-[450px] object-contain border-[1px] border-black"
    //     />
    //   )}
    // </div>
  );
}
