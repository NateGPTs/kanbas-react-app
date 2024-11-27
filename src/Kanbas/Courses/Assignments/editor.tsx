import { useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



export default function AssignmentEditor({ updateAssignment }: 
  { updateAssignment: (assignment: any) => void}) {
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const { cid } = useParams();  
  const { assignmentId } = useParams();
  const navigate = useNavigate();
  const assignment = assignments.find((a: { _id: string | undefined; }) => a._id === assignmentId);
  

  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const generateUniqueRandomInt = (assignments: { _id: string; }[], min: number, max: number) => {
    let newId: number;
    
    // Create a set of existing IDs for faster lookup
    const existingIds = new Set(assignments.map(assignment => parseInt(assignment._id)));
  
    do {
      // Generate a new random integer
      newId = getRandomInt(min, max);
    } while (existingIds.has(newId)); // Check for uniqueness
    
    return newId; // Return the unique random integer
  };

  const id = generateUniqueRandomInt(assignments, 1000, 0);

  
  const [editData, setEditData] = useState(() => {
    if (assignment) {
      return {
        "_id": assignment._id,
        "title": assignment.title,
        "course": assignment.course,
        "OutAt": assignment.OutAt,
        "Due": assignment.Due,
        "pts": assignment.pts,
        "Description": assignment.Description,
      };
    }
    return {
      "_id": id,
      "title": '',
      "course": cid,
      "OutAt": '',
      "Due": '',
      "pts": 0,
      "Description": '',
    }; // Default state if assignment is not found
  });

  useEffect(() => {
    if (assignment) {
      setEditData({
        "_id": assignment._id,
        "title": assignment.title,
        "course": assignment.course,
        "OutAt": assignment.OutAt,
        "Due": assignment.Due,
        "pts": assignment.pts,
        "Description": assignment.Description,
      });
    }
  }, [assignment]);

  const handleInputChange = (field: string, value: string) => {
    setEditData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saving assignment:", editData);  // Debug log
    updateAssignment(editData);
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
};

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };


  

    return (
      
      
      <div id="wd-assignments-editor" className="p-4">
  <div className="mb-3">
    <label htmlFor="wd-name" className="form-label">
      <strong>Title</strong>
      </label>
    <input id="wd-name" className="form-control" value={editData?.title} 
    onChange={(e) => handleInputChange("title", e.target.value)} />
  </div>

  <div className="mb-3">
    <label htmlFor="wd-description" className="form-label"><strong>Description</strong></label>
    <textarea id="wd-description" className="form-control"
    onChange={(e) => handleInputChange("Description", e.target.value)} >
    {editData?.Description}
    </textarea>
  </div>

  <div className="row mb-3">
    <div className="col-md-4 d-flex justify-content-end">
      <label htmlFor="wd-points" className="form-label">Points</label>
    </div>
    <div className="col-md-8">
      <input id="wd-points" className="form-control" value={editData?.pts} 
      onChange={(e) => handleInputChange("pts", e.target.value)} />
    </div>
  </div>

  <div className="row mb-3">
    <div className="col-md-4 d-flex justify-content-end">
      <label htmlFor="wd-assign-to" className="form-label">Assignment Group</label>
    </div>
    <div className="col-md-8">
      <select id="wd-assign-to" className="form-control">
        <option selected>Assignments</option>
      </select>
    </div>
  </div>

  <div className="row mb-3">
    <div className="col-md-4 d-flex justify-content-end">
      <label htmlFor="wd-grade" className="form-label">Display Grade as</label>
    </div>
    <div className="col-md-8">
      <select id="wd-grade" className="form-control">
        <option selected>Percentage</option>
      </select>
    </div>
  </div>

  <div className="row mb-3">
    <div className="col-md-4 d-flex justify-content-end">
      <label htmlFor="wd-submission" className="form-label">Submission Type</label>
    </div>
    <div className="col-md-8">
      <select id="wd-submission" className="form-control">
        <option selected>Online</option>
      </select>
    </div>
  </div>

  <div className="row mb-3">
    <div className="col-md-4 d-flex justify-content-end">
      <label className="form-label">Online Entry Options</label>
    </div>
    <div className="col-md-8">
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="wd-chkbox-entry-text" />
        <label className="form-check-label" htmlFor="wd-chkbox-entry-text">Text Entry</label>
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="wd-chkbox-entry-url" />
        <label className="form-check-label" htmlFor="wd-chkbox-entry-url">Website URL</label>
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="wd-chkbox-entry-media" />
        <label className="form-check-label" htmlFor="wd-chkbox-entry-media">Media Recordings</label>
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="wd-chkbox-entry-annotation" />
        <label className="form-check-label" htmlFor="wd-chkbox-entry-annotation">Student Annotation</label>
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="wd-chkbox-entry-file" />
        <label className="form-check-label" htmlFor="wd-chkbox-entry-file">File Uploads</label>
      </div>
    </div>
  </div>

  <div className="row mb-3">
    <div className="col-md-4 d-flex justify-content-end">
      <label htmlFor="wd-text-entry" className="form-label">Assign To</label>
    </div>
    <div className="col-md-8">
      <input type="text" id="wd-text-entry" className="form-control" value="Everyone" />
    </div>
  </div>

  <div className="row mb-3">
    <div className="col-md-4 d-flex justify-content-end">
      <label htmlFor="wd-due-date" className="form-label">Due</label>
    </div>
    <div className="col-md-8">
      <input type="date" id="wd-due-date" className="form-control" value={ editData.Due } 
      onChange={(e) => handleInputChange("Due", e.target.value)} />
    </div>
  </div>

  <div className="row mb-3">
    <div className="col-md-4 d-flex justify-content-end">
      <label htmlFor="wd-available-from" className="form-label">Available from</label>
    </div>
    <div className="col-md-4">
      <input type="date" id="wd-available-from" className="form-control" value={ editData.OutAt } 
      onChange={(e) => handleInputChange("OutAt", e.target.value)} />
    </div>

    <div className="col-md-4">
      <label htmlFor="wd-until" className="form-label">Until</label>
      <input type="date" id="wd-until" className="form-control" value={ editData.Due } 
      onChange={(e) => handleInputChange("Due", e.target.value)} />
    </div>
  </div>

  <div className="d-flex justify-content-between mt-4">
        <button onClick={handleSave} className="btn btn-primary">
          Save
        </button>
        <button onClick={handleCancel} className="btn btn-secondary">
          Cancel
        </button>
      </div>
</div>

  );}
  