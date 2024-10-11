import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import Signup from "./Signup";
export default function Signin() {
  return (
    <div id="wd-signin-screen" className="container mt-5">
  <h3 className="mb-4">Sign in</h3>

  <form>
    <div className="mb-3">
      <input 
        id="wd-username" 
        className="form-control" 
        placeholder="Username" 
        type="text" 
        required 
      />
    </div>

    <div className="mb-3">
      <input 
        id="wd-password" 
        className="form-control" 
        placeholder="Password" 
        type="password" 
        required 
      />
    </div>

    <div className="d-grid gap-2">
      <Link to="/Kanbas/Dashboard">
        <button id="wd-signin-btn" className="btn btn-primary btn-block">
          Sign in
        </button>
      </Link>
    </div>

    <div className="text-center mt-3">
      <Link to="/Kanbas/Account/Signup">
        <button id="wd-signup-link" className="btn btn-link">
          Don't have an account? Sign up
        </button>
      </Link>
    </div>
  </form>
</div>
);}
