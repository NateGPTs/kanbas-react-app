import { Navigate, Route, Routes } from "react-router";
import Coursenav from "./Coursenav";
import Modules from "./Modules";
import { Home } from "./Home/Home";
import Assignments from "./Assignments/Assignments";
import AssignmentEditor from "./Assignments/editor";
import { FaAlignJustify } from 'react-icons/fa';
import PeopleTable from "./people/table";

export function Courses() {
    
    return (
    <div id="wd-courses">
        <h2 className="text-danger">
            <FaAlignJustify className="me-4 fs-4 mb-1" />

      Course 1234 </h2> <hr />
        
        
      <div className="d-flex">
        <div className="d-none d-md-block">
                    <Coursenav />
        </div>
        <div className="flex-fill">
            <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home />} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Assignments" element={<Assignments />} />
                <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                <Route path="People" element={<PeopleTable />} />
                <Route path="AssignmentEditor" element={<AssignmentEditor />} />

            </Routes>
        </div>
    </div>
    </div>            
    );
}