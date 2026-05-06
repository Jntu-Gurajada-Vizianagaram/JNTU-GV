import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ImageModal from "../HomePage/NewsAndEvents/ImageModal";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  CircularProgress,
  Chip,
  Tabs,
  Tab
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import './CompleteGallery.css';

// Static event categories - now using local assets in src/assets/Gallery/
const eventCategories = [
  { key: 'ityuktha-2k24', label: 'Ityuktha 2K24', color: '#e91e63' },
  { key: 'eclectique-2k24', label: 'Eclectique 2K24', color: '#9c27b0' },
  { key: 'womens-day', label: "Women's Day", color: '#e91e63' },
  { key: 'eisen-2k24', label: 'Eisen 2K24', color: '#ff5722' },
  { key: 'cresense-2k24', label: 'Cresense 2K24', color: '#3f51b5' },
  { key: 'republic-day', label: 'Republic Day', color: '#009688' }
];

function CompleteGallery() {
  const [allImages, setAllImages] = useState([]);
  const [carouselArchives, setCarouselArchives] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('events');

  const [eventPhotoCounts, setEventPhotoCounts] = useState({});
  const [eventPhotoImagesByCategory, setEventPhotoImagesByCategory] = useState({});

  // Fetch gallery images, carousel archives, and event photos for the Events Gallery cards
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [galleryResponse, carouselResponse, eventPhotosResponse] = await Promise.all([
          fetch("https://api.jntugv.edu.in/api/gallery/all-gallery-images"),
          fetch("https://api.jntugv.edu.in/api/webadmin/carousel-images"),
        ]);

        const galleryData = await galleryResponse.json();
        const carouselData = await carouselResponse.json();

        // Gallery images
        const galleryImages = (Array.isArray(galleryData) ? galleryData : []).map((photo, index) => ({
          id: `gallery-${index}`,
          image: photo.imagelink || photo.image_link || photo.image || photo.imagelink_url || photo.imglink,
          description: photo.description || 'JNTUGV Gallery Photo'
        }));

        // Carousel archives (older images)
        const sortedCarousel = (Array.isArray(carouselData) ? carouselData : []).slice().sort((a, b) => new Date(b.date) - new Date(a.date));
        const archives = sortedCarousel.slice(5).map((photo, index) => ({
          id: photo.id ,
          image: photo.imglink,
          description: photo.description,
          date: photo.date
        }));

        // Event photos for the Events Gallery section
        // NOTE: we are not fetching Events API here (eventApiData is undefined in this component).
        // Keeping this section disabled for now.
        const eventsFromApi = [];

        // Map API events to our category keys (best-effort using common fields)
        // We support multiple possible naming: key/name/file_link/category/name_slug
        const toKey = (value) => (typeof value === 'string' ? value.trim().toLowerCase() : '');

        const categoryKeyByEvent = (ev) => {
          const candidates = [
            ev?.file_link,
            ev?.fileLink,
            ev?.category_key,
            ev?.categoryKey,
            ev?.category,
            ev?.name,
            ev?.event_name,
            ev?.eventName,
            ev?.event_slug,
            ev?.eventSlug,
            ev?.slug,
            ev?.description
          ];
          const joined = candidates.map(toKey).filter(Boolean).join(' ');

          // API returns event_name like: Republic Day, Inauguration Event, ITYUKTA2K24, ECLECTIQUE2K24 etc.
          // Existing routes use keys like: republic-day, inauguration-event, itiyuktha-2k24, eclectique-2k24, etc.
          // Map by substring match against category.label and a couple of known aliases.
          const found = eventCategories.find((c) => {
            const label = toKey(c.label);
            const key = toKey(c.key);
            // direct key match often won't work because API uses event_name, not slugs.
            return joined.includes(label) || joined.includes(key) || joined.replace(/\s+/g, '-').includes(key);
          });

          return found?.key;
        };

        const imagesByCategory = {};
        const countsByCategory = {};
        for (const ev of eventsFromApi) {
          const catKey = categoryKeyByEvent(ev);
          if (!catKey) continue;

          const img = ev?.imagelink || ev?.image_link || ev?.image || ev?.imagelink_url;
          if (!img) continue;

          if (!imagesByCategory[catKey]) imagesByCategory[catKey] = [];
          imagesByCategory[catKey].push(img);
        }

        for (const cat of eventCategories) {
          const imgs = imagesByCategory[cat.key] || [];
          countsByCategory[cat.key] = imgs.length;
        }

        setEventPhotoImagesByCategory(imagesByCategory);
        setEventPhotoCounts(countsByCategory);
        setAllImages(galleryImages);
        setCarouselArchives(archives);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
    <Box className="complete-gallery-container">
      <Typography variant="h4" className="gallery-main-heading">
        <PhotoLibraryIcon className="heading-icon" />
        Gallery of JNTUGV
      </Typography>

      <Link to="/" className="back-to-home">
        <ArrowBackIcon />
        Back to Homepage
      </Link>

      <Tabs 
        value={activeTab} 
        onChange={(e, newValue) => setActiveTab(newValue)}
        className="gallery-tabs"
        centered
      >
        {/* <Tab label="Events Gallery" value="events" /> */}
        <Tab label="Photo Gallery" value="gallery" />
        <Tab label="Archives" value="archives" />
      </Tabs>

      {loading ? (
        <Box className="loading-wrapper">
          <CircularProgress style={{ color: "#340468" }} />
        </Box>
      ) : (
        <>

          {activeTab === 'gallery' && (
            <Box className="images-section">
              <Typography variant="h5" className="section-title">
                Photo Gallery ({allImages.length} photos)
              </Typography>
              <Grid container spacing={2}>
                {allImages.map((imageObj, index) => (
                  <Grid item xs={6} sm={4} md={3} lg={3} key={imageObj.id}>
                    <Card 
                      className="image-card"
                      onClick={() => handleShowModal(imageObj.image, imageObj.description)}
                    >
                      <Box className="image-card-overlay">
                        <PhotoLibraryIcon className="zoom-icon" />
                      </Box>
                      <CardMedia
                        component="img"
                        height="200"
                        image={imageObj.image}
                        alt={imageObj.description}
                        className="grid-image"
                        loading="lazy"
                        style={{objectFit: 'cover'}}
                      />
                      <CardContent className="image-card-content">
                        <Typography variant="body2" className="image-description">
                          {imageObj.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {activeTab === 'archives' && carouselArchives.length > 0 && (
            <Box className="archives-section">
              <Typography variant="h5" className="section-title archive-title">
                <PhotoLibraryIcon className="archive-icon" />
                Carousel Archives ({carouselArchives.length})
              </Typography>
              <Grid container spacing={2}>
                {carouselArchives.map((imageObj, index) => (
                  <Grid item xs={6} sm={4} md={3} lg={3} key={imageObj.id}>
                    <Card 
                      className="image-card"
                      onClick={() => handleShowModal(imageObj.image, imageObj.image)}
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        image={imageObj.image}
                        alt={imageObj.description}
                        className="grid-image"
                        loading="lazy"
                      />
                    </Card>
                  </Grid>
                ))}
              </Grid>
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

