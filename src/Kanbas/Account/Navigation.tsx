import React from "react";
import { Link } from "react-router-dom";


export default function AccountNavigation() {

    
    return (
        <div id="wd-accountnavigation" className="wd list-group fs-5 rounded-0">
        <Link className="list-group-item active border-0" to="/Kanbas/Account/Signin">Sign in</Link> <br />
        <Link className="list-group-item active border-0" to="/Kanbas/Account/Signup">Sign up</Link> <br />
        <Link className="list-group-item active border-0" to="/Kanbas/Account/Profile">Profile</Link> <br />
        </div>
    );

}

