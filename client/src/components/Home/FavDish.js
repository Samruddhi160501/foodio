import React from "react";
import classes from "./FavDish.module.css";
import food4 from "../../assets/food4.png";
function FavDish() {
  return (
    <div className={classes.container}>
      <img src={food4} className={classes.img} alt="food2"></img>
      <div>
        <h1 className={classes.head}>
          Our Most Popular <span style={{ color: "#f54748" }}>Dish.</span>
        </h1>
        <p className={classes.desc}>
          This dish is full of flavor and nutrition! Quinoa is a complete
          protein, providing all the essential amino acids your body needs, and
          is also a good source of fiber.
        </p>
        <button className={classes.orderButton}>Order now</button>
      </div>
    </div>
  );
}

export default FavDish;
