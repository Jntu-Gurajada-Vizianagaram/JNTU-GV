import { useState } from "react";
import "./Map.css";
import { useEffect } from "react";
import axios from "axios";

const Map = () => {
  // src/apiKey.js
  const API_KEY = "AIzaSyAcElt1gbpGl6BY3-o9yqw2L5UvFAI5-Rg";
  const channelId = "UCRxR0jUEU7IlTzn3JRgA4SQ";
  const [video, setvideo] = useState([]);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&channelId=${channelId}&order=date&maxResults=1`
        );
        setvideo(response.data.items);
      } catch (error) {
        console.error("Error fetching videos", error);
      }
    };

    fetchVideo();
  }, []);

  return (
    <div className="videoTab">
      <div className="videoTabCon1">
        <p className="videoText"> JNTU-GV CAMPUS</p>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/fOEDkvZzftM?si=Zr8zXVVNRL-AarGh"
          title="YouTube video 1"
          frameborder="0"
        ></iframe>
      </div>
      <div className="videoTabCon2">
        <p className="videoText"> HOW TO REACH</p>
        <iframe
          title="Map"
          width="100%"
          height="100%"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.2780196649674!2d83.37348461468248!3d18.15110228762525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bef0baf9f2a11%3A0xdb0b518115b27e07!2sJNTU-GV%20COLLEGE%20OF%20ENGINEERING%20VIZIANAGARAM!5e0!3m2!1sen!2sin!4v1677429966801!5m2!1sen!2sin"
          allowfullscreen="true"
          loading="lazy"
        ></iframe>
      </div>
      {video.map((video) => (
        <div key={video.id.videoId} className="videoTabCon3">
          <p className="videoText"> Our Latest Video</p>
          <iframe
            title={video.snippet.title}
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default Map;
