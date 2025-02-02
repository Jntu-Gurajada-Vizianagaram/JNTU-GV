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
          <iframe width="560" height="315" src="https://www.youtube.com/embed/qMmk5l2kjeE?si=MdR76d27y7OIkcO6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> </div>
        </Grid>

        {/* Second YouTube Live Video */}
        <Grid item xs={12} sm={6}>
          <div className="youtube-video">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/4HOC6P8N28Q?si=X9TOjU5v3G4tZbdZ"
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
