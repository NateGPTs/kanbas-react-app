import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../GreenCheckMark";
import { IoTrashBinSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

export default function AssignmentButtons( { assignmentId, deleteAssignment }: 
    { assignmentId: string; deleteAssignment: (assignmentId: string) => void;} )  {
      const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div className="float-end">
      {currentUser.role === "FACULTY" && (
      <IoTrashBinSharp onClick={() => deleteAssignment(assignmentId)} className="text-primary me-3" />
      )}
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}