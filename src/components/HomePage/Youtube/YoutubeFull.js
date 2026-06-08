import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Grid,
  Button,
  Dialog,
  DialogContent,
  IconButton,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CloseIcon from '@mui/icons-material/Close';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import './Youtube.css';
import videos from './youtube_vedios.json';

const getYoutubeEmbedUrl = (videoId) => {
  const origin = typeof window !== 'undefined' ? encodeURIComponent(window.location.origin) : '';
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1${origin ? `&origin=${origin}` : ''}`;
};

function YoutubeFull() {
  const [open, setOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [iframeError, setIframeError] = useState(false);

  const handleOpen = (video) => {
    setActiveVideo(video);
    setIframeError(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveVideo(null);
  };

  return (
    <Box className="youtube-full-container">
      <Box className="youtube-section youtube-full-width">
        <Box className="youtube-header">
          <div className="youtube-center-wrapper">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
              alt="YouTube"
              className="youtube-logo"
            />
            <Typography variant="h5" className="youtube-title">
              Complete Video Gallery
            </Typography>
          </div>

          <div className="youtube-button-wrapper">
            <Link
              to="/"
              className="view-all-button"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Button variant="contained" startIcon={<ArrowBackIcon />}>
                Back to Home
              </Button>
            </Link>
          </div>
        </Box>

        <Grid container spacing={3} className="video-grid" sx={{ mb: 2 }}>
          {videos.map((video) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={video.id}>
              <Card className="video-card video-card-full" sx={{ height: '100%' }}>
                <div className="thumbnail-wrapper">
                  <CardMedia
                    component="img"
                    height="280"
                    image={`https://img.youtube.com/vi/${video.id}/0.jpg`}
                    alt={video.title}
                    className="video-thumbnail-full"
                  />
                  <div className="play-overlay">
                    <div className="play-button" onClick={() => handleOpen(video)}>
                      <PlayArrowIcon className="play-icon" />
                    </div>
                  </div>
                  <div className="youtube-badge">
                    <YouTubeIcon />
                  </div>
                </div>

                <CardContent className="video-content">
                  <Typography variant="h6" className="video-title">
                    {video.title}
                  </Typography>
                  <Typography variant="body2" className="video-description" color="text.secondary">
                    Watch on YouTube
                  </Typography>
                </CardContent>

                <Button
                  onClick={() => handleOpen(video)}
                  fullWidth
                  variant="contained"
                  className="watch-button"
                >
                  Watch on YouTube
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth className="video-dialog">
        <DialogContent className="dialog-content">
          <IconButton className="close-button" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          {activeVideo && (
            !iframeError ? (
              <Box
                component="iframe"
                width="100%"
                height="60vh"
                src={getYoutubeEmbedUrl(activeVideo.id)}
                title={activeVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                onError={() => setIframeError(true)}
              />
            ) : (
              <Box className="embed-blocked-message">
                <Typography variant="body1" sx={{ mb: 2 }}>
                  This video cannot be embedded on this site due to playback configuration or publisher restrictions.
                  Please open it directly on YouTube.
                </Typography>
                <Button
                  component="a"
                  href={`https://www.youtube.com/watch?v=${activeVideo.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  fullWidth
                  className="watch-on-youtube-button"
                >
                  Watch on YouTube
                </Button>
              </Box>
            )
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}


export default YoutubeFull;

