import { db, Product } from "@/utils/filebase/firebase";
import { create } from "zustand";

type ProductState = {
  product: Product[] | undefined;
  setProduct: (product: Product[] | undefined) => void;
};

export const useProductStore = create<ProductState>()((set) => ({
  product: [],
  setProduct: (product) => set((state) => ({ ...state.product, product })),
}));
