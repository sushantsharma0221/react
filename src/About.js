import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <section className=" about-us-bg">
        <div className="container mytext">
          <div className="row text-white">
            <div className="col-md-9 mx-auto">
              <h1 className="text-center">About Us</h1>
              <h4 className="text-center">Our Story</h4>
              <p className="my-3 about-us-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium cum fuga aperiam aliquam minima veritatis recusandae
                iure? Expedita quasi omnis ad maiores quo. Optio quod sequi
                tempora, ratione rem nisi maxime, sunt maiores facilis sit
                consequatur eveniet. Voluptatibus repudiandae consectetur
                obcaecati excepturi fuga totam est quo, ea facilis accusamus,
                sit nisi sint placeat non dolore exercitationem autem adipisci
                magni! Quaerat odit voluptates deleniti blanditiis veritatis
                sint suscipit! Laudantium, ratione similique.
                <br />
                <br />
                Obcaecati excepturi fuga totam est quo, ea facilis accusamus,
                sit nisi sint placeat non dolore exercitationem autem adipisci
                magni! Quaerat odit voluptates deleniti blanditiis veritatis
                sint suscipit! Laudantium, ratione similique.
                <br />
                <br />
                Laudantium cum fuga aperiam aliquam minima veritatis recusandae
                iure? Expedita quasi omnis ad maiores quo. Optio quod sequi
                tempora, ratione rem nisi maxime, sunt maiores facilis sit
                consequatur eveniet. Voluptatibus repudiandae consectetur
              </p>
              <div className="row text-center">
                <div className="col-md-12">
                  <button className="my-btn mt-2">Read more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
