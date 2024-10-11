import Modules from "../Modules";
import CourseStatus from "./Status";

export function Home() {

    return (

        <div className="d-flex">
            <div className="flex-fill" id="wd-home">
                    <Modules />
            </div>

                    
                    
                <div className="d-none d-md-block element-container-right ms-4">
                    <CourseStatus />
                </div>


        </div>

    );

}