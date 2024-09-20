import React from "react";
import Labs from "./Labs/genlab"
import Entry from "./Kanbas/Entry"
import { HashRouter, Route, Routes, Navigate, Link} from "react-router-dom";
import Profile from "./Kanbas/Account/Profile";
import Signup from "./Kanbas/Account/Signup";
import LandingPage from "./LandingPage/LandingPage";
export default function App() {
  return (
    <div>
      <HashRouter>
      
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Entry />} />
        </Routes>
      
      </HashRouter>
    </div>
  );
}
