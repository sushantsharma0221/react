import React from "react";
import "./Home.css";
import image2 from "./Images/2.jpg";
import Card2 from "./Components/Card2";
import CardData2 from "./Components/CardData2";
const Home = () => {
  return (
    <>
      <div className="container-fluid header align-items-center justify-content-center d-flex">
        <div className="row text-center ">
          <div className="col-md-12">
            <h1>GRAYSCALE</h1>
            <p>
              A free, responsive, one page Bootstrap wesbite <br /> created by
              Sushant Sharma
            </p>

            <button className="mybtn mt-2">GET STARTED</button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      {/* section 2 */}
      <div className="container section2">
        <div className="row ">
          <div className="col-md-8 p-3">
            <img src={image2} className="img-fluid section2-img" alt="image2" />
          </div>
          <div className="col-md-4 box d-flex flex-column align-items-center justify-content-center text-center">
            <h5 className="mt-3 mt-md-0 ">SHORELINE</h5>
            <p>
              Grayscale is open source and MIT <br /> licensed. This means you
              can use it for any <br /> project - even commercial projects!{" "}
              <br /> Download it, customize it, <br /> and publish your website!
            </p>
          </div>
        </div>
      </div>
      {/* section 2 end */}
      <br />
      <br />
      <section className="my-cards mt-5">
        <div className="container-fluid ">
          <div className="row g-5 justify-content-around">
            <h1 className="text-center text-white">OUR SERVICES</h1>
            {CardData2.map((val, ind) => {
              return (
                <Card2
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
      <br />
      <section className="my-projects">
        <div className="container-fluid">
          <div className="row text-white my-5">
            <div className="col-md-12">
              <h3 className=" text-center ">MY PROJECTS</h3>
            </div>
          </div>

          <div className="row text-center text-white projects-container my-5">
            <div className="col-md-4  my-4 my-md-0">
              <h4>Food Website</h4>
              <iframe
                title="food-website"
                src="https://sushantsharma0221.github.io/Food-Website"
                frameborder="0"
              ></iframe>
            </div>
            <div className="col-md-4  my-4 my-md-0">
              <h4>Astrology Website</h4>
              <iframe
                title="Weather-app"
                src="https:astroDrishti.herokuapp.com"
                frameborder="0"
              ></iframe>
            </div>
            <div className="col-md-4  my-4 my-md-0">
              <h4>Corporate Website</h4>
              <iframe
                title="food-website"
                src="https://sushantsharma0221.github.io/CorporateWebsite"
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <br />
      <div className="container-fluid section3  d-flex flex-column align-items-center justify-content-center mt-5">
        <div className="row text-center ">
          <div className="col-md-12">
            <i class="fa-solid fa-paper-plane display-6 mb-3"></i>

            <h2>Subscribe to receive updates!</h2>
            <input
              type="email"
              className="email mt-4 p-4 "
              placeholder="Email"
            />
            <button className="mybtn notify-btn mt-3 mt-md-0">
              NOTIFY ME!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
