import React, { useEffect, useState } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import ImageModal from "../HomePage/NewsAndEvents/ImageModal";
import "./CompleteGallery.css";

function CompleteGallery() {
  const [images, setImages] = useState([]);
  const [carouselArchives, setCarouselArchives] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState('');

  // Fetch images from the API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const [galleryResponse, carouselResponse] = await Promise.all([
          fetch("https://api.jntugv.edu.in/api/gallery/all-gallery-images"),
          fetch("https://api.jntugv.edu.in/api/webadmin/carousel-images")
        ]);

        const galleryData = await galleryResponse.json();
        const carouselData = await carouselResponse.json();

        // Extract images from all events
        const allImages = galleryData.map(photo => ({
            image: photo.imagelink,
            description: photo.description,
          }))

        // Extract older carousel images (excluding the top 5 recent ones)
        const sortedCarousel = carouselData.sort((a, b) => new Date(b.date) - new Date(a.date));
        const olderCarouselImages = sortedCarousel.slice(5).map(photo => {
          const dateObj = new Date(photo.date);
          const monthYear = isNaN(dateObj) ? "Archived Events" : dateObj.toLocaleString("default", { month: "long", year: "numeric" });
          
          return {
            image: photo.imglink,
            description: photo.description !== "NA" ? photo.description : "Carousel Archive",
            monthYear: monthYear
          };
        });

        // Group older images by month and year
        const groupedArchives = {};
        olderCarouselImages.forEach(img => {
          if (!groupedArchives[img.monthYear]) {
            groupedArchives[img.monthYear] = [];
          }
          groupedArchives[img.monthYear].push(img);
        });

        const groupedArchivesArray = Object.keys(groupedArchives).map(key => ({
          monthYear: key,
          images: groupedArchives[key]
        }));
        
        // Reverse the images array to match previous behavior
        setImages(allImages);
        setCarouselArchives(groupedArchivesArray);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };

    fetchImages();
  }, []);

  const handleShowModal = (image, description) => {
    setSelectedImage(image);
    setSelectedDescription(description);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
    setSelectedDescription('');
  };

  return (
    <div className="complete-gallery-container">
      <h1>Gallery of JNTUGV</h1>

      <Link to="/" className="back-to-home">
        <MdOutlineArrowBackIos />
        Back to Homepage
      </Link>

      <div className="gallery-links">
        <Link to="/events/ityuktha-2k24" className="event-day">
          Ityuktha 2K24
        </Link>
        <Link to="/events/eclectique-2k24" className="event-day">
          Eclectique 2K24
        </Link>
        <Link to="/events/womens-day" className="event-day">
          Women's Day
        </Link>
        <Link to="/events/eisen-2k24" className="event-day">
          Eisen 2K24
        </Link>
        <Link to="/events/cresense-2k24" className="event-day">
          Cresense 2K24
        </Link>
        <Link to="/events/republic-day" className="event-day">
          Republic Day Images
        </Link>
      </div>

      <div className="image-grid">
        {images.map((imageObj, index) => (
          <div key={index} className="image-wrapper">
            <img
              src={imageObj.image}
              alt={`JNTUGV ${images.length - index}`}
              loading="lazy"
              className="grid-image"
              onClick={() =>
                handleShowModal(imageObj.image, imageObj.description)
              }
            />
          </div>
        ))}
      </div>

      {carouselArchives.length > 0 && (
        <>
          <h2 style={{ textAlign: "center", margin: "3rem 0 2rem", color: "#370a68" }}>Archived Carousel Images</h2>
          {carouselArchives.map((group, groupIndex) => (
            <div key={`group-${groupIndex}`} className="archive-group">
              <h3 style={{ marginLeft: "2rem", color: "#55b2e7", borderBottom: "2px solid #55b2e7", paddingBottom: "0.5rem", display: "inline-block", marginTop: "2rem" }}>
                {group.monthYear}
              </h3>
              <div className="image-grid">
                {group.images.map((imageObj, index) => (
                  <div key={`carousel-${groupIndex}-${index}`} className="image-wrapper">
                    <img
                      src={imageObj.image}
                      alt={`Archived ${group.monthYear} ${index + 1}`}
                      loading="lazy"
                      className="grid-image"
                      onClick={() =>
                        handleShowModal(imageObj.image, imageObj.description)
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      )}

      <ImageModal
        show={showModal}
        handleClose={handleCloseModal}
        imageSrc={selectedImage}
        imageDescription={selectedDescription}
      />
    </div>
  );
}

export default CompleteGallery;
