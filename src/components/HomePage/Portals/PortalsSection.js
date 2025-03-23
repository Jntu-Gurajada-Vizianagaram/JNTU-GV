import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const websiteData = [
  {
    "id": 1,
    "title": "Directorate of Academic Audit Cell",
    "image": "DAA.jpg",
    "link": "https://daa.jntugv.edu.in/"
  },
  {
    "id": 2,
    "title": "Directorate of Academic Planning",
    "image": "DAP.jpg",
    "link": "https://dap.jntugv.edu.in/"
  },
  {
    "id": 3,
    "title": "Directorate of Industrial Relations and Placements",
    "image": "DIRP.jpg",
    "link": "https://dirp.jntugv.edu.in/"
  },
  {
    "id": 4,
    "title": "Directorate Research & Development",
    "image": "DRD.jpg",
    "link": "https://drd.jntugv.edu.in/"
  },
  {
    "id": 5,
    "title": "National Service Scheme",
    "image": "NSS.jpg",
    "link": "https://nss.jntugv.edu.in/"
  },
  {
    "id": 6,
    "title": "Digital Monitoring Cell",
    "image": "DMC.jpg",
    "link": "https://dmc.jntugv.edu.in/"
  },
  {
    "id": 7,
    "title": "Internal Quality Assurance Cell",
    "image": "IQAC.jpg",
    "link": "https://iqac.jntugv.edu.in/"
  },
  {
    "id": 8,
    "title": "Placements Cell",
    "image": "PLACEMENTS.jpg",
    "link": "https://placementcell.jntugv.edu.in/"
  },
  {
    "id": 9,
    "title": "JNTUGV Examination Results",
    "image": "RESULTS.jpg",
    "link": "https://exams.jntugv.edu.in/results"
  },
];

const Portals = () => {
  return (
    <Container>
      <h1 className='heading'>Website Portals</h1>
      <CardGrid>
        {websiteData.map((website) => (
          <Card
            key={website.id}
            title={website.title}
            image={require(`../../../assets/Portals/${website.image}`)} // Adjust the path as needed
            link={website.link}
          />
        ))}
      </CardGrid>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  text-align: center;

  .heading {
    font-family: "Inter", sans-serif;
  display: flex;
  justify-content: center;
  color: #2e0669;
  margin-top: 30px;
  font-weight: 600; /* Optional: Adjust font size */
    margin-bottom: 20px; /* Optional: Add margin below the heading */
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 cards per row on larger devices */
  gap: 20px;
  padding: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr); /* 4 cards per row on medium devices */
  }

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr); /* 2 cards per row on tablets */
  }
`;

export default Portals;