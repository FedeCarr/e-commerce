import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (element) => {
    if (isInCart(element)) {
      let newArr = cart.map((prod) => {
        if (prod.id === element.id) {
          let newProd = { ...prod, quantity: prod.quantity + element.quantity };
          return newProd;
        } else {
          return prod;
        }
      });
      setCart(newArr);
    } else {
      setCart([...cart, element]);
    }
  };
  const isInCart = (item) => {
    return cart.some((elemento) => elemento.id === item.id);
  };
  const clearCart = () => {
    setCart([]);
  };
  const data = {
    cart,
    addToCart,
    clearCart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
