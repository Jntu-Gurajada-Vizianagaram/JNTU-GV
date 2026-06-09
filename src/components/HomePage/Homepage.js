import React from "react";
import "../../App.css";
// import Map from "./components/MainPage/Map/Map";
// import Scrollbar from "./components/NewsAndEvents/Scrollbar";
// import Footer from "./components/MainPage/Footer/Footer";
import "./Homepage.css";
import ImageGallery from "./ImageGallery/ImageGallery";
import AboutUs from "./AboutUsMain/aboutUs";
import NewsAndEvents from "./NewsAndEvents/NewsAndEvents";
import UpdatePanel from "../UpdatePanel/UpdatePanel";
import Gallery from "../Gallery/Gallery";
import Youtube from "./Youtube/Youtube";
import Portals from "./Portals/PortalsSection";
import AnnouncementMobile from "./Announcements/MobileAnnouncement";
import Colleges from "./ConstituentColleges/Colleges";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <div>
      <AnnouncementMobile/>
       <div className="homepage-recruitment-cta">
        <div className="cta-content">
          <h3>Faculty Recruitment 2026</h3>
          <p>Latest notifications and application details — apply now or view details.</p>
        </div>
        <Link to="/recruitments" className="cta-link">View Recruitment</Link>
      </div>
      <ImageGallery />
      <AboutUs />
      <Colleges/>
      <UpdatePanel className="update-panel" />
     
      <Portals/>
      <NewsAndEvents />

     
      <Youtube/>
       
      <Gallery />
      <br />
    </div>
  );
}

export default Homepage;




