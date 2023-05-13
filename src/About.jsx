import React from "react";
import Common from "./common";
import img from "./img/btc.png"
import Navbar from "./Navbar";
import crypto from "./img/crypto.jpg";

const About =()=>{
   return(<>
    <Common
      h1 = "About Us"
         p="Welcome to our trading firm!

We are a team of experienced traders who specialize in providing our clients with cutting-edge trading solutions. Our mission is to help you navigate the markets and achieve your financial goals."
         btn ="Contact Us"
         pic = {crypto}
         visit = "/service"
    />
   </>)
};
export default About