import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageModal from "../HomePage/NewsAndEvents/ImageModal";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Grid,
  CircularProgress,
  Chip
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import './CompleteGallery.css';

// Event categories with metadata
const eventCategories = [
  { key: 'ityuktha-2k24', label: 'Ityuktha 2K24', color: '#e91e63' },
  { key: 'eclectique-2k24', label: 'Eclectique 2K24', color: '#9c27b0' },
  { key: 'womens-day', label: "Women's Day", color: '#e91e63' },
  { key: 'eisen-2k24', label: 'Eisen 2K24', color: '#ff5722' },
  { key: 'cresense-2k24', label: 'Cresense 2K24', color: '#3f51b5' },
  { key: 'republic-day', label: 'Republic Day', color: '#009688' }
];

function CompleteGallery() {
  const [images, setImages] = useState([]);
  const [carouselArchives, setCarouselArchives] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const [expandedCategory, setExpandedCategory] = useState(null);

  // Fetch images from the API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
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
          event: photo.event || 'general'
        }));

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
        
        setImages(allImages);
        setCarouselArchives(groupedArchivesArray);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      } finally {
        setLoading(false);
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

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const getCategoryColor = (category) => {
    const found = eventCategories.find(c => c.key === category);
    return found ? found.color : '#340468';
  };

  const getCategoryLabel = (category) => {
    const found = eventCategories.find(c => c.key === category);
    return found ? found.label : category;
  };

  // Filter images by event category
  const getImagesByCategory = (category) => {
    return images.filter(img => 
      img.event?.toLowerCase().includes(category.split('-')[0]) || 
      category === 'all'
    );
  };

  return (
    <Box className="complete-gallery-container">
      <Typography variant="h4" className="gallery-main-heading">
        <PhotoLibraryIcon className="heading-icon" />
        Gallery of JNTUGV
      </Typography>

      <Link to="/" className="back-to-home">
        <ArrowBackIcon />
        Back to Homepage
      </Link>

      {loading ? (
        <Box className="loading-wrapper">
          <CircularProgress style={{ color: "#340468" }} />
        </Box>
      ) : (
        <>
          {/* Event Links - Improved Card Style */}
          <Box className="event-links-section">
            <Typography variant="h5" className="section-title">
              Event Galleries
            </Typography>
            <Grid container spacing={2} className="event-grid">
              {eventCategories.map((category) => (
                <Grid item xs={6} sm={4} md={2} key={category.key}>
                  <Link to={`/events/${category.key}`} className="event-card-link">
                    <Box 
                      className="event-card"
                      style={{ borderColor: category.color }}
                    >
                      <PhotoLibraryIcon 
                        className="event-icon" 
                        style={{ color: category.color }}
                      />
                      <Typography 
                        variant="body2" 
                        className="event-label"
                      >
                        {category.label}
                      </Typography>
                      <Chip 
                        label={getImagesByCategory(category.key).length} 
                        size="small"
                        className="image-count-chip"
                        style={{ backgroundColor: category.color }}
                      />
                    </Box>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Main Image Grid */}
          <Box className="images-section">
            <Typography variant="h5" className="section-title">
              All Photos ({images.length})
            </Typography>
            <Grid container spacing={2}>
              {images.map((imageObj, index) => (
                <Grid item xs={6} sm={4} md={3} key={`img-${index}`}>
                  <Card 
                    className="image-card"
                    onClick={() => handleShowModal(imageObj.image, imageObj.description)}
                  >
                    <Box className="image-card-overlay">
                      <PhotoLibraryIcon className="zoom-icon" />
                    </Box>
                    <CardMedia
                      component="img"
                      height="160"
                      image={imageObj.image}
                      alt={`JNTUGV ${index + 1}`}
                      className="grid-image"
                      loading="lazy"
                    />
                    <CardContent className="image-card-content">
                      <Typography variant="body2" className="image-description">
                        {imageObj.description || `Photo ${index + 1}`}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Archived Carousel Images */}
          {carouselArchives.length > 0 && (
            <Box className="archives-section">
              <Typography variant="h5" className="section-title archive-title">
                <PhotoLibraryIcon className="archive-icon" />
                Archived Carousel Images
              </Typography>
              {carouselArchives.map((group, groupIndex) => (
                <Box key={`group-${groupIndex}`} className="archive-group">
                  <Box className="archive-header">
                    <Typography variant="h6" className="archive-month">
                      {group.monthYear}
                    </Typography>
                    <Chip 
                      label={`${group.images.length} photos`} 
                      size="small"
                      className="archive-chip"
                    />
                  </Box>
                  <Grid container spacing={2}>
                    {group.images.map((imageObj, index) => (
                      <Grid item xs={6} sm={4} md={3} key={`carousel-${groupIndex}-${index}`}>
                        <Card 
                          className="image-card"
                          onClick={() => handleShowModal(imageObj.image, imageObj.description)}
                        >
                          <CardMedia
                            component="img"
                            height="140"
                            image={imageObj.image}
                            alt={`Archived ${group.monthYear} ${index + 1}`}
                            loading="lazy"
                            className="grid-image"
                          />
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              ))}
            </Box>
          )}
        </>
      )}

      <ImageModal
        show={showModal}
        handleClose={handleCloseModal}
        imageSrc={selectedImage}
        imageDescription={selectedDescription}
      />
    </Box>
  );
}

export default CompleteGallery;
