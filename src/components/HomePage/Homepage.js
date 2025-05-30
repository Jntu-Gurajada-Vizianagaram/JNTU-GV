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

function Homepage() {
  return (
    <div>
      <ImageGallery />
      <AboutUs />
      {/* <Scrollbar className="update-panel"/> */}
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




