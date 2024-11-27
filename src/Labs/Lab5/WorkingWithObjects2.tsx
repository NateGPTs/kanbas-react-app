import React, { useState, useEffect } from "react";
import * as client from "./client";
import { REMOTE_SERVER } from "../../Kanbas/Account/client";

export default function WorkingWithObjects2() {
    const [module, setModule] = useState({
        id: "",
        name: "",
        description: "",
        course: ""
    });
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });

    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;

    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>
            
            {/* Module Section */}
            <h4>Working with Module</h4>
            <a className="btn btn-primary me-2" 
               href={`${REMOTE_SERVER}/lab5/module`}>
                Get Module
            </a>
            <a className="btn btn-primary"
               href={`${REMOTE_SERVER}/lab5/module/name`}>
                Get Module Name
            </a>

            <h4>Update Module</h4>
            <input 
                className="form-control mb-2"
                placeholder="Module Name"
                value={module.name}
                onChange={(e) => setModule({ ...module, name: e.target.value })}
            />
            <a className="btn btn-success mb-2"
               href={`${REMOTE_SERVER}/lab5/module/name/${module.name}`}>
                Update Module Name
            </a>

            <textarea 
                className="form-control mb-2"
                placeholder="Module Description"
                value={module.description}
                onChange={(e) => setModule({ ...module, description: e.target.value })}
            />
            <a className="btn btn-success mb-2"
               href={`${REMOTE_SERVER}/lab5/module/description/${module.description}`}>
                Update Module Description
            </a>

            {/* Assignment Section */}
            <h4>Assignment Updates</h4>
            <input 
                type="number"
                className="form-control mb-2"
                placeholder="Score"
                value={assignment.score}
                onChange={(e) => setAssignment({ 
                    ...assignment, 
                    score: parseInt(e.target.value) 
                })}
            />
            <a className="btn btn-success mb-2"
               href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                Update Score
            </a>

            <div className="form-check mb-2">
                <input 
                    type="checkbox"
                    className="form-check-input"
                    checked={assignment.completed}
                    onChange={(e) => setAssignment({ 
                        ...assignment, 
                        completed: e.target.checked 
                    })}
                />
                <label className="form-check-label">
                    Completed
                </label>
            </div>
            <a className="btn btn-success mb-2"
               href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
                Update Completion Status
            </a>
            
            <hr />

            {/* Display current states */}
            <h4>Current Module State:</h4>
            <pre>{JSON.stringify(module, null, 2)}</pre>
            
            <h4>Current Assignment State:</h4>
            <pre>{JSON.stringify(assignment, null, 2)}</pre>
        </div>
    );
}