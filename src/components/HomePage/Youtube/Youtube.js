import React from 'react';
import './Youtube.css'; // Import the CSS file
import { Container, Grid } from '@mui/material'; // Using Material-UI components

const Youtube = () => {
  return (
    <Container className="youtube-container">
      <Grid container spacing={4} justifyContent="center">
        {/* First YouTube Live Video */}
        <Grid item xs={12} sm={6}>
          <div className="youtube-video">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/R5cmL_FsdP0"
              title="YouTube live video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Grid>

        {/* Second YouTube Live Video */}
        <Grid item xs={12} sm={6}>
          <div className="youtube-video">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/FGI9jT37RoA?si=-eDzkmzD-QYt9JXL"
              title="YouTube live video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Youtube;
