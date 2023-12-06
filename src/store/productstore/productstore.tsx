import { db, Product } from "@/utils/filebase/firebase";
import { query, onSnapshot, collection } from "firebase/firestore";
import { create } from "zustand";

type ProductState = {
  product: Product[];
  setProduct: (product: Product[]) => void;
};

export const useProductStore = create<ProductState>((set) => ({
  product: [],
  setProduct: (product) => set({ product }),
}));

console.log(useProductStore);
