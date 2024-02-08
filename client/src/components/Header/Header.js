import React, { useState } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const user = {
    name: "Samruddhi",
  };
  const cart = {
    totalCount: 7,
  };
  const logout = () => {};
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>
          Foodio
          <span style={{ color: "#f54748" }}>.</span>
        </Link>
        <div className={classes.menuIcon} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <nav className={`${classes.nav} ${showMenu ? classes.show : ""}`}>
          <ul>
            <Link to="/home">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About </Link>
            <Link to="/reservation">Reservation</Link>
            {user ? (
              <li className={classes.menu_container}>
                <Link to="/dashboard">{user.name}</Link>
                <div className={classes.menu}>
                  <Link to="/profile">Profile</Link>
                  <Link to="/orders">Orders</Link>
                  <a onClick={logout}>Logout</a>
                </div>
              </li>
            ) : (
              <Link to="/login">Login</Link>
            )}

            <li>
              <Link to="/cart">
                Cart
                {cart.totalCount > 0 && (
                  <span className={classes.cart_count}>{cart.totalCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
