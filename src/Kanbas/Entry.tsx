
import AccountPage from "./AccountPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import Navigation from "./Navigation";
import Courses from "./Courses/Courses";
import "./styles.css"
import Modules from "./Courses/Modules";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import { useSelector } from "react-redux";
import * as userClient from "./Account/client";
import * as coursesClient from "./Courses/client"


export default function Entry() {
  const [courses, setCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      console.log(courses); 
      if (Array.isArray(courses)) {
        setCourses(courses);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
  });

  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([ ...courses, newCourse ]);
  };


  const deleteCourse = async (courseId: string) => {
    try {
      const confirm = window.confirm("Are you sure you want to delete this course?");
      if (!confirm) return;
      await coursesClient.deleteCourse(courseId);
      setCourses(courses.filter((course) => course._id !== courseId));
      fetchCourses();
    } catch (error) {
      console.error("Failed to delete course:", error);
      alert("Error deleting course");
    }
  };

  const updateCourse = async () => {
    await coursesClient.updateCourse(course);
    setCourses(courses.map((c) => {
        if (c._id === course._id) { return course; }
        else { return c; }
    })
  );};



    return (
      <Session>
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
              updateCourse={updateCourse}
              fetchCourses={fetchCourses}
              
              /> </ProtectedRoute>} />
          <Route path="/Courses/:cid/*" element={<ProtectedRoute> <Courses courses={courses}/> </ProtectedRoute> } />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
          <Route path="/Modules" element={<Modules />} />
          </Routes>
          </div>
      
      </div>
      </Session>
    
    );}