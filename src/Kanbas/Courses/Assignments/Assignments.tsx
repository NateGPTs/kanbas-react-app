import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "../ModuleControls";
import LessonControlButtons from "../LessonControlButtons";
import ModuleControlButtons from "../ModuleControlButtons";
import AssignmentControls from "./AssignmentContros";
import './Assignments.css'
import GroupAndAssignments from "./GroupAndAssignments";
import { FaBook } from "react-icons/fa6";
import { Route, Routes, useParams } from "react-router";
import { Link } from "react-router-dom";
import AssignmentButtons from "./AssignmentButtons";
import { deleteAssignment, setAssignments } from "./reducer"; // Import setAssignments action
import { useDispatch, useSelector } from "react-redux";
import * as assignClient from "./client";
import { useEffect, useState } from "react";


  export default function AssignmentsPage() {
    const { cid } = useParams<{ cid: string }>();
    const dispatch = useDispatch();
    const { assignments } = useSelector((state: any) => state.assignmentReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    
    const fetchAssignments = async () => {
      if (!cid) return; // Guard against undefined courseId
      try {
        const assignments = await assignClient.getAssignments(cid);
        console.log('Fetched assignments:', assignments);
        if (Array.isArray(assignments)) {
          dispatch(setAssignments(assignments));
        }
      } catch (error) {
        console.error("Error fetching assignments:", error);
      }
    };
  
    useEffect(() => {
      if (cid) {  // Only fetch if we have a course ID
        fetchAssignments();
        
        const interval = setInterval(() => {
          fetchAssignments();
        }, 5000);
        
        return () => clearInterval(interval);
      }
    }, [cid, currentUser])
    
    const handleDelete = async (assignmentId: string) => {
      const confirmDelete = window.confirm('Are you sure you want to delete this assignment?');
      if (confirmDelete) {
        try {
          await assignClient.deleteAssignment(assignmentId);
          fetchAssignments();
        } catch (error) {
          console.error('Error deleting assignment:', error);
        }
      }
    };


    return (

      
      
      <div>
  <div id="wd-modules-controls" className="d-flex" > 
    <div className="assignments-float-left">
      <AssignmentControls />
    </div>
    { currentUser.role === "FACULTY" && (<div className="assignments-float-right ms-auto">
      <GroupAndAssignments />
    </div>)}
    </div>
    <br/>

    <ul id="wd-modules" className="list-group rounded-0">

      <li className="wd-module list-group-item p-0 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary fw-bold">
          <BsGripVertical className="me-2 fs-2" />
          ASSIGNMENTS

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
            
            <AssignmentButtons assignmentId={assignment._id} 
          deleteAssignment={(assignmentId) => {handleDelete(assignmentId)}} />

            </div>
          </li>
            ))}
            
            

        </ul>
            
  
  </div>

  );}
  