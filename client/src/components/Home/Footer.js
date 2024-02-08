import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css"
function Footer() {
  return (
    <div className={classes.container}>
      <Link to="/" className={classes.logo}>
          Foodio
          <span style={{ color: "#f54748" }}>.</span>
        </Link>
    </div>
  );
}

export default Footer;
