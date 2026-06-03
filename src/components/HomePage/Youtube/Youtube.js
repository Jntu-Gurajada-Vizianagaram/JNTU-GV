import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Dialog,
  DialogContent,
  Box,
  Button,
  Grid,
  IconButton
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CloseIcon from '@mui/icons-material/Close';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Youtube.css';
import videos from './youtube_vedios.json';

const publisherLogos = {
  'E-TV Andhra Pradesh': 'https://logodix.com/logo/2167692.jpg',
  'JNTU-GV': 'http://jntugv.edu.in/static/media/jntugvcev.b33bb43b07b2037ab043.jpg'
};

const getPublisherInitials = (publisher) =>
  publisher
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 3);

const getPublisherLogo = (publisher) => publisherLogos[publisher] || null;

const getYoutubeWatchUrl = (videoId) => `https://www.youtube.com/watch?v=${videoId}`;

const getYoutubeEmbedUrl = (videoId) => {
  const origin = typeof window !== 'undefined' ? encodeURIComponent(window.location.origin) : '';
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1${origin ? `&origin=${origin}` : ''}`;
};

const YouTubeCarousel = () => {
  const [open, setOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [iframeError, setIframeError] = useState(false);
  const [showAll] = useState(false);

  const activeVideoData = activeVideo ? videos.find((video) => video.id === activeVideo) : null;

  // Show first 3 latest videos initially
  const visibleVideos = showAll ? videos : videos.slice(0, 3);

  const handleOpen = (videoId) => {
    setActiveVideo(videoId);
    setIframeError(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveVideo(null);
    setIframeError(false);
  };

  // const handleViewAllClick = () => {
  //   if (!showAll) {
  //     setShowAll(true);
  //     // Scroll to videos section
  //     setTimeout(() => {
  //       document.getElementById('youtube-videos-section')?.scrollIntoView({ 
  //         behavior: 'smooth',
  //         block: 'start'
  //       });
  //     }, 100);
  //   }
  // };

  // const toggleShowAll = () => {
  //   setShowAll(!showAll);
  // };

  return (
    <Box className="youtube-section">
      {/* Header - Two Columns: Logo+Title Center | Button Right */}
      <div className="youtube-header">
        {/* Center: Logo and Title together */}
        <div className="youtube-center-wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube"
            className="youtube-logo"
          />
          <Typography variant="h5" className="youtube-title">
            Latest Videos
          </Typography>
        </div>
        
        {/* Right: View All Button */}
        <div className="youtube-button-wrapper">
          {videos.length > 3 && !showAll && (
            <div className="view-all-button">
              <Button 
                variant="contained" 
                onClick={() => window.location.href = '/youtube-full'}
                startIcon={<YouTubeIcon />}
              >

                View All ({videos.length})
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Video Grid */}
      <Grid container spacing={3} className="video-grid" id="youtube-videos-section">
        {visibleVideos.map((video, index) => (
          <Grid item xs={12} sm={6} md={4} key={video.id}>
            <Card 
              className="video-card" 
              onClick={() => handleOpen(video.id)}
            >
              {/* Thumbnail with Play Overlay */}
              <div className="thumbnail-wrapper">
                <CardMedia
                  component="img"
                  height="220"
                  image={`https://img.youtube.com/vi/${video.id}/0.jpg`}
                  alt={video.title}
                  className="video-thumbnail"
                />
                <div className="play-overlay">
                  <div className="play-button">
                    <PlayArrowIcon className="play-icon" />
                  </div>
                </div>
                {/* Publisher Badge */}
                <div className="publisher-badge" title={`Publisher: ${video.publisher}`}>
                  {getPublisherLogo(video.publisher) ? (
                    <img
                      src={getPublisherLogo(video.publisher)}
                      alt={video.publisher}
                    />
                  ) : (
                    <span>{getPublisherInitials(video.publisher)}</span>
                  )}
                </div>
              </div>
              
              <CardContent className="video-content">
                <Typography 
                  variant="h6" 
                  className="video-title"
                  component="div"
                >
                  {video.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  className="video-description"
                  color="text.secondary"
                >
                  Click to watch video
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>


      {/* Video Dialog */}
      <Dialog 
        open={open} 
        onClose={handleClose} 
        maxWidth="md" 
        fullWidth
        className="video-dialog"
      >
        <DialogContent className="dialog-content">
          <IconButton 
            className="close-button"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          {activeVideoData && (
            <>
              {!activeVideoData.embedBlocked && !iframeError ? (
                <Box
                  component="iframe"
                  width="100%"
                  height="60vh"
                  src={getYoutubeEmbedUrl(activeVideoData.id)}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  onError={() => setIframeError(true)}
                />
              ) : (
                <Box className="embed-blocked-message">
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    This video cannot be embedded on this site due to publisher restrictions or playback configuration.
                    Please open it directly on YouTube.
                  </Typography>
                </Box>
              )}
              <Button
                component="a"
                href={getYoutubeWatchUrl(activeVideoData.id)}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                fullWidth
                className="watch-on-youtube-button"
                sx={{ mt: 2 }}
              >
                Watch on YouTube
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default YouTubeCarousel;
