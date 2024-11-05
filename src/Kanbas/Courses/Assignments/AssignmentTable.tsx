import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../LessonControlButtons";
import ModuleControlButtons from "../ModuleControlButtons";
import { FaSearch, FaPlus } from "react-icons/fa";
import GreenCheckmark from "../GreenCheckMark";
import { FaBook } from "react-icons/fa";
import A1 from "./AssignmentText/A1";
import A2 from "./AssignmentText/A3";
import A3 from "./AssignmentText/A3";

export default function AssignmentTable() {
    return (
        <div>
    

  <ul id="wd-modules" className="list-group rounded-0">
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">

      <div className="wd-title p-3 ps-2 bg-secondary fw-bold">
        <BsGripVertical className="me-2 fs-2" />
        ASSIGNMENTS

        </div>

      <ul className="wd-lessons list-group rounded-0">

      <li className="wd-lesson list-group-item p-3 ps-1 d-flex flex-row align-items-center flex-fill">
    <BsGripVertical className="me-2 fs-3"/>
    <FaBook className="me-5 fs-5" style={{ color: "green"}}/>

    <div className="me-3 flex-fill">
      <A1 />
    </div>
    <LessonControlButtons />
    </li>

    <li className="wd-lesson list-group-item p-3 ps-1 d-flex flex-row align-items-center flex-fill">
    <BsGripVertical className="me-2 fs-3" />
    <FaBook className="me-5 fs-5" style={{ color: "green"}}/>

    <div className="me-3 flex-fill">
      <A2 />
    </div>
    <LessonControlButtons />
    </li>

    <li className="wd-lesson list-group-item p-3 ps-1 d-flex flex-row align-items-center flex-fill">
    <BsGripVertical className="me-2 fs-3" />
    <FaBook className="me-5 fs-5" style={{ color: "green"}}/>

    <div className="me-3 flex-fill">
      <A3 />
    </div>
    <LessonControlButtons />
    </li>
        
    </ul>

    
    </li>
  </ul> 


  </div>
            

      );
}