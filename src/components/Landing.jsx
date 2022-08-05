import React from "react";
import "./styles/Landing.css";
import {Link} from "react-router-dom";

function Landing() {
  return (
    <div className="landing">
      <div>
        <i className="fa-solid fa-9x fa-cart-shopping mb-3"></i>
      </div>
      <h1 className="logoheading mb-3">Flipkart Ekart Tracer</h1>
      <p className="mb-3 slogan"><strong>Trace your flipkart goods !!</strong></p>
      <div className="container btn_cont">
        <Link className="btn btn-outline-light" to="/signin">
          <strong>Sign In</strong>
        </Link>
        <Link className="btn btn-outline-light" to="/signup">
          <strong>Sign Up</strong>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
