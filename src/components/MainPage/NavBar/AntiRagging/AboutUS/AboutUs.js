import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import ragging from "../../../../../assets/StyleImages/ragging.jpg";
import './AboutUs.css';

const AboutUs = () => {
  const content = {
    image: ragging,
    sections: [
      {
        title: "What is Ragging?",
        text: "Ragging is any act that causes physical or psychological harm or apprehension to a student. It includes teasing, abusing, playing practical jokes, or causing hurt to a student. Ragging is a criminal offense and is strictly prohibited in educational institutions."
      },
      {
        title: "Preventive Measures",
        text: "Educational institutions take various measures to prevent ragging, such as forming anti-ragging committees, conducting awareness programs, and ensuring the strict implementation of anti-ragging laws. Students and faculty are encouraged to report any incidents of ragging immediately. Counseling services are also available for victims."
      },
      {
        title: "Anti-Ragging Act",
        text: "The Anti-Ragging Act provides a comprehensive legal framework to address the issue of ragging in educational institutions. It outlines the responsibilities of institutions, punishments for offenders, and protection for victims. Institutions must file an FIR with the police in case of a severe ragging incident."
      },
      {
        title: "Punishments for Ragging",
        text: "Punishments for ragging can range from suspension and expulsion from the institution to imprisonment and fines. The severity of the punishment depends on the nature and extent of the ragging incident. In some cases, students may also face cancellation of admission and disqualification from future admissions."
      },
      {
        title: "How to Report Ragging?",
        text: "Students can report ragging incidents to the anti-ragging committee, helplines, or through online portals provided by the institution. Anonymity of the complainant is maintained, and strict actions are taken against the culprits. Institutions are also required to provide immediate support and protection to the victims."
      }
    ]
  };

  return (
    <Container className="about-us-container">
      <Card className="about-us-card">
        <CardMedia
          component="img"
          image={content.image}
          alt="Anti-Ragging"
          className="about-us-image"
        />
        <CardContent>
          <Typography variant="h4" component="div" align="center" gutterBottom className="about-us-title">
            About Ragging
          </Typography>
          <Grid container spacing={4}>
            {content.sections.map((section, index) => (
              <Grid item xs={12} key={index} className="about-us-section">
                <Typography variant="h5" component="div" gutterBottom className="about-us-section-title">
                  {section.title}
                </Typography>
                <Typography variant="body1" component="div" className="about-us-section-text">
                  {section.text}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AboutUs;
