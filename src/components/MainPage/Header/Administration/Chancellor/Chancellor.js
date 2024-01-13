import React from "react";
import chancellor from "../../../../../assets/AdminDirectoratesImages/chancellor.jpeg";

import "../AdminandDirectorates.css"; // Import your CSS file here

function Chancellor() {
  return (
    <div className="allRightContent-Profile">
      {/* Profile information */}
      <div className="profileName">
        <div className="profile-Image">
          <img src={chancellor} alt="Profile" />
        </div>
        <h3>Shri Justice(Retd.) Syed Abdul Nazeer</h3>
        <h4>Hon’ble Governor of Andhra Pradesh</h4>
      </div>
      <div className="profileDetails">
        {/* Profile description */}
        <p>
          Syed Abdul Nazeer (born 5 January 1958) is a former judge of the
          Supreme Court of India, who is currently serving as the 24th Governor
          of Andhra Pradesh. He is also former judge of Karnataka High Court. He
          was appointed as the Governor of Andhra Pradesh on 12 February 2023.{" "}
        </p>
        <br></br>
        <p>
          Syed Abdul Nazeer is a former judge of the Supreme Court of India, who
          is currently serving as the 3rd Governor of Andhra Pradesh.
        </p>
      </div>
    </div>
  );
}

export default Chancellor;
