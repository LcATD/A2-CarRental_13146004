//I hate coding contexts, I have massive skill issue when it comes to figuring our these logic
import { createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/shoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

const shoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(shoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage("shopping-cart", []);
  const [cartOpen, setCartOpen] = useState(false);
  const cartQty = cartItems.reduce((qty, item) => item.qty + qty, 0);
  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

  function getItemQuantity(name) {
    //Render on the screen how many items are currently in the basket
    return cartItems.find((item) => item.name === name)?.qty || 0;
  }

  function increaseItemQuantity(name) {
    //Add 1 item to basket
    setCartItems((currItems) => {
      if (currItems.find((item) => item.name === name) == null) {
        return [...currItems, { name, qty: 1 }];
      } else {
        return currItems.map((item) => {
          //check to make it logically impossible to get more than 20 items of the same type
          if (item.name === name && item.qty < 20) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
    return null;
  }

  function decreaseItemQuantity(name) {
    //Remove 1 item from basket
    setCartItems((currItems) => {
      if (currItems.find((item) => item.name === name)?.qty === 1) {
        return currItems.filter((item) => item.name !== name);
      } else {
        return currItems.map((item) => {
          if (item.name === name) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
    return null;
  }

  function removeFromCart(name) {
    //Remove multiple items of the same type from basket
    setCartItems((currItems) => {
      return currItems.filter((item) => item.name !== name);
    });
  }

  return (
    <shoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartOpen,
        cartItems,
        cartQty,
      }}
    >
      {children}
      <ShoppingCart isOpen={cartOpen} />
    </shoppingCartContext.Provider>
  );
}
