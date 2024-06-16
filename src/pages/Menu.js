import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import CartPage from "./CartPage";
const Menu = () => {
  return (
    <>
      <nav className="navigation">
        <ul className="nav-list">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/cart">Service</Link>
          </li>
          <li>
            <Link to="/contacts">contact</Link>
          </li>
          <li><Link to='/form'>Form</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
      </nav>
      <CartPage />
    </>

  );
};
export default Menu;
