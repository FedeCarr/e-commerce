import "./NavBar.css";
import { Link } from "react-router-dom";
import CartWidget from "../cartWidget/CartWidget";
const NavBar = () => {
  return (
    <div className="navbar-container">
      <Link className="container-logo" to="/">
        <img
          className="logo-navbar"
          src="https://res.cloudinary.com/dvbqwti4c/image/upload/v1669482207/clipart1356762_cv5x32.png"
          alt=""
          srcset=""
        />
      </Link>
      <ul className="navbar">
        <Link className="navbar-item" to="/category/vegetables">
          Vegetables
        </Link>
        <Link className="navbar-item" to="/category/fruit">
          Fruits
        </Link>
        <Link className="navbar-item" to="/">
          All
        </Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
