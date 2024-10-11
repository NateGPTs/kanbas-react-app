import React from "react";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div className="container mt-5">
  <h3 className="mb-4">Profile</h3>

  <form>
    <div className="mb-3">
      <input 
        id="wd-username" 
        value="alice" 
        className="form-control" 
        placeholder="Username" 
        required
      />
    </div>

    <div className="mb-3">
      <input 
        id="wd-password" 
        value="123" 
        className="form-control" 
        placeholder="Password" 
        type="password" 
        required
      />
    </div>

    <div className="mb-3">
      <input 
        id="wd-firstname" 
        value="Alice" 
        className="form-control" 
        placeholder="First Name" 
        required
      />
    </div>

    <div className="mb-3">
      <input 
        id="wd-lastname" 
        value="Wonderland" 
        className="form-control" 
        placeholder="Last Name" 
        required
      />
    </div>

    <div className="mb-3">
      <input 
        id="wd-dob" 
        value="2000-01-01" 
        className="form-control" 
        type="date" 
        required
      />
    </div>

    <div className="mb-3">
      <input 
        id="wd-email" 
        value="alice@wonderland" 
        className="form-control" 
        type="email" 
        required
      />
    </div>

    <div className="mb-3">
      <select id="wd-role" className="form-select" required>
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
    </div>

    <div className="d-grid gap-2">
      <Link to="/Kanbas/Account/Signin">
        <button type="button" className="btn btn-danger">
          Sign out
        </button>
      </Link>
    </div>
  </form>
</div>
);}
