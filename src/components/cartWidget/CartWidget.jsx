import "./CartWidget.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
const CartWidget = () => {
  return (
    <Link to="/cart">
      <div className="container-cart">
        <AiOutlineShoppingCart
          size={50}
          style={{ fontSize: "2rem", color: "black" }}
        />
        <div className="bubble-counter">
          <span>12</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
