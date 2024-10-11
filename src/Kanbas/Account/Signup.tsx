import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
return (

<div className="container mt-5">
  <h3 className="mb-4">Sign up</h3>

  <form>
    <div className="mb-3">
      <input 
        type="text" 
        id="signup-username" 
        className="form-control" 
        placeholder="Username" 
        required
      />
    </div>

    <div className="mb-3">
      <input 
        type="password" 
        id="signup-password" 
        className="form-control" 
        placeholder="Password" 
        required
      />
    </div>



    <div className="d-grid gap-2 mb-3">
      <Link to="/Kanbas/Account/Profile">
        <button id="wd-signup-btn" className="btn btn-primary btn-block">
          Sign up
        </button>
      </Link>
    </div>

    <div>
      <Link to="/Kanbas/Account/Signin">
        <button id="wd-signin-link" className="btn btn-link">
          Already have an account? Sign in
        </button>
      </Link>
    </div>
  </form>
</div>
);
}