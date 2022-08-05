import React from "react";
import "./styles/Signin.css";
import {Link} from "react-router-dom";

function Signin() {
  return (
    <div className="container">
      <main className="form-signin w-100 m-auto">
        <form>
          <i className="fa-solid fa-9x fa-cart-shopping mb-5" ></i>
          <h4 className="mb-3">
            Please <span className="theme-span">Sign In</span> Here !!
          </h4>

          <input
            type="email"
            name="EmailAdd"
            className="form-control top"
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
            className="btn btn-sm btn-outline-light btn-block signin-btn"
            type="submit"
          >
            Sign In
          </button>
          <p>
            Don't have an account ?{" "}
            <Link id="signup-link" to="/signup">
              Sign up
            </Link>{" "}
            here
          </p>
        </form>
      </main>
    </div>
  );
}

export default Signin;
