
import { FaAlignJustify } from "react-icons/fa6";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import Coursenav from './Coursenav';
import { Home } from './Home/Home';
import Modules from './Modules';
import AssignmentEditor from './Assignments/editor';
import AssignmentsPage from './Assignments/Assignments'
import PeopleTable from './people/table';
import reducer, { addAssignment, deleteAssignment, updateAssignment } from "./Assignments/reducer";
import { useDispatch } from "react-redux";
import * as assignClient from "./Assignments/client";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const currentLocation = useLocation();
  const pathSegments = currentLocation.pathname.split('/');
  const dispatch = useDispatch();

  const handleUpdateAssignment = async (assignment: any) => {
    try {
      console.log("Updating assignment in Courses:", assignment); // Debug log
      const updatedAssignment = await assignClient.updateAssignment(assignment);
      console.log("Server response:", updatedAssignment); // Debug log
      dispatch(updateAssignment(updatedAssignment));
    } catch (error) {
      console.error("Error updating assignment:", error);
      alert("Failed to update assignment");
    }
};

  const handleAddAssignment = async (assignment: any) => {
    try {
      // Create new assignment on server
      const newAssignment = await assignClient.createAssignment(assignment);
      // Update Redux state after successful API call
      dispatch(addAssignment(newAssignment));
    } catch (error) {
      console.error("Error creating assignment:", error);
      alert("Failed to create assignment");
    }
  };

  return (
    <div id="wd-courses">
        

      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathSegments[4]}

      </h2>
        

        <hr/>

      <div className='d-flex flex-row'>
        <div className='flex-shrink-0'>
        <Coursenav />
        </div>

        <div className='flex-grow-1 ms-3'>

        <Routes>
              <Route path="/Modules" element={<Modules />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Piazza" element={<Modules />} />
              <Route path="/Zoom" element={<Modules />} />
              <Route path="/Assignments" element={<AssignmentsPage />} />
              <Route path="/Quizzes" element={<Modules />} />
              <Route path="/Grades" element={<Modules />} />
              <Route path="/People" element={<PeopleTable />} />
              <Route path="/Assignments/editor/:assignmentId" 
              element={<AssignmentEditor updateAssignment={(assignment) => handleUpdateAssignment(assignment)} />} />

              <Route path="/Assignments/editor/" 
              element={<AssignmentEditor updateAssignment={(assignment) => handleAddAssignment(assignment)} />}/>
          </Routes>

        </div>
      </div>

    </div>
  );
}
