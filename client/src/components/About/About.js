import React from "react";
import classes from "./About.module.css";
import food from "../../assets/food4.png";
import Header from "../Header/Header";
import f from "../../assets/pizza.png"
function About() {
  return (
    <>
      <Header></Header>
      <div className={classes.container}>
        <img className={classes.img} src={food} alt="food" />
        <div className={classes.left}>
          <h1 className={classes.title}>
            About Our
            <span style={{ fontWeight: "700", color: "#f54748" }}>
              {" "}
              Restaurant
            </span>
          </h1>
          <p className={classes.desc}>
            We provide best food in town, we provide home delivery and dine in
            services.
          </p>
          <button className={classes.orderButton}>Order now</button>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.left}>
          <p className={classes.desc}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit.
          </p>
        </div>
        <img className={classes.img} src={f} alt="food" />
      </div>
    </>
  );
}

export default About;
