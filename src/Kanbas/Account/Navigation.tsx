import React from "react";
import { Link } from "react-router-dom";


export default function AccountNavigation() {

    
    return (
        <div id="wd-accountnavigation">
        <Link to="/Kanbas/Account/Signin">Sign in</Link> <br />
        <Link to="/Kanbas/Account/Signup">Sign up</Link> <br />
        <Link to="/Kanbas/Account/Profile">Profile</Link> <br />
        </div>
    );

}