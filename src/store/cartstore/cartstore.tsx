import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

type Cart = {
  name: string;
  price: number;
  quantity: number;
  productUrl: string;
};

type CartStore = {
  cart: Cart[];
  totalPrice: number;
  addToCart: (addItemToCart: Cart) => void;
  removeFromCart: (removeItemFromCart: Cart) => void;
  clearCart: (clearItemFromCart: Cart) => void;
  addTotalPrice: (totalPrice: number) => void;
};

const addToCart = (cart: Cart[], addItemToCart: Cart): Cart[] => {
  const findItemFromCart = cart.find(
    (item) => item.name === addItemToCart.name
  );
  if (findItemFromCart) {
    return cart.map((item) => {
      return item.name === addItemToCart.name
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }
  return [...cart, { ...addItemToCart, quantity: 1 }];
};

const removeFromCart = (cart: Cart[], removeItemFromCart: Cart): Cart[] => {
  const findItemFromCart = cart.find(
    (item) => item.name === removeItemFromCart.name
  );
  if (findItemFromCart && findItemFromCart.quantity === 1) {
    return cart.filter((item) => item.name !== removeItemFromCart.name);
  }
  return cart.map((item) => {
    return item.name === removeItemFromCart.name
      ? { ...item, quantity: item.quantity - 1 }
      : item;
  });
};

const clearFromCart = (cart: Cart[], clearItemFromCart: Cart): Cart[] => {
  return cart.filter((item) => item.name !== clearItemFromCart.name);
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
      (set, get) => ({
        cart: [],
        totalPrice: 0,
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
      }),
      { name: "cart-storage", storage: createJSONStorage(() => sessionStorage) }
    )
  )
);
