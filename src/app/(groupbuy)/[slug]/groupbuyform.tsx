"use client";
import React from "react";
import { FormData } from "@/utils/firebase/firebase";
import { unstable_noStore as noStore } from "next/cache";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function GroupBuyForm({ groupSlug }: { groupSlug: FormData }) {
  return (
    <Card className="my-20 w-[700px]">
      <CardHeader className="space-y-4">
        <CardTitle>{groupSlug.groupBuyName}</CardTitle>
        <CardDescription>團購商品: {groupSlug.groupBuyProduct}</CardDescription>
        <CardDescription>團購主姓名: {groupSlug.groupBuyOwner}</CardDescription>
      </CardHeader>
      <CardContent>
        {groupSlug.questions.map((question) => (
          <div key={question.title} className="mb-6">
            {question.type === "text" && (
              <div>
                <Label htmlFor={question.title}>
                  {question.title}
                  <span className="ml-2 text-xs ">
                    {question.required ? "(必填)" : null}
                  </span>
                </Label>
                <Input
                  id={question.title}
                  required={question.required}
                  className="w-[350px]"
                />
              </div>
            )}
            {question.type === "radio" && (
              <div>
                <Label htmlFor={question.title} className="">
                  {question.title}
                  <span className="ml-2 text-xs ">
                    {question.required ? "(必填)" : null}
                  </span>
                </Label>

                <RadioGroup
                  required={question.required}
                  className="space-y-4 mt-2">
                  {question.questions.map((question: string, index: number) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={question} id={`${index}`} />
                      <Label htmlFor={`${index}`}>{question}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button variant={"ghost"}>送出表單</Button>
      </CardFooter>
    </Card>
  );
}
