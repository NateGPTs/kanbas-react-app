import React from "react";
import Profile from "./Profile";
import Signup from "./Signup";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database/database";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = () => {
    const user = db.users.find(
      (u: any) => u.username === credentials.username && u.password === credentials.password);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kanbas/Dashboard");
  };

  return (
    <div id="wd-signin-screen" className="container mt-5">
  <h3 className="mb-4">Sign in</h3>

  <form>
    <div className="mb-3">
    <input defaultValue={credentials.username}
             onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
             className="form-control mb-2" placeholder="username" id="wd-username" />
    </div>

    <div className="mb-3">
    <input defaultValue={credentials.password}
             onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
             className="form-control mb-2" placeholder="password" type="password" id="wd-password" />
    </div>

    <div className="d-grid gap-2">
      <Link to="/Kanbas/Dashboard">
      <button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100" > Sign in </button>
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
