import "./CartWidget.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
const CartWidget = () => {
  return (
    <div className="container-cart">
      <AiOutlineShoppingCart size={50} />
    </div>
  );
};

export default CartWidget;
