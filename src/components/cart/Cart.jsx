import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Formix from "../formix/Formix";
import { getDoc, doc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Orders from "../orders/Orders";
const Cart = () => {
  const [buy, setBuy] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const { deleteProductById } = useContext(CartContext);
  const { cart, clearCart, getTotalPrice } = useContext(CartContext);
  const [order, setOrder] = useState({});
  const openForm = () => {
    if (cart.length > 0) {
      setBuy(true);
    } else {
      alert("No se puede comprar");
    }
  };
  useEffect(() => {
    if (orderId) {
      const orderCollection = collection(db, "orders");
      const ref = doc(orderCollection, orderId);

      getDoc(ref).then((res) => {
        setOrder({
          id: res.id,
          ...res.data(),
        });
      });
    }
  }, [orderId]);
  if (orderId) {
    return (
      <div>
        <h1>Tu orden de compra es: {orderId}</h1>
        <Link to={"/"}>Volver a comprar</Link>
        <Orders order={order} />
      </div>
    );
  }
  return (
    <div>
      <div>
        <h2>Info del carrito</h2>
        <h3>Precio total: {getTotalPrice()}</h3>
        <h3>
          Precio total: {getTotalPrice() > 0 ? getTotalPrice() : "No hay items"}
        </h3>
        {buy ? (
          <Formix
            cart={cart}
            getTotalPrice={getTotalPrice}
            setOrderId={setOrderId}
            clearCart={clearCart}
          />
        ) : (
          <div>
            <h3>Quiere limpiar carrito???</h3>
            <button onClick={() => clearCart()}>Si, limpiar</button>
            <button onClick={() => openForm()}>Comprar</button>
          </div>
        )}
      </div>
      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <h2>{item.price}</h2>
          <h2>{item.quantity} unidades</h2>
          <button
            onClick={() => {
              deleteProductById(item.id);
            }}
          >
            Borrar item
          </button>
        </div>
      ))}
    </div>
  );
};
export default Cart;
