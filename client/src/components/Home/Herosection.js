import React from "react";
import classes from "./Herosection.module.css";
import food from "../../assets/food5.png";
function Herosection() {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <h1 className={classes.title}>
          Best Restaurant In
          <span style={{ fontWeight: "700", color: "#f54748" }}> Town.</span>
        </h1>
        <p className={classes.desc}>
          We provide best food in town, we provide home delivery and dine in
          services.
        </p>
        <div className={classes.btnContainer}>
          <button className={classes.orderButton}>Order now</button>
          <button className={classes.reservationButton}>Reservation</button>
        </div>
      </div>
      <img className={classes.img} src={food} alt="food" />
    </div>
  );
}

export default Herosection;
