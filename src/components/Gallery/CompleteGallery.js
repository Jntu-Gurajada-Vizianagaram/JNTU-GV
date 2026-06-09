import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ImageModal from "../HomePage/NewsAndEvents/ImageModal";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  CircularProgress,
  Tabs,
  Tab
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import './CompleteGallery.css';

function CompleteGallery() {
  const location = useLocation();
  const [allImages, setAllImages] = useState([]);
  const [carouselArchives, setCarouselArchives] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedDescription, setSelectedDescription] = useState('');
  const [loading, setLoading] = useState(true);
  
  const [activeTab, setActiveTab] = useState(() => {
    const params = new URLSearchParams(location.search);
    const tabParam = params.get('tab');
    if (tabParam === 'gallery' || tabParam === 'news') {
      return tabParam;
    }
    return (location.state && location.state.activeTab) || 'news';
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabParam = params.get('tab');
    if (tabParam === 'gallery' || tabParam === 'news') {
      setActiveTab(tabParam);
    } else if (location.state && location.state.activeTab) {
      setActiveTab(location.state.activeTab);
    }
  }, [location]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [galleryResponse, carouselResponse] = await Promise.all([
          fetch("https://api.jntugv.edu.in/api/gallery/all-gallery-images"),
          fetch("https://api.jntugv.edu.in/api/webadmin/carousel-images"),
        ]);

        const galleryData = await galleryResponse.json();
        const carouselData = await carouselResponse.json();

        // Process Main Photo Gallery
        const galleryImages = (Array.isArray(galleryData) ? galleryData : []).map((photo, index) => ({
          id: `gallery-${index}`,
          image: photo.imagelink || photo.image_link || photo.image || photo.imagelink_url || photo.imglink,
          title: photo.event_name || 'Campus Event',
          description: photo.description || 'JNTUGV Campus Event Gallery Image'
        }));

        // Process Carousel Archives (slice older items past top 5)
        const sortedCarousel = (Array.isArray(carouselData) ? carouselData : []).sort((a, b) => new Date(b.date) - new Date(a.date));
        const archives = sortedCarousel.slice(5).map((photo) => ({
          id: photo.id || Math.random().toString(),
          image: photo.imglink,
          title: photo.title !== "NA" ? photo.title : "Archive Event",
          description: photo.description || 'JNTUGV Archived Historical Record Asset',
          date: photo.date ? new Date(photo.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : null
        }));

        setAllImages(galleryImages);
        setCarouselArchives(archives);
      } catch (error) {
        console.error("Failed to fetch gallery bundle data assets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleShowModal = (image, title, description) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    setSelectedDescription(description);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
    setSelectedTitle('');
    setSelectedDescription('');
  };

  return (
    <Box className="premium-complete-gallery">
      <div className="gallery-layout-wrapper">

        {/* Header Branding Panel */}
        <header className="university-gallery-header">
          <div className="header-branding">
            <PhotoLibraryIcon className="brand-icon-logo" />
            <div>
              <Typography variant="h3" className="main-platform-title">University Media Gallery</Typography>
              <Typography variant="subtitle2" className="sub-platform-title">Jawaharlal Nehru Technological University Gurajada, Vizianagaram</Typography>
            </div>
          </div>
          <Link to="/" className="action-back-link">
            <ArrowBackIcon className="arrow-svg" />
            <span>Return to Home</span>
          </Link>
        </header>

        {/* Navigation Control Tabs */}
        <div className="tab-navigation-container">
          <Tabs
            value={activeTab}
            onChange={(e, newValue) => setActiveTab(newValue)}
            className="modern-pill-tabs"
            centered
          >
            <Tab label={`News Articles (${allImages.length})`} value="news" />
            <Tab label={`Photo Gallery (${carouselArchives.length})`} value="gallery" />
          </Tabs>
        </div>

        {/* Dynamic Display Grid Content Area */}
        {loading ? (
          <Box className="gallery-fallback-loader">
            <CircularProgress size={50} style={{ color: "#340468" }} />
            <Typography variant="body1" className="loader-text-status">Loading Media Assets...</Typography>
          </Box>
        ) : (
          <main className="gallery-view-viewport">

            {/* Active Mode View Tab: Photo Gallery */}
            {activeTab === 'news' && (
              <Box className="view-grid-space animate-fade-in">
                <Grid container spacing={4}>
                  {allImages.map((imageObj) => (
                    <Grid item xs={12} sm={6} md={4} key={imageObj.id}>
                      <Card
                        className="premium-media-card"
                        onClick={() => handleShowModal(imageObj.image, imageObj.title, imageObj.description)}
                      >
                        <div className="media-frame-wrapper">
                          <CardMedia
                            component="img"
                            image={imageObj.image}
                            alt={imageObj.title}
                            className="premium-grid-img"
                            loading="lazy"
                          />
                          <div className="media-hover-overlay">
                            <span className="overlay-explore-badge">Expand Photo</span>
                          </div>
                        </div>
                        <CardContent className="media-text-content">
                          <Typography variant="h6" className="media-card-heading">{imageObj.title}</Typography>
                          <Typography variant="body2" className="media-card-paragraph">{imageObj.description}</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}

            {/* Active Mode View Tab: Historical Archive */}
            {activeTab === 'gallery' && (
              <Box className="view-grid-space animate-fade-in">
                <Grid container spacing={4}>
                  {carouselArchives.map((imageObj) => (
                    <Grid item xs={12} sm={6} md={4} key={imageObj.id}>
                      <Card
                        className="premium-media-card archive-variant-card"
                        onClick={() => handleShowModal(imageObj.image, imageObj.title, imageObj.description)}
                      >
                        <div className="media-frame-wrapper">
                          <CardMedia
                            component="img"
                            image={imageObj.image}
                            alt={imageObj.title}
                            className="premium-grid-img"
                            loading="lazy"
                          />
                          {imageObj.date && (
                            <div className="archive-timeline-tag">
                              <CalendarMonthIcon />
                              <span>{imageObj.date}</span>
                            </div>
                          )}
                          <div className="media-hover-overlay">
                            <span className="overlay-explore-badge">Expand Archive</span>
                          </div>
                        </div>
                        <CardContent className="media-text-content">
                          <h4 className="media-card-heading">{imageObj.title}</h4>
                          <p className="media-card-paragraph">{imageObj.description}</p>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}

          </main>
        )}
      </div>

      <ImageModal
        show={showModal}
        handleClose={handleCloseModal}
        imageSrc={selectedImage}
        imageTitle={selectedTitle}
        imageDescription={selectedDescription}
      />
    </Box>
  );
}

export default CompleteGallery;