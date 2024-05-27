import React from "react";
import "./Aboutus.css";
import Typography from "@mui/material/Typography";

function Mission() {
  return (
    <div className="ABOUTmainContainer">
      <div className="allRightContent">
        <div className="allRightContentHeading">Mission</div>

        <div className="allRight-ContentProfile">
          {/* Profile information */}
          {/* Profile description */}
          <p className="a"></p>
          <Typography variant="p">
            ❖ To orchestrate an unparalleled symphony of intellectual rigor and academic distinction, sculpting minds through innovative pedagogies, cutting-edge research, thus forging individuals capable of leading transformative change in their chosen fields.
          </Typography>
          <br />
          <Typography variant="p">
            ❖ To foster a mission of community synergy, university engages with and uplifts the rural community through initiatives that transcend educational boundarie enriching environment within our academic sphere.
          </Typography>
          <br />
          <Typography variant="p">
            ❖ To foster a global perspective and a culture of scholarly inquiry, university endeavors to instill in our students a thirst for knowledge that transcends borders, encouraging them to explore diverse perspectives and engage in rigorous scholarly endeavors that contribute not only to their personal growth but also to the global academic discourse.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Mission;
