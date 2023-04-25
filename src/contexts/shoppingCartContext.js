import { createContext, useContext, useState } from "react";

const shoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(shoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function getItemQuantity(name) {
    return cartItems.find((item) => item.name === name)?.qty || 0;
  }

  function increaseItemQuantity(name) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.name === name) == null) {
        return [...currItems, { name, qty: 1 }];
      } else {
        return currItems.map((item) => {
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
      }}
    >
      {children}
    </shoppingCartContext.Provider>
  );
}
