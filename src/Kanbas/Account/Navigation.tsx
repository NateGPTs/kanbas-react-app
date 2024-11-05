import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    
    return (
        <div id="wd-accountnavigation" className="wd list-group fs-5 rounded-0">

        {links.includes("Signin") && <Link className="list-group-item active border-0" to="/Kanbas/Account/Signin">Sign in</Link>} <br />
        {links.includes("Signup") && <Link className="list-group-item active border-0" to="/Kanbas/Account/Signup">Sign up</Link>} <br />
        {links.includes("Profile") && <Link className="list-group-item active border-0" to="/Kanbas/Account/Profile">Profile</Link>} <br />

        </div>
    );

}

