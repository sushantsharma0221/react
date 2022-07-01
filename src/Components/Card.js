import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.css";
const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 ">
        <div className="card">
          <img
            src={props.imgsrc}
            className="card-img-top img-fluid"
            alt={props.imgsrc}
          />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">{props.desc}</p>

            <NavLink to="">
              <button className="btn"> Get Started</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
