import { Link } from "react-router-dom";


export default function LandingPage() {

    return (
        <div>
            <h1>Nathanael Soesetio</h1>
            <h2>Section 2</h2>
            <h3>17229</h3>
            <hr/>
            <ul>
                <li><Link to="/Kanbas/*">Kanbas</Link></li>
                <li><Link to="/Labs/*">Labs</Link></li>
                <li><a href="https://github.com/NateGPTs/kanbas-react-app"> Repository</a></li>
                <li><a href="https://github.com/NateGPTs/kanbas-react-app/tree/A2"> Repository, Branch A2</a></li>
            </ul>
        </div>
    );
}