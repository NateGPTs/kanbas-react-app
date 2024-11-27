
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { enrollInCourse, unenrollFromCourse } from "./reducer";
import { fetchAllCourses } from "./Courses/client";
 
export default function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse, fetchCourses }: {
  courses: any[]; course: any; setCourse: (course: any) => void;
  addNewCourse: () => void; deleteCourse: (course: any) => void;
  updateCourse: () => void; fetchCourses: () => Promise<void>;}) { 
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  

  const [showEnrollments, setShowEnrollments] = useState(() => {
    return currentUser.role === "STUDENT" ? true : false;
  });
  
  const toggleEnrollments = () => {
    setShowEnrollments((prev) => !prev);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      fetchCourses();  // Use the prop function
    }, 5000);
  
    return () => clearInterval(interval);
  }, [fetchCourses])

  
  const protectedRoute = (courseId : string, currentUser : any) => {
    
    if( currentUser.role === "FACULTY" || (currentUser.role === "STUDENT")) {

      return `/Kanbas/Courses/${courseId}/Home`

    } else {  

      
    return `/Kanbas/Dashboard`
    }
  };

  // Add debug logs
  console.log("Dashboard - Current User:", currentUser);
  console.log("Dashboard - Courses:", courses);
  console.log("Dashboard - Is courses array?", Array.isArray(courses));
  console.log("Dashboard - Courses length:", courses?.length);

  // You can also add a check before mapping
  if (!courses || courses.length === 0) {
    console.log("No courses available to display");
  }

    return (
            <div id="wd-dashboard">
                <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

             { currentUser.role === "STUDENT" && (<button onClick={(event) => {
        event.preventDefault();
        toggleEnrollments()


      }} className="btn btn-danger float-end"
      id="wd-delete-course-click">
      Enrollments
    </button> )}
                
                { currentUser.role === "FACULTY" && (
             <div>     
            <h5>
        New Course
        <input value={course.name} className="form-control mb-2"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <textarea value={course.description} className="form-control"
             onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
        <button className="btn btn-primary float-end mb-3 mt-3"
                onClick={addNewCourse} id="wd-add-new-course-click">
          Add
        </button>
        <button className="btn btn-warning float-end me-2 mb-3 mt-3"
                onClick={updateCourse} id="wd-update-course-click">
          Update
        </button>
      </h5><hr />
      </div>)
      }
            

                <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
                <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link to={ protectedRoute(course._id, currentUser) }
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <img src="/images/reactjs.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name} </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course.description} </p>
                    <button className="btn btn-primary"> Go </button>
                    
                    {currentUser.role === "FACULTY" && (<button id="wd-edit-course-click"
                    onClick={(event) => {
                      event.preventDefault();
                        setCourse(course);
                              }}
                    className="btn btn-warning me-2 float-end" >
                     Edit
                    </button>)}

                    {currentUser.role === "FACULTY" && (<button onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }} className="btn btn-danger float-end"
                    id="wd-delete-course-click">
                    Delete
                  </button>)}

                  {currentUser.role === "STUDENT"}

                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
          </div>
    </div>
        );
}