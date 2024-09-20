import { Link } from "react-router-dom";


export default function LandingPage() {

    return (
        <div>
            <h1>Nathanael Soesetio</h1>
            <h2>17229</h2>
            <hr/>
            <ul>
                <li><Link to="/Kanbas/*">Kanbas</Link></li>
                <li><Link to="/Labs/*">Labs</Link></li>
            </ul>
        </div>
    );
}