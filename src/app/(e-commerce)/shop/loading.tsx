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
export default function Loading() {
  return (
    <div className="w-3/5 flex flex-row flex-wrap justify-start items-center sm:px-4 sm:gap-8 space-y-2 sm:space-y-0 sm:mt-4 animate-fadeout">
      <Skeleton className="">
        <Card>
          <CardHeader>
            <CardTitle className="h-[150px] w-[200px]"></CardTitle>
          </CardHeader>
          <CardContent>
            <p></p>
          </CardContent>
          <CardFooter className="w-full">
            <Button className="w-full bg-sky-700" variant={"ghost"}></Button>
          </CardFooter>
        </Card>
      </Skeleton>
      <Skeleton className="">
        <Card>
          <CardHeader>
            <CardTitle className="h-[150px] w-[200px]"></CardTitle>
          </CardHeader>
          <CardContent>
            <p></p>
          </CardContent>
          <CardFooter className="w-full">
            <Button className="w-full bg-sky-700" variant={"ghost"}></Button>
          </CardFooter>
        </Card>
      </Skeleton>
      <Skeleton className="">
        <Card>
          <CardHeader>
            <CardTitle className="h-[150px] w-[200px]"></CardTitle>
          </CardHeader>
          <CardContent>
            <p></p>
          </CardContent>
          <CardFooter className="w-full">
            <Button className="w-full bg-sky-700" variant={"ghost"}></Button>
          </CardFooter>
        </Card>
      </Skeleton>
      <Skeleton className="">
        <Card>
          <CardHeader>
            <CardTitle className="h-[150px] w-[200px]"></CardTitle>
          </CardHeader>
          <CardContent>
            <p></p>
          </CardContent>
          <CardFooter className="w-full">
            <Button className="w-full bg-sky-700" variant={"ghost"}></Button>
          </CardFooter>
        </Card>
      </Skeleton>
      <Skeleton className="">
        <Card>
          <CardHeader>
            <CardTitle className="h-[150px] w-[200px]"></CardTitle>
          </CardHeader>
          <CardContent>
            <p></p>
          </CardContent>
          <CardFooter className="w-full">
            <Button className="w-full bg-sky-700" variant={"ghost"}></Button>
          </CardFooter>
        </Card>
      </Skeleton>
      <Skeleton className="">
        <Card>
          <CardHeader>
            <CardTitle className="h-[150px] w-[200px]"></CardTitle>
          </CardHeader>
          <CardContent>
            <p></p>
          </CardContent>
          <CardFooter className="w-full">
            <Button className="w-full bg-sky-700" variant={"ghost"}></Button>
          </CardFooter>
        </Card>
      </Skeleton>
    </div>
  );
}
