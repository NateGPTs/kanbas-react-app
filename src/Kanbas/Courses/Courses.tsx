import { Navigate, Route, Routes } from "react-router";
import Coursenav from "./Coursenav";
import Modules from "./Modules";
import { Home } from "./Home/Home";
import Assignments from "./Assignments/Assignments";
import AssignmentEditor from "./Assignments/editor";

export function Courses() {
    
    return (
    <div id="wd-courses">
        <h2>Course 1234</h2>
        <hr/>
        <table>
            
            <tr>
                
                <td valign="top">
                    <Coursenav />
                </td>
        
                <td valign="top">
                
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                        <Route path="People" element={<h2>People</h2>} />
                    </Routes>
                </td>

            </tr>

        </table>



    </div>
    );
}