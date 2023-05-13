import React from "react";
import img from "./img/btc.png"
import { NavLink } from "react-router-dom";

const Common = (props) => {
   return (<>
      <section id="header" className="d-flex align-items-center">
         <div className="container-fluid nav bg">
            <div className="row">
               <div className="col-10 mx-auto">
                  <div className="row">
                     <div className="col-md-6 mt-2 pt-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>{props.h1} <strong className="brand-name">{props.strong} </strong></h1>
                        <p>{props.p}</p>
                        <h3 className="mt-3">
                           Master The Markets
                        </h3>
                        <div className="mt-3">
                           <NavLink to={props.visit} className="btn-get-started"> {props.btn}</NavLink>
                        </div>
                     </div>
                     <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={props.pic} className="img-fluid animated" alt="img" />
                     </div></div>
               </div>
            </div>
         </div>
      </section>
      <footer class="bg-dark text-white py-3">
         <div class="container text-center">
            <p class="mb-0">&copy; 2023 My Trading Firm. All Rights Reserved.</p>
         </div>
      </footer>
   </>)
};
export default Common;