import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import "./courses.css";
import { courses } from "../Database/database";

export default function Coursenav() {
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
    const currentLocation = useLocation();
    const pathSegments = currentLocation.pathname.split('/');
    const id = pathSegments[3];

    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            
            { links.map((link) => (

                <NavLink 
                    key={link}
                    id="wd-course-home-link"
                    to={`/Kanbas/Courses/${id}/${link}`}
                    className={({ isActive }) => 
                        isActive ? 'list-group-item active border border-0' : 'list-group-item border border-0'
                    }
                >
                    {link}
                </NavLink>))
            }
        </div>

    );
}  