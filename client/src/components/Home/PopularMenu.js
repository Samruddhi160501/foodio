import React from "react";
import classes from "./PopularMenu.module.css";
import MenuCard from "../shared/carrds/MenuCard";
import { menu } from "../../utils/data";
const options = ["All Category", "Starter", "Main Course", "Dessert", "Drinks"];

function PopularMenu() {
  return (
    <div className={classes.container}>
      <h1 className={classes.head}>Our Popular Menu</h1>
      <div className={classes.options}>
        {options.map((item) => (
          <button className={classes.btn}>{item}</button>
        ))}
      </div>
      <div className={classes.card}>
        {menu.map((item) => (
          <MenuCard menu={item} />
        ))}
      </div>
    </div>
  );
}

export default PopularMenu;
