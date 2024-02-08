import React from "react";
import FavDish from "./FavDish";
import PopularMenu from "./PopularMenu";
import classes from "./Herosection.module.css";
import Footer from "./Footer";
function Home() {
  return (
    <div>
      <FavDish></FavDish>
      <PopularMenu />
      <div className={classes.box}>
        <h1 style={{justifyContent:"center",textAlign:"center",color:"#311f09",fontSize:"52px"}}>Hungry? We are open now..</h1>
        <div style={{justifyContent:"center",textAlign:"center"}}>
          <button className={classes.orderBtn}>Order now</button>
          <button className={classes.reservationBtn} style={{backgroundColor:"#ffffff7f"}}>Reservation</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
