import React from "react";
import classes from "./Menu.module.css";
import PopularMenu from "../Home/PopularMenu";
import Header from "../Header/Header";
function Menu() {
  return (
    <div className={classes.container}>
      <Header />
      <PopularMenu />
    </div>
  );
}

export default Menu;
