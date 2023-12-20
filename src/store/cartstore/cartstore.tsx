import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

export type Cart = {
  productName: string;
  price: number;
  quantity: number;
  productUrl?: string;
  unit?: string;
};

type CartStore = {
  cart: Cart[];
  totalPrice: number;
  isCartOpen: boolean;
  addToCart: (addItemToCart: Cart) => void;
  removeFromCart: (removeItemFromCart: Cart) => void;
  clearCart: (clearItemFromCart: Cart) => void;
  addTotalPrice: (totalPrice: number) => void;
  setIsCartOpen: (isCartOpen: boolean) => void;
  resetCart: () => void;
};

const addToCart = (cart: Cart[], addItemToCart: Cart): Cart[] => {
  const findItemFromCart = cart.find(
    (item) => item.productName === addItemToCart.productName
  );
  if (findItemFromCart) {
    return cart.map((item) => {
      return item.productName === addItemToCart.productName
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }
  return [...cart, { ...addItemToCart, quantity: 1 }];
};

const removeFromCart = (cart: Cart[], removeItemFromCart: Cart): Cart[] => {
  const findItemFromCart = cart.find(
    (item) => item.productName === removeItemFromCart.productName
  );
  if (findItemFromCart && findItemFromCart.quantity === 1) {
    return cart.filter(
      (item) => item.productName !== removeItemFromCart.productName
    );
  }
  return cart.map((item) => {
    return item.productName === removeItemFromCart.productName
      ? { ...item, quantity: item.quantity - 1 }
      : item;
  });
};

const clearFromCart = (cart: Cart[], clearItemFromCart: Cart): Cart[] => {
  return cart.filter(
    (item) => item.productName !== clearItemFromCart.productName
  );
};

export const calculateTotalPrice = (
  totalPrice: number,
  cart: Cart[]
): number => {
  console.log("inside fuc", totalPrice);
  return cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
};

export const useCartStore = create<CartStore>()(
  devtools(
    persist(
      (set) => ({
        cart: [],
        totalPrice: 0,
        isCartOpen: false,
        addToCart: (addItemToCart: Cart) =>
          set((state) => ({
            ...state,
            cart: addToCart(state.cart, addItemToCart),
          })),
        removeFromCart: (removeItemFromCart: Cart) =>
          set((state) => ({
            ...state,
            cart: removeFromCart(state.cart, removeItemFromCart),
          })),
        clearCart: (clearItemFromCart: Cart) =>
          set((state) => ({
            ...state,
            cart: clearFromCart(state.cart, clearItemFromCart),
          })),
        addTotalPrice: (priceToAdd: number) =>
          set((state) => ({
            totalPrice: calculateTotalPrice(priceToAdd, state.cart),
          })),
        setIsCartOpen: (isCartOpen: boolean) =>
          set((state) => ({ ...state, isCartOpen })),
        resetCart: () => set(() => ({ cart: [], totalPrice: 0 })),
      }),

      // { name: "cart-storage", storage: createJSONStorage(() => sessionStorage) }
      {
        name: "cart-storage",
        storage: createJSONStorage(() => sessionStorage),
        partialize: (state) => ({
          cart: state.cart,
          totalPrice: state.totalPrice,
        }),
      }
    )
  )
);
