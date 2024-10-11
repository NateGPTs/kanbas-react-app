import { Link } from "react-router-dom";

export default function A2() {
    return (
        <div className="d-flex flex-column">
        <Link to="AssignmentEditor">
        <h2 className="mb-2">A2</h2>
      </Link>
        <div className="d-flex flex-column">
            <p className="me-3">Multiple Modules | Not available until May 6 at 12:00 AM | </p>
            <p>Due May 13 at 11:59pm | 100 pts</p>
        </div>
    </div>
    );
}