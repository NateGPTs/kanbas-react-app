
import AccountPage from "./AccountPage";
import { Routes, Route, Navigate } from "react-router-dom";
import * as db from "./Database/database";
import { useState } from "react";
import Dashboard from "./Dashboard";
import Navigation from "./Navigation";
import Courses from "./Courses/Courses";
import "./styles.css"
import Modules from "./Courses/Modules";
import ProtectedRoute from "./Account/ProtectedRoute";

export default function Entry() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
  });

  const addNewCourse = () => {
    const newCourse = { ...course,
                        _id: new Date().getTime().toString() };
    setCourses([...courses, { ...course, ...newCourse }]);


    
  };

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));



  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
    return (
      <div id="wd-kanbas">
      
      
       
          
          <Navigation />
          
        <div className="wd-main-content-offset p-3">
          <Routes>
          <Route path="/Account/*" element={<AccountPage />} />
          <Route path="/Dashboard/*" element={<ProtectedRoute> <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/> </ProtectedRoute>} />
          <Route path="/Courses/:cid/*" element={<ProtectedRoute> <Courses courses={courses}/> </ProtectedRoute> } />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
          <Route path="/Modules" element={<Modules />} />
          </Routes>
          </div>
      
      </div>
    
    );}