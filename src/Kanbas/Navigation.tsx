import React from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify} from 'react-icons/fa';
import { FaRegCircle } from 'react-icons/fa';
import { AiOutlineDashboard } from 'react-icons/ai';
import { LiaBookSolid } from 'react-icons/lia';
import { FaCalendarAlt } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";


export default function Navigation() {

    return (
    
    <div id="wd-kanbas-navigation" style={{ width: 115}} 
         className="list-group rounded-0 position-fixed
         bottom-0 top-0 d-none d-md-block bg-black z-2 d-flex flex-column">
      <a id="wd-neu-link" target="_blank" 
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center">
        <img src="/images/NEU.png" width="75px" /></a><br />
      <Link to="/Kanbas/Account" id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white">
        <MdOutlineAccountCircle className="fs-1 text text-white" /><br />
        Account </Link><br />
      <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
        className="list-group-item text-center border-0
                   bg-white text-danger">
        <AiOutlineDashboard className="fs-1 text-danger" /><br />
        Dashboard </Link><br />
      <Link to="/Kanbas/Dashboard" id="wd-course-link"
        className="list-group-item text-white
                   bg-black text-center border-0">
        <LiaBookSolid className="fs-1 text-danger" /><br />
        Courses </Link><br />
        <Link to="/Kanbas/Calendar" id="wd-course-link"
        className="list-group-item text-white
                   bg-black text-center border-0">
        <FaCalendarAlt className="fs-1 text-danger" /><br />
        Calendar </Link><br />
        <Link to="/Kanbas/Inbox" id="wd-course-link"
        className="list-group-item text-white
                   bg-black text-center border-0">
        <FaInbox className="fs-1 text-danger" /><br />
        Inbox </Link><br />
        <Link to="/Labs" id="wd-course-link"
        className="list-group-item text-white
                   bg-black text-center border-0">
        <FaGear className="fs-1 text-danger" /><br />
        Labs </Link><br />
        <Link to="/LandingPage" id="wd-course-link"
        className="list-group-item text-white
                   bg-black text-center border-0">
        <IoArrowBack className="fs-1 text-danger" /><br />
        Back To App </Link><br />


    </div>
    
    );

}