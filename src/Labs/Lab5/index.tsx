import EnvironmentVariables from "./EnvironmentVariables";
import HttpClient from "./HttpClient";
import PathParameters from "./PathParamaters";
import QueryParamaters from "./QueryParamaters";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithObjects2 from "./WorkingWithObjects2";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function Lab5() {
    return (
      <div id="wd-lab5">
        <h2>Lab 5</h2>
        <div className="list-group">
          <a href={`${REMOTE_SERVER}/Labs/Lab5/welcome`}          
             className="list-group-item">
             Welcome
          </a>
        </div><hr/>
        <EnvironmentVariables />
        <PathParameters />
        <QueryParamaters />
        <WorkingWithObjects />
        <HttpClient />
        <WorkingWithObjects2 />
        <WorkingWithArrays />
        <WorkingWithArraysAsynchronously />
      </div>
    );
  }
  