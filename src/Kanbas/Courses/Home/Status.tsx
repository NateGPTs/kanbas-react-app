import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoHomeSharp } from "react-icons/io5";
import { IoMdStats } from "react-icons/io";
import { BiSolidMegaphone } from "react-icons/bi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { useSelector } from "react-redux";

export default function CourseStatus() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      { currentUser.role == "FACULTY" && (<div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish </button>
        </div>
        <br/>
      </div>)}
      
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </button>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <IoHomeSharp className="me-2 fs-5" /> Choose Home Page </button>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <IoMdStats className="me-2 fs-5" /> View Course Screen </button>
        { (<button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiSolidMegaphone className="me-2 fs-5" /> New Anouncements </button>)}
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <IoMdStats className="me-2 fs-5" /> New Analytics </button>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <MdOutlineNotificationsActive className="me-2 fs-5" /> View Course Notifications </button>
    </div>
);}
