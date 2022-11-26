import "./NavBar.css";

import CartWidget from "../cartWidget/CartWidget";
const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="container-logo">
        <img
          className="logo-navbar"
          src="https://res.cloudinary.com/dvbqwti4c/image/upload/v1669482207/clipart1356762_cv5x32.png"
          alt=""
          srcset=""
        />
      </div>
      <ul className="navbar">
        <li className="navbar-item">Vegetables</li>
        <li className="navbar-item">Fruits</li>
        <li className="navbar-item">Salad</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
