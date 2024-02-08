import React from "react";
import classes from "./Menucard.module.css";
function MenuCard(props) {
  console.log(props);
  return (
    <div className={classes.container}>
      <img src={props.menu.img} alt={props.menu.img} className={classes.img}></img>
      <p>{props.menu.desc}</p>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2%",
        }}
      >
        <h3 className={classes.price}>{props.menu.prize}</h3>
        <button className={classes.btn}>Order now</button>
      </div>
    </div>
  );
}

export default MenuCard;
