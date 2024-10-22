import { useParams } from "react-router";
import assignments from "../../Database/gistfile1.json"; 

export default function AssignmentEditor() {

    const { assignmentId } = useParams();
    const key = assignments.find(assignment =>
    assignment._id === assignmentId);    

    return (
      
      
      <div id="wd-assignments-editor" className="p-4">
  <div className="mb-3">
    <label htmlFor="wd-name" className="form-label">
      <strong>Title</strong>
      </label>
    <input id="wd-name" className="form-control" value={key?.title} />
  </div>

  <div className="mb-3">
    <label htmlFor="wd-description" className="form-label"><strong>Description</strong></label>
    <textarea id="wd-description" className="form-control">
    {key?.Description}
    </textarea>
  </div>

  <div className="row mb-3">
    <div className="col-md-4 d-flex justify-content-end">
      <label htmlFor="wd-points" className="form-label">Points</label>
    </div>
    <div className="col-md-8">
      <input id="wd-points" className="form-control" value={key?.pts} />
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
      <input type="date" id="wd-due-date" className="form-control" value="05-13-2024" />
    </div>
  </div>

  <div className="row mb-3">
    <div className="col-md-4 d-flex justify-content-end">
      <label htmlFor="wd-available-from" className="form-label">Available from</label>
    </div>
    <div className="col-md-4">
      <input type="date" id="wd-available-from" className="form-control" value="05-06-2024" />
    </div>

    <div className="col-md-4">
      <label htmlFor="wd-until" className="form-label">Until</label>
      <input type="date" id="wd-until" className="form-control" value="05-20-2024" />
    </div>
  </div>
</div>

  );}
  