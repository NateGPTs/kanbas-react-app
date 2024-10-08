import { Link } from "react-router-dom";

export default function Coursenav() {
    
    return (
        <div>
            
            <Link id="wd-course-home-link"    to="/Kanbas/Courses/1234/Home">Home</Link><br/>
            <Link id="wd-course-modules-link" to="/Kanbas/Courses/1234/Modules">Modules</Link><br/>
            <Link id="wd-course-piazza-link"  to="/Kanbas/Courses/1234/Piazza">Piazza</Link><br/>
            <Link id="wd-course-zoom-link"    to="/Kanbas/Courses/1234/Zoom">Zoom</Link><br/>
            <Link id="wd-course-quizzes-link" to="/Kanbas/Courses/1234/Assignments"> Assignments</Link><br/>
            <Link id="wd-course-assignments-link" to="/Kanbas/Courses/1234/Quizzes">Quizzes </Link><br/>
            <Link id="wd-course-assignments-link" to="/Kanbas/Courses/1234/Grades">Grades </Link><br/>
        </div>

    );
}  