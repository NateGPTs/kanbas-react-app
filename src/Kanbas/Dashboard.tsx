
import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
            <div id="wd-dashboard">
                <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
                <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
                <div id="wd-dashboard-courses" className="row">
                    <div className="row row-cols-xl-4 row-cols-lg-4 row-cols-md-3 row-cols-sm-2">
                        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                    to="/Kanbas/Courses/1234">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png" 
                                        width="100%" height={160} alt="CS4550" />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            CS4550
                                        </h5>
                                        <p className="wd-dashboard-course-title card-text">
                                            Fullstack Software Development
                                        </p>
                                        <button className="btn btn-primary">Go</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
    
                        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                    to="/Kanbas/Courses/1234">
                                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/182px-Java_programming_language_logo.svg.png" 
                                        width="100%" height={160} alt="CS3500" />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            CS3500
                                        </h5>
                                        <p className="wd-dashboard-course-title card-text">
                                            Object Oriented Design
                                        </p>
                                        <button className="btn btn-primary">Go</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
    
                        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                    to="/Kanbas/Courses/1234">
                                    <img src="https://cdn.prod.website-files.com/63ccf2f0ea97be12ead278ed/644a18b637053fa3709c5ba2_what-is-data-science-p-1080.jpg" 
                                        width="100%" height={160} alt="DS3000" />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            DS3000
                                        </h5>
                                        <p className="wd-dashboard-course-title card-text">
                                            Foundations Of Data Science
                                        </p>
                                        <button className="btn btn-primary">Go</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
    
                        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                    to="/Kanbas/Courses/1234">
                                    <img src="https://www.minecraft101.net/b/grass.png" 
                                        width="100%" height={160} alt="ENVR1200" />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            ENVR1200
                                        </h5>
                                        <p className="wd-dashboard-course-title card-text">
                                            Dynamic Earth
                                        </p>
                                        <button className="btn btn-primary">Go</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
    
                        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                    to="/Kanbas/Courses/1234">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Racket-logo.svg/182px-Racket-logo.svg.png" 
                                        width="100%" height={160} alt="CS2500" />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            CS2500
                                        </h5>
                                        <p className="wd-dashboard-course-title card-text">
                                            Fundamentals 1 Of CS
                                        </p>
                                        <button className="btn btn-primary">Go</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
    
                        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                    to="/Kanbas/Courses/1234">
                                    <img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo-700x394.png" 
                                        width="100%" height={160} alt="CS2510" />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            CS2510
                                        </h5>
                                        <p className="wd-dashboard-course-title card-text">
                                            Fundamentals 2 of CS
                                        </p>
                                        <button className="btn btn-primary">Go</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
    
                        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                    to="/Kanbas/Courses/1234">
                                    <img src="https://s32615.pcdn.co/wp-content/uploads/2023/10/homepage-low-left-neu_4f184d347-highres600x400-1.jpg" 
                                        width="100%" height={160} alt="CS1200" />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            CS1200
                                        </h5>
                                        <p className="wd-dashboard-course-title card-text">
                                            First Year Seminar
                                        </p>
                                        <button className="btn btn-primary">Go</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}