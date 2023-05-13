import React from "react";
import { NavLink } from "react-router-dom";
import pic from "./img/trade.avif";
import './index.css';




const Card = (props) => {
    return (<>
       <div className="col-md-4 col-10 mx-auto">
        <div className="card">
            <img src={props.imgsrc} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.data}</p>
                <NavLink to="/contact" className="btn btn-primary" id="card-btn">Join Now</NavLink>
            </div>
        </div>
        </div>
        
    </>)
}

export default Card