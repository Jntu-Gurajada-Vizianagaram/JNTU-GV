import React, { useState } from 'react';
import Slider from 'react-slick';
import './Youtube.css' 
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Dialog,
  DialogContent,
  Box
} from '@mui/material';

const videos = [
  {
    id: 'NVZ9koF6pFY',
    title: 'JNTU-GV CEV Autonomous Sports Day 2025 (Part 1)',
    
  },
  {
    id: '_5WjFlrbrZU',
    title: 'JNTU-GV CEV Autonomous Sports Day 2025 (Part 2)',
   
  },
  {
    id: 'hRNQfUUPV5c',
    title: 'JNTU-GV CEV Annual Day Event (Part 3)04-04-2025',

  },
  {
    id: 'mCINzWh3AF4',
    title: 'JNTU-GV CEV Annual Day Event (Part 2) 04-04-2025',
    
  },
  {
    id: '9o75Bv05MJs',
    title: 'JNTU-GV CEV Annual Day Event (Part 1) 04-04-2025',

  },
  {
    id: 'fxgVpqB43yE',
    title: 'Motivational Session by Sri VV Lakshmi Narayana (JD) CBI X (JD)',
  },
   {
    id: 'qMmk5l2kjeE',
    title: "Hon'ble Vice-Chancellor's (i/c) Speech on Republic Day (JNTUGV)",
  },
  {
    id: '4HOC6P8N28Q',
    title: "Jawaharlal Nehru Technological University - Gurajada Vizianagaram Drone View",
  },
];

const YouTubeCarousel = () => {
  const [open, setOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const handleOpen = (videoId) => {
    setActiveVideo(videoId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveVideo(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 960,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Box sx={{ px: 3, py: 5 }}>

<div className="youtube-logo-wrapper">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
    alt="YouTube"
    className="youtube-logo-banner"
  />
</div>


      <Slider {...settings}>
        {videos.map((video, index) => (
          <Box key={index} px={1}>
            <Card onClick={() => handleOpen(video.id)} sx={{ cursor: 'pointer', height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image={`https://img.youtube.com/vi/${video.id}/0.jpg`}
                alt={video.title}
              />
              <CardContent>
                <Typography variant="h6">{video.title}</Typography>
                <Typography variant="body2" color="text.secondary">  
                               
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent sx={{ p: 0 }}>
          {activeVideo && (
            <Box
              component="iframe"
              width="100%"
              height="60vh"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default YouTubeCarousel;
