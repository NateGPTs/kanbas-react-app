import Modules from "../Modules";
import CourseStatus from "./Status";

export function Home() {

    return (

        <div>
            <table>
                <tr>
                    <td valign="top">
                        <Modules />

                    </td>
                    
                    <td valign="top" >
                        <CourseStatus />
                    </td>
                </tr>

            </table>

        </div>

    );

}