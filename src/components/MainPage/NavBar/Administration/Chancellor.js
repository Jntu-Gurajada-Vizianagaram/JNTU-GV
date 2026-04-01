import React from "react";
import chancellor from "../../../../assets/AdminDirectoratesImages/chancellor.jpeg";

function Chancellor() {
  return (
    <div className="admin-profile-container">
      {/* Profile information */}
      <center>
        <div className="admin-profile-image">
          <img src={chancellor} alt="Profile" />
        </div>
        <div className="admin-profile-name">
          <h3>Shri Justice(Retd.) Syed Abdul Nazeer</h3>
          <h4>Hon’ble Governor of Andhra Pradesh</h4>
        </div>
      </center>
      <div className="admin-profile-details">
        {/* Profile description */}
        <p>
          Syed Abdul Nazeer (born 5 January 1958) is a former judge of the
          Supreme Court of India, who is currently serving as the 24th Governor
          of Andhra Pradesh. He is also former judge of Karnataka High Court. He
          was appointed as the Governor of Andhra Pradesh on 12 February 2023.
        </p>
        <p>
          Syed Abdul Nazeer is a former judge of the Supreme Court of India, who
          is currently serving as the 3rd Governor of Andhra Pradesh.
        </p>
      </div>
    </div>
  );
}

export default Chancellor;
