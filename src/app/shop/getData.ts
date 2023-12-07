"use client";
import { useState, useEffect } from "react";
import { db, Product } from "@/utils/filebase/firebase";
import { query, onSnapshot, collection } from "firebase/firestore";

// category: string
export const useGetProduct = (category: string) => {
  const [productData, setProductData] = useState<Product[]>();

  useEffect(() => {
    const q = query(collection(db, category));
    const unsub = onSnapshot(q, (doc) => {
      setProductData(doc.docs.map((doc) => doc.data()) as Product[]);
    });
    return () => {
      unsub();
    };
  }, []);
  return { productData };
};
