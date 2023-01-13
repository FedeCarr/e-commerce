import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, clearCart, getTotalPrice } = useContext(CartContext);
  if (cart.length < 1) {
    return <h2>No hay elementos</h2>;
  }
  return (
    <div>
      <div>
        <h2>Info del carrito</h2>
        <h3>Precio total: {getTotalPrice()}</h3>
        <h3>
          Precio total: {getTotalPrice() > 0 ? getTotalPrice() : "No hay items"}
        </h3>
      </div>
      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <h2>{item.price}</h2>
          <h2>{item.quantity} unidades</h2>
        </div>
      ))}
      <div>
        <h3>Quiere limpiar carrito???</h3>
        <button onClick={() => clearCart()}>Si, limpiar</button>
      </div>
    </div>
  );
};
export default Cart;
