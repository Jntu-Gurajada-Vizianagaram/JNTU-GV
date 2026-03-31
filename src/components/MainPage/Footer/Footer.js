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
  Constituent_Colleges,
  Academic_Research,
  Campus_Infrastructure,
  University_Cells,
  Student_Corner,
  Governance_Disclosure,
  Online_Courses,
} from "./FooterData.js";


const removeTrackingParams = (url) => {
  if (typeof url !== 'string' || !url.startsWith('http')) return url;
  try {
    const urlObj = new URL(url, window.location.origin);
    Array.from(urlObj.searchParams.keys()).forEach(param => {
      if (param.startsWith('_ga') || param.startsWith('_gl')) {
        urlObj.searchParams.delete(param);
      }
    });
    return urlObj.toString();
  } catch (e) {
    return url;
  }
};

function Footer() {
  return (
    <div className="mainFooter">
      <div className="subcontainer2Footer">
        {/* Column 1: Administration & Constituent Colleges */}
        <div className="container1Footer">
          <p className="subheadingFooter">Administration</p>
          <hr className="subFooter" />
          <div className="mb-2">
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

          <p className="subheadingFooter">Constituent Colleges</p>
          <hr className="subFooter" />
          <div className="mb-2">
            {Constituent_Colleges.map((item, index) => (
              <div key={index}>
                <p>
                  <a href={removeTrackingParams(item.link)} className="sublinksFooter" target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Academic, Research & Online Learning */}
        <div className="container2Footer">
          <p className="subheadingFooter">Academic & Research</p>
          <hr className="subFooter" />
          <div className="mb-2">
            {Academic_Research.map((item, index) => (
              <div key={index}>
                <p>
                  {item.link.startsWith("http") ? (
                    <a href={removeTrackingParams(item.link)} className="sublinksFooter" target="_blank" rel="noreferrer">
                      {item.title}
                    </a>
                  ) : (
                    <Link to={item.link} className="sublinksFooter">
                      {item.title}
                    </Link>
                  )}
                </p>
              </div>
            ))}
          </div>

          <p className="subheadingFooter">Online Learning</p>
          <hr className="subFooter" />
          <div className="mb-2">
            {Online_Courses.map((item, index) => (
              <div key={index}>
                <p>
                  <a href={item.link} className="sublinksFooter" target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Campus Facilities & Governance */}
        <div className="container3Footer">
          <p className="subheadingFooter">Campus Facilities</p>
          <hr className="subFooter" />
          <div className="mb-2">
            {Campus_Infrastructure.map((item, index) => (
              <div key={index}>
                <p>
                  <Link to={item.link} className="sublinksFooter">
                    {item.title}
                  </Link>
                </p>
              </div>
            ))}
          </div>

          <p className="subheadingFooter">Governance & RTI</p>
          <hr className="subFooter" />
          <div className="mb-2">
            {Governance_Disclosure.map((item, index) => (
              <div key={index}>
                <p>
                  {item.link.startsWith("http") ? (
                    <a href={item.link} className="sublinksFooter" target="_blank" rel="noreferrer">
                      {item.title}
                    </a>
                  ) : item.link.startsWith("mailto") ? (
                    <a href={item.link} className="sublinksFooter">
                      {item.title}
                    </a>
                  ) : (
                    <Link to={item.link} className="sublinksFooter">
                      {item.title}
                    </Link>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Column 4: University Cells & Student Corner */}
        <div className="container4Footer">
          <p className="subheadingFooter">University Cells</p>
          <hr className="subFooter" />
          <div className="mb-2">
            {University_Cells.map((item, index) => (
              <div key={index}>
                <p>
                  {item.link.startsWith("http") ? (
                    <a href={item.link} className="sublinksFooter" target="_blank" rel="noreferrer">
                      {item.title}
                    </a>
                  ) : (
                    <Link to={item.link} className="sublinksFooter">
                      {item.title}
                    </Link>
                  )}
                </p>
              </div>
            ))}
          </div>

          <p className="subheadingFooter">Student Corner</p>
          <hr className="subFooter" />
          <div className="mb-2">
            {Student_Corner.map((item, index) => (
              <div key={index}>
                <p>
                  {item.link.startsWith("http") ? (
                    <a href={item.link} className="sublinksFooter" target="_blank" rel="noreferrer">
                      {item.title}
                    </a>
                  ) : (
                    <Link to={item.link} className="sublinksFooter">
                      {item.title}
                    </Link>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="footerHr" />
      <div className="subcontainer3Footer">
        <p className="subheadingFooter">Contact Us: </p>
        <p className="px-2 text-center">
          JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY-GURAJADA VIZIANAGARAM,
          DWARAPUDI, VIZIANAGARAM, ANDHRA PRADESH - 535 003, INDIA.
        </p>
      </div>

      <div className="BelowBar">
        <div className="BelowBar-links">
          <a href="https://www.facebook.com/JNTUGurajada" className="Below-Social-links" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/in/jntugurajada/" className="Below-Social-links" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://twitter.com/JNTU_Gurajada" className="Below-Social-links" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/jntu_gurajada/" className="Below-Social-links" target="_blank" rel="noreferrer">
            {" "}
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/@JNTUGV" className="Below-Social-links" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className="text-center mt-3">
        <Link to="/privacy" className="sublinksFooter mx-3">Privacy & Policy</Link>
      </div>

      <div className="mobilefooter ">
        <p>Copyright © 2024 <a className="sublinksFooter " href="http://jntugv.edu.in"> <strong>JNTU-GV Vizianagaram</strong> </a>. All Rights Reserved.</p>
        <p>Designed and Developed by <a className="sublinksFooter " href="https://dmc.jntugv.edu.in "><strong>Digital Monitoring Cell, JNTU-GV</strong></a></p>
      </div>
    </div>
  );
}
export default Footer;
