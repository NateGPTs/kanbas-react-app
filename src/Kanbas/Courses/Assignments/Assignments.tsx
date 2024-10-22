import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "../ModuleControls";
import LessonControlButtons from "../LessonControlButtons";
import ModuleControlButtons from "../ModuleControlButtons";
import AssignmentControls from "./AssignmentContros";
import './Assignments.css'
import GroupAndAssignments from "./GroupAndAssignments";
import assignments from "../../Database/gistfile1.json"; 
import { FaBook } from "react-icons/fa6";
import { Route, Routes, useParams } from "react-router";
import { Link } from "react-router-dom";
import AssignmentEditor from "./editor";



  export default function AssignmentsPage() {
    const { cid } = useParams();
    

    return (

      
      
      <div>
  <div id="wd-modules-controls" className="d-flex" > 
    <div className="assignments-float-left">
      <AssignmentControls />
    </div>
    <div className="assignments-float-right ms-auto">
      <GroupAndAssignments />
    </div>
    </div>
    <br/>

    <ul id="wd-modules" className="list-group rounded-0">

      <li className="wd-module list-group-item p-0 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary fw-bold">
          <BsGripVertical className="me-2 fs-2" />
          ASSIGNMENTS
          < ModuleControlButtons />
          </div>
      </li>

          {assignments.filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (


          <li className="wd-module list-group-item d-flex flex-row p-0 border-gray">
            
            <BsGripVertical className="me-2 mt-4 fs-2"/>
            <FaBook className="me-5 mt-4 fs-5" style={{ color: "green"}}/>
            <div className="d-flex flex-column me-1 mt-4">
            <Link to={`editor/${assignment._id}`}>
              <h2 className="mb-2 mt-1"> {assignment.title} </h2>
            </Link>
              <div className="d-flex flex-column">
              <p className="me-3">Multiple Modules | {assignment.OutAt} | </p>
              <p>Due {assignment.Due} | {assignment.pts} pts</p>
              </div>
            </div>
            <div style={{ marginLeft: 'auto' }} className="mt-4">
            <LessonControlButtons />
            </div>
          </li>
            ))}
            
            

        </ul>
            
  
  </div>

  );}
  