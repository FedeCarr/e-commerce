import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);
  console.log(cart);
  return (
    <div>
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
