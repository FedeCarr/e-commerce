import "./CartWidget.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalProd, cart } = useContext(CartContext);

  return (
    <>
      {cart.length === 0 ? (
        <spam>Carrito vacio</spam>
      ) : (
        <Link to="/cart">
          <div className="container-cart">
            <AiOutlineShoppingCart
              size={50}
              style={{ fontSize: "2rem", color: "black" }}
            />
            <div className="bubble-counter">
              <span>{getTotalProd()}</span>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default CartWidget;
