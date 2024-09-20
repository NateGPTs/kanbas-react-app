import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
return (

<div>
    <h3>Sign up</h3>
    <input type="text" placeholder="username"/> <br />
    <input type="password" placeholder="password"/>  <br />
    <input type="password" placeholder="verify password"/> <br />
    <Link to="/Kanbas/Account/Profile"> <button>Sign up</button></Link> <br />
    <Link to="/Kanbas/Account/Signin"> <button>Sign in</button></Link>
</div>
);
}