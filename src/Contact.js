import React from "react";
import "./Contact.css";
import { useState } from "react";
const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.fullname} and my Phone No. is ${data.phone}`);
  };
  return (
    <>
      <section className="form-section">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-8 mx-auto">
              <form onSubmit={formSubmit}>
                <h2 className="my-3 form-heading">
                  Contact us by filing the form below :
                </h2>
                <div className="mb-3">
                  <label for="name" className="form-label">
                    Full name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="fullname"
                    value={data.fullname}
                    onChange={InputEvent}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="password"
                    value={data.password}
                    onChange={InputEvent}
                  />
                </div>
                <div className="mb-3">
                  <label for="phone number" className="form-label">
                    Mobile No.
                  </label>
                  <input
                    type="phone"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="phone"
                    value={data.phone}
                    onChange={InputEvent}
                  />
                </div>
                <button type="submit" className=" submit-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
