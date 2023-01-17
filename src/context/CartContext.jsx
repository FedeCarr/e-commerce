import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (element) => {
    if (isInCart(element)) {
      let newArr = cart.map((prod) => {
        if (prod.id === element.id) {
          let newProd = { ...prod, quantity: element.quantity };
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
  const getQuantityById = (id) => {
    const product = cart.find((elemento) => elemento.id === id);
    return product?.quantity;
  };
  const getTotalPrice = () => {
    const total = cart.reduce((acc, element) => {
      return acc + element.price * element.quantity;
    }, 0);
    return total;
  };
  const getTotalProd = () => {
    const total = cart.reduce((acc, element) => {
      return acc + element.quantity;
    }, 0);
    return total;
  };
  const deleteProductById = (id) => {
    const newArray = cart.filter((prod) => prod.id !== id);
    setCart(newArray);
  };
  const data = {
    cart,
    addToCart,
    clearCart,
    getQuantityById,
    getTotalPrice,
    deleteProductById,
    getTotalProd,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
