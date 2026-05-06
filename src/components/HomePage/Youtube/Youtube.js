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

// Videos ordered by latest first (2025 → 2024)
const videos = [
  {
    id: 'nZrDBmIszLI',
    title: 'JNTUGV- CEV - Annual & Sports Day Celebrations 2025 - Part 1'
  },
  {
    id: 'o6Fku5fkDmw',
    title: 'JNTU-GV Campus Tour 2026'
  },
  {
    id: 'hRNQfUUPV5c',
    title: 'JNTU-GV CEV Annual Day Event 2024 (Part 3) 04-04-2025'
  },
  {
    id: 'mCINzWh3AF4',
    title: 'JNTU-GV CEV Annual Day Event 2024 (Part 2) 04-04-2025'
  },
  {
    id: '9o75Bv05MJs',
    title: 'JNTU-GV CEV Annual Day Event 2024 (Part 1) 04-04-2025'
  },
  {
    id: 'NVZ9koF6pFY',
    title: 'JNTU-GV CEV Autonomous Sports Day 2024 (Part 1)'
  },
  {
    id: '_5WjFlrbrZU',
    title: 'JNTU-GV CEV Autonomous Sports Day 2024 (Part 2)'
  },
  {
    id: 'fxgVpqB43yE',
    title: 'Motivational Session by Sri VV Lakshmi Narayana (JD) CBI X (JD)'
  },
  {
    id: 'jxxqEBetGZQ',
    title: 'JNTU-GV Theme Song'
  },
  {
    id: 'qMmk5l2kjeE',
    title: "Hon'ble Vice-Chancellor's (i/c) Speech on Republic Day (JNTUGV)"
  },
  {
    id: '4HOC6P8N28Q',
    title: 'Jawaharlal Nehru Technological University - Gurajada Vizianagaram Drone View'
  }
];

const YouTubeCarousel = () => {
  const [open, setOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Show first 3 latest videos initially
  const visibleVideos = showAll ? videos : videos.slice(0, 3);

  const handleOpen = (videoId) => {
    setActiveVideo(videoId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveVideo(null);
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
                {/* YouTube Icon Badge */}
                <div className="youtube-badge">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" 
                    alt="YouTube"
                  />
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
          {activeVideo && (
            <Box
              component="iframe"
              width="100%"
              height="60vh"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default YouTubeCarousel;
