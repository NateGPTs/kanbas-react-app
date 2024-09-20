import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import Signup from "./Signup";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input id="wd-username" placeholder="username" /> <br />
      <input id="wd-password" placeholder="password" type="password" /> <br />
      <Link  id="wd-signin-btn"
             to="/Kanbas/Dashboard"> <button>Sign in</button> </Link> <br />
      <Link  id="wd-signup-link" to="/Kanbas/Account/Signup"> <button>Sign up</button> </Link>

    </div>
);}
