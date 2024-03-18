import React from "react";
import { Typography } from "@mui/material";

function EngineeringCell() {
  return (
    
    <div className="bank-card">
      <div className="allRightContentHeading">Engineering Cell</div><hr />
      <div className="bank-details">
        
        <Typography>The Engineering cell of the institution looks into all the 
            construction works and civil works at the institution level. Chief 
            Engineer at the University inspects the works regularly.</Typography><br />
            <h5 className="BI">Staff</h5>
            <table className="staff-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Er. L. Hari Prakash</td>
              <td>Assistant Executive Engineer</td>
            </tr>
            <tr>
              <td>2</td>
              <td>M.S.R.Ch.S Raju</td>
              <td>Work Inspector (Civil)</td>
            </tr>
            <tr>
              <td>3</td>
              <td>A. Lakshmana Rao</td>
              <td>Work Inspector (Civil)</td>
            </tr>
            <tr>
              <td>4</td>
              <td>P. Suneetha</td>
              <td>Work Inspector (Civil)</td>
            </tr>
            <tr>
              <td>5</td>
              <td>M. Ramana</td>
              <td>Work Inspector (Non-Technical)</td>
            </tr>
          </tbody>
        </table><br />
        <h5 className="BI">Construction Activities</h5>
        <Typography>The following works will be initiated soon<br />
        <ul>
        <li>At present Construction of Academic Block-III (G+2) at an estimated price of 
        17.99 Crores is approved by the building committee and after according approval 
        from University Executive Council the tender and process will be initiated.</li>
        <li>Construction of Steps with CC paver path from Boys Hostel to AB-II at an 
        estimated cost of Rs 18.0 Lac is approved by the building committee and after 
        according approval from University Executive Council the tender and process will be initiated.</li>
        <li>Construction of water tank and connection of water pipe lines to various buildings 
        at an estimated cost of Rs 1.20 Lac is approved by the building committee and after 
        according approval from University Executive Council the tender and process will be initiated.</li>
        </ul>
        </Typography>
        <h5 className="BI">Project Engineer Electrical Section </h5>
       <Typography>Project Engineer (Electrical) section is looking after 
        all the maintenance and original electrical works on UCEV campus.</Typography> <br />
        <h5 className="BI">Project Engineer (Electrical) </h5>
        <Typography>Dr.V.S.Vakula</Typography><br />
        <h5 className="BI">Supporting Staff </h5>
        <table className="staff-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Sri. N.Appa Rao</td>
              <td>Technician</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Sri.B.Rama Krishna</td>
              <td>Helper</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EngineeringCell;
