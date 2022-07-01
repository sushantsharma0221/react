import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container-fluid ">
          <div className="row text-center">
            <div className="col-md-12 mt-4">
              <div className="icons d-flex justify-content-center">
                <div className="icon">
                  <i class="fa-brands fa-twitter"></i>
                </div>
                <div className="icon">
                  <i class="fa-brands fa-facebook"></i>
                </div>
                <div className="icon">
                  <i class="fa-brands fa-github"></i>
                </div>
              </div>

              <br />
              <p>Copyright © Grayscale Website 2022</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
