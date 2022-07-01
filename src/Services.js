import React from "react";
import "./Services.css";
import Card from "./Components/Card";
import CardData from "./Components/CardData";
const Services = () => {
  return (
    <>
      <section className="cards-container">
        <div className="container">
          <div className="row g-5 justify-content-around">
            {CardData.map((val, ind) => {
              return (
                <Card
                  key={ind}
                  imgsrc={val.imgsrc}
                  title={val.title}
                  desc={val.desc}
                />
              );
            })}
          </div>
        </div>
      </section>
      <br />
    </>
  );
};

export default Services;
