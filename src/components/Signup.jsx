import React from "react";
import "./styles/Signup.css";
import {Link} from "react-router-dom";

function Signup() {
  return (
    <div className="container">
      <main className="form-signup w-100 m-auto">
        <form>
        <i className="fa-solid fa-9x fa-cart-shopping mb-5" ></i>
        
          <h4 className="mb-3">
            Please <span className="theme-span">Sign Up</span> Here !!
          </h4>

          <input
            type="text"
            name="FirstName"
            className="form-control top"
            placeholder="First Name"
            required
            autoFocus
          />

          <input
            type="text"
            name="LastName"
            className="form-control middle"
            placeholder="Last Name"
            required
            autoFocus
          />

          <input
            type="email"
            name="EmailAdd"
            className="form-control middle"
            placeholder="Email address"
            required
            autoFocus
          />

          <input
            type="password"
            name="password"
            className="form-control bottom mb-4"
            placeholder="Password"
            required
            autoFocus
          />

          <button
            className="btn btn-sm btn-outline-light btn-block signup-btn"
            type="submit"
          >
            Sign Up
          </button>
          <p>
            Already have an account?{" "}
            <Link id="login-link" to="/signin">
              Sign In
            </Link>{" "}
            here
          </p>
        </form>
      </main>
    </div>
  );
}

export default Signup;
