import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  Administration_Wing,
  Central_Facilites,
  Constituent_Colleges,
  Grievance,
  JntuGv_Units,
  Online_Courses,
  Others,
  Student_Corner,
  University_Hostels,
} from "./FooterData.js";


const removeTrackingParams = (url) => {
  const urlObj = new URL(url, window.location.origin);
  
  // Remove any parameters that start with '_gl' or '_ga'
  Array.from(urlObj.searchParams.keys()).forEach(param => {
    if (param.startsWith('_ga') || param.startsWith('_gl')) {
      urlObj.searchParams.delete(param);
    }
  });

  return urlObj.toString();
};

function Footer() {
  return (
    <div className="mainFooter">
      <div className="subcontainer1Footer">
        {/* <div>
          <p className="subFooter subheadingFooter">Admission</p>
        </div>
        <div className="subcontentFooter">
          <p className="headlinksFooter">DIRECTORATE OF ADMISSIONS </p>
          <p>INTERNATIONAL AFFAIRS </p>
        </div> */}
      </div>
      <div className="subcontainer2Footer">
        {/* Administration_Wing */}
        <div className="container1Footer">
          <p className="subheadingFooter">Administration Wing</p>
          <hr className="subFooter" />
          <div>
            {Administration_Wing.map((item, index) => (
              <div key={index}>
                <p>
                  <Link to={item.link} className="sublinksFooter">
                    {item.title}
                  </Link>
                </p>
              </div>
            ))}
          </div>
          <p className="subheadingFooter">Grievances</p>
          <hr className="subFooter" />
          <div>
            {Grievance.map((item, index) => (
              <div key={index}>
                <p>
                  <Link to={item.link} className="sublinksFooter">
                    {item.title}
                  </Link>
                </p>
              </div>
            ))}
          </div>
          <p className="subheadingFooter">Others</p>
          <hr className="subFooter" />
          <div>
            {Others.map((item, index) => (
              <div key={index}>
                <p>
                  <Link
                    to={item.link}
                    className="sublinksFooter"
                    target="_blank "
                  >
                    {item.title}
                  </Link>
                </p>
              </div>
            ))}
          </div>





        </div>

        {/* Central_Facilites */}

        <div className="container2Footer">
          <p className="subheadingFooter">Central Facilities</p>
          <hr className="subFooter" />
          <div>
            {Central_Facilites.map((item, index) => (
              <div key={index}>
                <p>
                  <Link to={item.link} className="sublinksFooter">
                    {item.title}
                  </Link>
                </p>
              </div>
            ))}
          </div>
          <p className="subheadingFooter">Online Courses</p>
          <hr className="subFooter" />
          <div>
            {Online_Courses.map((item, index) => (
              <div key={index}>
                <p>
                  <Link to={item.link} className="sublinksFooter">
                    {item.title}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Online_Courses */}
        <div className="container3Footer">
          {/* Consituent Colleges */}
          <p className="subheadingFooter">Constituent Colleges</p>
          <hr className="subFooter" />
          <div>
            {Constituent_Colleges.map((item, index) => (
              <div key={index}>
                <p>
                  <Link
                    to={removeTrackingParams(item.link)}
                    className="sublinksFooter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.title}
                  </Link>
                </p>
              </div>
            ))}
          </div>
          {/* University_Hostels */}
          <p className="subheadingFooter">University Hostels</p>
          <hr className="subFooter" />
          <div>
            {University_Hostels.map((item, index) => (
              <div key={index}>
                <p>
                  <Link to={item.link} className="sublinksFooter">
                    {item.title}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="container4Footer">
          {/* JNTU GV UNITS */}
          <p className="subheadingFooter">JNTU-GV Units</p>
          <hr className="subFooter" />
          <div>
            {JntuGv_Units.map((item, index) => (
              <div key={index}>
                <p>
                  <Link
                    to={item.link}
                    className="sublinksFooter"
                    target="_blankx "
                  >
                    {item.title}
                  </Link>
                </p>
              </div>
            ))}
          </div>

           {/* Student Corner */}
           <p className="subheadingFooter">Student Corner</p>
          <hr className="subFooter" />
          <div>
            {Student_Corner.map((item, index) => (
              <div key={index}>
                <p>
                  <Link
                    to={item.link}
                    className="sublinksFooter"
                    target="_blank"
                  >
                    {item.title}
                  </Link>
                </p>
              </div>
            ))}
          </div>
          
          {/* <p className="subheadingFooter">Grievances</p>
          <hr className="subFooter" />
          <div>
            {Grievance.map((item, index) => (
              <div key={index}>
                <p>
                  <Link to={itedce  `m.link} className="sublinksFooter">
                    {item.title}
                  </Link>
                </p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
      <hr className="footerHr" />
      <div className="subcontainer3Footer">
        {/* Contact Us */}
        <p className="subheadingFooter">Contact Us :</p>
        <p>
          JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY-GURAJADA
          VIZIANAGARAM,DWARAPUDI, VIZIANAGARAM, ANDHRA PRADESH - 535 003, Andhra
          Pradesh, INDIA.
        </p>
        <br></br>
      </div>
      <div className="BelowBar">
          <div className="BelowBar-links">
            <a
              href="https://www.facebook.com/JNTUGurajada"
              className="Below-Social-links"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/jntugurajada/"
              className="Below-Social-links"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com/JNTU_Gurajada"
              className="Below-Social-links"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/jntu_gurajada/"
              className="Below-Social-links"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@JNTUGV"
              className="Below-Social-links"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

      {/* Copyright  */}
      <div className="mobilefooter">
        <p>© Copyright 2023 JNTU-GV Vizianagaram. All Rights Reserved.</p>
      </div>
    </div>
  );
}
export default Footer;
