import React from "react";
import Labs from "./Labs/genlab"
import Entry from "./Kanbas/Entry"
import { HashRouter, Route, Routes, Navigate, Link} from "react-router-dom";
import Profile from "./Kanbas/Account/Profile";
import Signup from "./Kanbas/Account/Signup";
import LandingPage from "./LandingPage/LandingPage";
import store from "./Kanbas/store";
import { Provider } from "react-redux";
import store2 from "./Labs/store";
export default function App() {
  return (
    <div>
      <HashRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route 
            path="/Labs/*" 
            element={
              <Provider store={store2}>
                <Labs />
              </Provider>
            } />
          <Route path="/Kanbas/*" element={<Entry />} />
          <Route path="/LandingPage/*" element={<LandingPage />} />
        </Routes>
        </Provider>
      </HashRouter>
    </div>
  );
}
