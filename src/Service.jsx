import React from "react";
import pic from "./img/trade.avif";
import { NavLink } from "react-router-dom";
import Card from "./card";
import Sdata from "./Sdata";

const Service = () => {
   return (/*<>
      <div id="service" className="container-fluid nav bg">
         <div className="row">
            <div className="col-10 mx-auto d-flex flex-column">
               
               <div className="my-5">
                  <h1 className="tab-center">Our Services</h1>
                  <p>As a trading firm, we offer a range of services and solutions designed to help our clients navigate the financial markets and achieve their trading goals. Here are some of the key services we offer</p>
                  <ol>
                     <li>Portfolio Management: We offer customized portfolio management solutions tailored to your unique requirements. Our team of experts can help you build a diversified portfolio that meets your investment goals and risk tolerance.</li>
                     <li>Trading Education: We believe that education is key to successful trading. That's why we offer a range of educational resources, including webinars, seminars, and one-on-one coaching, to help our clients improve their trading skills and knowledge.</li>
                     <li>Market Analysis: We provide in-depth market analysis and research to help our clients make informed trading decisions. Our team of analysts and researchers monitor the markets closely and provide regular updates on market trends, news, and events.</li>
                     <li>Risk Management: We understand that managing risk is critical to successful trading. That's why we offer comprehensive risk management solutions to help our clients minimize risk and protect their investments.</li>
                  </ol>
                  <div className="mt-3">
                           <NavLink to="/Contact" className="btn-get-started">Join Now</NavLink>
                        </div>
               </div>
               <div className="mt-5 pr-5">
                  <img src={pic} className="trade" alt="pic"/>
               </div>
            </div>
         </div>
      </div>
   </>*/

      <>
         <div className="my-5">
            <h1 className="text-center">Our Services</h1>
         </div>
         <div  className="container-fluid mb-5">
            <div className="row">
               <div className="col-10 mx-auto">
                  <div className="row gy-4">
                    
                        {Sdata.map((val,ind)=>{
                           return (<Card
                              imgsrc ={val.imgsrc}
                              title={val.title}
                              data = {val.data}
                           />)
                        })}
                  
                  </div>
               </div>
            </div>
         </div>
      </>)
};
export default Service;