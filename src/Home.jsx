import React from "react";
import img from "./img/btc.png"
import { NavLink } from "react-router-dom";
import Common from "./common";

const Home = () => {
   return (<>
      <Common
         h1 = "Learn Trading With"
         strong="Professionals"
         btn ="Get Started"
         pic = {img}
         visit = "/service"
      />
   </>)
};
export default Home;