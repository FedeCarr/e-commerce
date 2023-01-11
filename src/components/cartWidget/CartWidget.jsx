import "./CartWidget.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <Link to="/cart">
      <div className="container-cart">
        <AiOutlineShoppingCart
          size={50}
          style={{ fontSize: "2rem", color: "black" }}
        />
        <div className="bubble-counter">
          <span>{cart.length}</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
