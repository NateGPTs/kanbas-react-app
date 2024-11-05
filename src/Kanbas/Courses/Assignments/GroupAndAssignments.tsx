import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

export default function GroupAndAssignments() {
  const navigate = useNavigate(); // Create navigate function
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

    return (


      <div id="wd-modules-controls" className="d-flex gap-1" >
          

          <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px"}} />
          Group</button>
  
  
          <button 
  id="wd-add-module-btn" 
  className="btn btn-lg btn-danger me-1 float-end" 
  onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/editor`)} // Add onClick handler
>
  <FaPlus className="position-relative me-2" style={{ bottom: "1px"}} />
  Assignment
</button>
  
      </div>    
  );
  }