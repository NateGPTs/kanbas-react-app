import React from "react";
import { Link } from "react-router-dom";


export default function Navigation() {

    return (
        <div>
        <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">Northeastern</a><br/>
        <Link to="/Kanbas/Account"> Account</Link> <br/>
        <Link to="/Kanbas/Dashboard"> Dashboard</Link> <br/>
        <Link to="/Kanbas/Courses/1234"> Courses</Link> <br/>
        <Link to="/Kanbas/Calendar"> Calendar</Link> <br/>
        <Link to="/Kanbas/Inbox"> Inbox</Link> <br/>
        <Link to="/Labs"> Labs</Link> <br/>
        </div>
    );

}