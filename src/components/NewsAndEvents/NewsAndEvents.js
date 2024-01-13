import "./NewsandEvent.css";
import { CG } from "../Gallery/CG.js";

const NewsAndEvents = () => {
  const recentImages = CG.slice(-6); // Get the last 10 images from CG.js

  return (
    <div className="news-and-events">
      <h1> Latest News and Events</h1>
      <div className="news-and-events-display">
        {recentImages.map((image, index) => (
          <div key={index} className="news-and-events-container">
            <img
              src={image.image}
              alt={`JNTUGV ${image.description}`}
              height="200px"
              width="300px"
            />
            <div className="desc-cont">
              <div className="desc-container">{image.description}</div>
              {/* <div className="date-box">
                <h4>Jun</h4>
                <h5>20</h5>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsAndEvents;
