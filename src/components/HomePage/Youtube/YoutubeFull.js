import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Grid,
  IconButton,
  Container,
  AppBar,
  Toolbar,
  Button,
  Tabs,
  Tab
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import './Youtube.css';

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

function YoutubeFull() {
  return (
    <Box className="youtube-full-container">
      <AppBar position="static" className="youtube-appbar">
        <Toolbar>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none', marginRight: 'auto' }}>
            <Button startIcon={<ArrowBackIcon />}>
              Back to Home
            </Button>
          </Link>
          <Typography variant="h6" className="youtube-appbar-title">
            <YouTubeIcon className="youtube-header-icon" />
            JNTUGV Videos
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Typography variant="h4" className="youtube-full-title" sx={{ mt: 4, mb: 3 }}>
          Complete Video Gallery ({videos.length} Videos)
        </Typography>

        <Grid container spacing={3}>
          {videos.map((video, index) => (
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
                    <div className="play-button">
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
                  <Typography variant="body2" color="text.secondary">
                    Click to watch on YouTube
                  </Typography>
                </CardContent>
                
                <Button
                  component="a"
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
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
      </Container>
    </Box>
  );
}

export default YoutubeFull;

