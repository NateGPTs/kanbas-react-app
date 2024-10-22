import { courses } from '../Database/database'
import { FaAlignJustify } from "react-icons/fa6";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import Coursenav from './Coursenav';
import { Home } from './Home/Home';
import Modules from './Modules';
import AssignmentEditor from './Assignments/editor';
import AssignmentsPage from './Assignments/Assignments'
import PeopleTable from './people/table';
export default function Courses() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const currentLocation = useLocation();
  const pathSegments = currentLocation.pathname.split('/');

  
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
              <Route path="/Assignments/editor/:assignmentId" element={<AssignmentEditor />} />
              
        </Routes>
        </div>
      </div>

    </div>
  );
}
