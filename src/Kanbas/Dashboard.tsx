
import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="dashboard">
            <h1>Dashboard</h1>
            <hr /> 
            <h2>Published Courses(7)</h2> 
            <hr />
            <div id="course-link">
                <div className="wd-dashboard-course">
                <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/1234">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png" width={200} />
                    <div>
                    <h5>CS4550</h5>
                        <p className="wd-dashboard-course-title">
                        Fullstack Software Development
                        </p>
                        <button>Go</button>    
                    </div>
                </Link>
                </div>
            </div>

            <div id="course-link">
                <div className="wd-dashboard-course">
                <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/1234">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/182px-Java_programming_language_logo.svg.png" width={200} />
                    <div>
                    <h5>CS3500</h5>
                        <p className="wd-dashboard-course-title">
                        Object Oriented Design
                        </p>
                        <button>Go</button>    
                    </div>
                </Link>
                </div>
            </div>

            <div id="course-link">
                <div className="wd-dashboard-course">
                <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/1234">
                    <img src="https://cdn.prod.website-files.com/63ccf2f0ea97be12ead278ed/644a18b637053fa3709c5ba2_what-is-data-science-p-1080.jpg" width={200} />
                    <div>
                    <h5>DS3000</h5>
                        <p className="wd-dashboard-course-title">
                        Foundations Of Data Science
                        </p>
                        <button>Go</button>    
                    </div>
                </Link>
                </div>
            </div>

            <div id="course-link">
                <div className="wd-dashboard-course">
                <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/1234">
                    <img src="https://www.minecraft101.net/b/grass.png" width={200} />
                    <div>
                    <h5>ENVR1200</h5>
                        <p className="wd-dashboard-course-title">
                        Dynamic Earth
                        </p>
                        <button>Go</button>    
                    </div>
                </Link>
                </div>
            </div>

            <div id="course-link">
                <div className="wd-dashboard-course">
                <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/1234">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Racket-logo.svg/182px-Racket-logo.svg.png" width={200} />
                    <div>
                    <h5>CS2500</h5>
                        <p className="wd-dashboard-course-title">
                        Fundamentals 1 Of CS
                        </p>
                        <button>Go</button>    
                    </div>
                </Link>
                </div>
            </div>

            <div id="course-link">
                <div className="wd-dashboard-course">
                <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/1234">
                    <img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo-700x394.png" width={200} />
                    <div>
                    <h5>CS2510</h5>
                        <p className="wd-dashboard-course-title">
                        Fundamentals 2 of CS
                        </p>
                        <button>Go</button>    
                    </div>
                </Link>
                </div>
            </div>

            <div id="course-link">
                <div className="wd-dashboard-course">
                <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/1234">
                    <img src="https://s32615.pcdn.co/wp-content/uploads/2023/10/homepage-low-left-neu_4f184d347-highres600x400-1.jpg" width={200} />
                    <div>
                    <h5>CS1200</h5>
                        <p className="wd-dashboard-course-title">
                        First Year Seminar
                        </p>
                        <button>Go</button>    
                    </div>
                </Link>
                </div>
            </div>


        </div>
        

    );
}