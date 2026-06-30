import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, useMediaQuery } from '@mui/material';
import ragging from "../../../../assets/StyleImages/ragging.jpg";
import './Antiragging.css';

const AntiRaggingContent = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:900px)');

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

  const committee = {
    "members": [
      {
        "Sno": 1,
        "name": "Dr. G. Jaya Suma",
        "designation": "Professor of I.T. and Director of A.A.P",
        "role": "Chairperson",
        "email": "daap@jntugv.edu.in"
      },
      {
        "Sno": 2,
        "name": "Dr. K.C.B. Rao",
        "designation": "Processor of E.C.E and Principal of JNTU-GV College of Engineering, Vizianagaram",
        "role": "Convener",
        "email": "principal@jntugvcev.edu.in"
      },
      {
        "Sno": 3,
        "name": "Dr. R. Rajeswara Rao",
        "designation": "Professor of C.S.E ",
        "role": "Member",
        "email": "raob4u@jntugvcev.edu.in"
      },
      {
        "Sno": 4,
        "name": "Dr. G.J. Naga Raju",
        "designation": "Director of IR & P",
        "role": "Member",
        "email": "dirp@jntugv.edu.in"
      },
      {
        "Sno": 5,
        "name": "Dr. B. Nalini",
        "designation": "Women Empowerment and Grievance Cell [WE&GC] Co-Ordinator",
        "role": "Member",
        "email": "wegc@jntugv.edu.in"
      },
      {
        "Sno": 6,
        "name": "Dr. A.V. Papa Rao",
        "designation": "Sports Co-Ordinator",
        "role": "Member",
        "email": " sports.coordinator@jntugv.edu.in "
      }
    ]
  };

  const MobileCommitteeView = ({ members }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {members.map((member) => (
        <Card key={member.Sno} sx={{ padding: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', borderRadius: '8px', borderLeft: '4px solid #370a68' }}>
          <Typography variant="h6" sx={{ color: '#370a68', fontWeight: 700, mb: 1 }}>
            {member.name}
          </Typography>
          <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>
            <strong>Designation:</strong> {member.designation}
          </Typography>
          <Typography variant="body2" sx={{ color: '#666', mb: 1 }}>
            <strong>Role:</strong> <span className={`role-tag ${member.role.toLowerCase()}`}>{member.role}</span>
          </Typography>
          <Typography variant="body2">
            <strong>Email:</strong>{' '}
            <a href={`mailto:${member.email.trim()}`} className="antiragging-email-link">
              {member.email.trim()}
            </a>
          </Typography>
        </Card>
      ))}
    </div>
  );

  return (
    <Container className="antiragging-merged-container" maxWidth="lg">
      <Card className="antiragging-main-card">
        <CardMedia
          component="img"
          image={content.image}
          alt="Anti-Ragging Banner"
          className="antiragging-banner-image"
        />
        <CardContent sx={{ padding: isMobile ? '16px' : isTablet ? '20px' : '32px' }}>
          <Typography id="about" variant="h4" align="center" gutterBottom className="antiragging-title">
            About Anti-Ragging
          </Typography>

          <Grid container spacing={isMobile ? 2 : 3} className="antiragging-info-grid">
            {content.sections.map((section, index) => (
              <Grid item xs={12} key={index}>
                <Typography variant="h6" className="antiragging-section-title">
                  {section.title}
                </Typography>
                <Typography variant="body1" className="antiragging-section-text">
                  {section.text}
                </Typography>
              </Grid>
            ))}
          </Grid>

          <Typography id="committee" variant="h4" align="center" className="antiragging-table-title" style={{ marginTop: '40px', marginBottom: '24px' }}>
            Anti-Ragging Committee Members
          </Typography>

          {isMobile ? (
            <MobileCommitteeView members={committee.members} />
          ) : (
            <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #eee', borderRadius: '12px', overflow: 'auto', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <Table stickyHeader size={isTablet ? "small" : "medium"}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ backgroundColor: '#370a68', color: 'white', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.8rem' }}>S.No</TableCell>
                    <TableCell sx={{ backgroundColor: '#370a68', color: 'white', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.8rem' }}>Name</TableCell>
                    <TableCell sx={{ backgroundColor: '#370a68', color: 'white', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.8rem' }}>Designation</TableCell>
                    <TableCell sx={{ backgroundColor: '#370a68', color: 'white', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.8rem' }}>Role</TableCell>
                    <TableCell align="center" sx={{ backgroundColor: '#370a68', color: 'white', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.8rem' }}>Email</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {committee.members.map((row) => (
                    <TableRow key={row.Sno} hover sx={{ '&:nth-child(even)': { backgroundColor: '#f9f9f9' } }}>
                      <TableCell align="center" sx={{ fontWeight: 'bold', color: '#666', fontSize: '0.9rem' }}>{row.Sno}</TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#333', fontSize: '0.9rem' }}>{row.name}</TableCell>
                      <TableCell sx={{ color: '#555', fontSize: '0.85rem' }}>{row.designation}</TableCell>
                      <TableCell sx={{ fontSize: '0.85rem' }}>
                        <span className={`role-tag ${row.role.toLowerCase()}`}>
                          {row.role}
                        </span>
                      </TableCell>
                      <TableCell align="center" sx={{ fontSize: '0.85rem' }}>
                        <a href={`mailto:${row.email.trim()}`} className="antiragging-email-link">
                          {row.email.trim()}
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default AntiRaggingContent;
