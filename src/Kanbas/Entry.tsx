import React from "react";
import AccountPage from "./AccountPage";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Navigation from "./Navigation";
import Courses from "./Courses/Courses";
import "./styles.css"
import Modules from "./Courses/Modules";

export default function Entry() {
    return (
      <div id="wd-kanbas">
      
      
       
          
          <Navigation />
          
        <div className="wd-main-content-offset p-3">
          <Routes>
          <Route path="/Account/*" element={<AccountPage />} />
          <Route path="/Dashboard/*" element={<Dashboard />} />
          <Route path="/Courses/:cid/*" element={<Courses />} />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
          <Route path="/Modules" element={<Modules />} />
          </Routes>
          </div>
      
      </div>
    
    );}