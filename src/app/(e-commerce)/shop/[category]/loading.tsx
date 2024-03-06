import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import Loading from "@/components/loading/loading";
export default function Loading() {
  return (
    <div className="flex space-x-4">
      <Skeleton className="w-[300px] h-[300px]"></Skeleton>
      <div className="mt-12">
        <Skeleton className="w-[150px] h-10 mb-2"></Skeleton>
        <Skeleton className="w-[100px] h-6 mb-6"></Skeleton>
        <Skeleton className="w-[300px] h-8 mb-4"></Skeleton>
        <Skeleton className="w-[300px] h-8 mb-4"></Skeleton>
        <Skeleton className="w-[300px] h-8 mb-4"></Skeleton>
      </div>
    </div>
  );
}
