import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "../ModuleControls";
import LessonControlButtons from "../LessonControlButtons";
import ModuleControlButtons from "../ModuleControlButtons";
import AssignmentControls from "./AssignmentContros";
import './Assignments.css'
import GroupAndAssignments from "./GroupAndAssignments";
import AssignmentTable from "./AssignmentTable";



  export default function Assignments() {
    return (
      <div>
  <div id="wd-modules-controls" className="d-flex" > 
    <div className="assignments-float-left">
      <AssignmentControls />
    </div>
    <div className="assignments-float-right ms-auto">
      <GroupAndAssignments />
    </div>
    </div> <br />

      <AssignmentTable />
  </div>

  );}
  