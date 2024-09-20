export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><strong>Assignment Name</strong></label>
        <br/>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br/>
          <br/>
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assignment Group</label>
            </td>
            <td>
               <select>
                    <option selected>Assignments</option> 
               </select> 
            </td>
          </tr>
          <br/>
          <br/>
          <tr>
            <td align="right" valign="top">
                <label>Display Grade as</label>
            </td>
            <td>
                <select>
                    <option selected>Percentage</option>
                </select>
            </td>
          </tr>
          <br/>
          <br/>
          <tr>
            <td valign="top" align="right">
                <label>Submission Type</label>
            </td>
            <td>
                <select>
                    <option selected>Online</option>
                </select>
            </td>
          </tr>
          <br/>
          <tr>
            <td valign="top" align="right"></td>
            <td>
            <label>Online Entry Options:</label><br/>
            <input type="checkbox" name="check-entry" id="wd-chkbox-entry"/>
            <label htmlFor="wd-chkbox-entry">Text Entry</label>
            <br/>
            <input type="checkbox" name="check-entry" id="wd-chkbox-entry"/>
            <label htmlFor="wd-chkbox-entry">Website URL</label>
            <br/>
            <input type="checkbox" name="check-entry" id="wd-chkbox-entry"/>
            <label htmlFor="wd-chkbox-entry">Media Recordings</label>
            <br/>
            <input type="checkbox" name="check-entry" id="wd-chkbox-entry"/>
            <label htmlFor="wd-chkbox-entry">Student Annotation</label>
            <br/>
            <input type="checkbox" name="check-entry" id="wd-chkbox-entry"/>
            <label htmlFor="wd-chkbox-entry">File Uploads</label>
            </td>
          </tr>
          <br/>
          <br/>
          <tr>
            <td valign="top" align="right"></td>
            <td>
                <label htmlFor="wd-text-entry">Assign To</label>
                <br/>
                <input type="text" id="wd-text-entry"value="Everyone"/>
            </td>
          </tr>
          <br/>
          <br/>
          <tr>
            <td valign="top" align="right"></td>
            <td>
                <label htmlFor="wd-due-date">Due</label>
                <br/>
                <input type="date" id="wd-due-date" value="05-13-2024"/>
            </td>
          </tr>
          <br/>
          <br/>
          <tr>
            <td valign="top" align="right"></td>
            <td>
                <label htmlFor="wd-due-date">Available from</label>
                <br/>
                <input type="date" id="wd-due-date" value="05-06-2024"/>
            </td>

            <td>
                <label htmlFor="wd-due-date">Until</label>
                <br/>
                <input type="date" id="wd-due-date" value="05-20-2024"/>
            </td>
          </tr>
        </table>
      </div>
  );}
  