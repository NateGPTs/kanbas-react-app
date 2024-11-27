import React from "react";
import { AiOutlineDashboard } from 'react-icons/ai';
import { LiaBookSolid, LiaCogSolid } from 'react-icons/lia';
import { FaCalendarAlt } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import { FaGear, FaRegCircleUser } from "react-icons/fa6";
import { IoArrowBack, IoCalendarOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";



export default function Navigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses",   path: "/Kanbas/Courses", icon: LiaBookSolid },
    { label: "Calendar",  path: "/Kanbas/Calendar",  icon: IoCalendarOutline },
    { label: "Inbox",     path: "/Kanbas/Inbox",     icon: FaInbox },
    { label: "Labs",      path: "/Labs",             icon: LiaCogSolid },
  ];

    return (
    
    <div id="wd-kanbas-navigation" style={{ width: 115}} 
         className="list-group rounded-0 position-fixed
         bottom-0 top-0 d-none d-md-block bg-black z-2 d-flex flex-column">
      <a id="wd-neu-link" target="_blank" 
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center">
        <img src="https://cssh.northeastern.edu/wlc/wp-content/uploads/sites/15/2021/04/2020-2021-GP-Expanded-Calendar-List-1024x1024-c-default.jpg" width="75px" /></a><br />
        <Link to="/Kanbas/Account" className={`list-group-item text-center border-0 bg-black
            ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
        <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
        <br />
        Account
      </Link>
      {links.map((link) => (
        <Link key={link.path} to={link.path} className={`list-group-item bg-black text-center border-0
              ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
          {link.icon({ className: "fs-1 text-danger"})}
          <br />
          {link.label}
        </Link>
      ))}


    </div>
    
    );

}