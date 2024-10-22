import { useLocation, useParams } from "react-router";
import modules from "../Database/modules-sp24.json";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModuleControls";
export default function Modules() {
  const { cid } = useParams();
  const currentLocation = useLocation();
  const pathSegments = currentLocation.pathname.split('/');
  return (
    <div className="d-flex flex-column">
      
      <div className="mb-3">
      <ModulesControls />
      </div>

      <div>
      <ul id="wd-modules" className="list-group rounded-0">
        {modules.filter((module: any) => module.course === cid)
          .map((module: any) => (
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> {module.name} <ModuleControlButtons />
            </div>
            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                  </li>
                  
                ))}</ul>)}</li>))}</ul>
                </div>
      </div>
        );}
  
  