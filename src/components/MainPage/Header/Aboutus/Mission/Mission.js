import React from "react";
import "../Aboutus.css";
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
            ❖ To provide high quality technical education through a creative
            balance of academia and industry by adopting highly effective
            teaching learning processes.
          </Typography>
          <br />
          <Typography variant="p">
            ❖ To promote multidisciplinary research with a global perspective to
            attain professional excellence.
          </Typography>
          <br />
          <Typography variant="p">
            ❖ To establish standards that inculcate ethical and moral values
            that contribute to growth in the Career and development of society.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Mission;
