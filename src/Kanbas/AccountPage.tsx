import React from "react";
import Signin from "./Account/Signin";
import { Routes, Route, Navigate } from "react-router";
import Profile from "./Account/Profile";
import Signup from "./Account/Signup";
import AccountNavigation from "./Account/Navigation";

export default function AccountPage() {

    return (
    <div>
        <h3>Account</h3>
        <table>
            <tr>
                <td valign="top">
                <AccountNavigation />
                </td>
                <td valign="top">
            <Routes>
            <Route path="/"
                     element={<Navigate to="Signin" />} />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Signup" element={<Signup />} />
            </Routes>
                </td>
            </tr>
        </table>
    </div>
    )
}