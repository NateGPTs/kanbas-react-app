import { FaPlus } from "react-icons/fa";

export default function GroupAndAssignments() {
    return (


      <div id="wd-modules-controls" className="d-flex gap-1" >
          

          <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px"}} />
          Group</button>
  
  
        <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px"}} />
          Assignment</button>
  
      </div>    
  );
  }