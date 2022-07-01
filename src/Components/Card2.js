import React from "react";

import "./Card.css";
const Card2 = (props) => {
  return (
    <>
      <div className="col-md-4  ">
        <div className="card">
          <img
            src={props.imgsrc}
            className="card-img-top img-fluid"
            alt={props.imgsrc}
          />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">{props.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card2;
