import React from 'react';
import { Button, Box, Typography, Container, Grid } from '@mui/material';
import {Link} from 'react-router-dom'
import resume from '../assets/resume.pdf'
import profileImage from '../assets/profile.png';
import reactLogo from '../assets/react.png'
import htmlLogo from '../assets/html.png'
import cssLogo from '../assets/css1.png'
import javascriptLogo from '../assets/javascript.png'
import materialUILogo from '../assets/mui.png'
import bootstrapLogo from '../assets/bootstarp.png'
import './About.css'

const About = () => {
  return (
    <Box className="about-container" sx={{ backgroundColor: 'white', padding: '20px' }}>
      <Container maxWidth="md">
        <Box className="profile-section" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
          <Box className="profile-picture" sx={{ width: { xs: '100%', md: '50%' }, margin: '20px' ,height:"100%"}}>
            <img src={profileImage} alt="Profile" style={{ animation: 'scaleIn 1s' , animationDelay: '0.5s',width: '90%', borderRadius: '20%',height:'90%',marginRight:'50px',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }} />
          </Box>
          <Box className="profile-summary" sx={{ width: { xs: '100%', md: '70%' }, margin: '20px' }}>
            <Typography variant="h4" sx={{ color: '#7303c0', marginLeft:5, marginBottom: '10px',fontWeight:700 , fontSize:'35px' , animation: 'fadeInUp 1s ease-out forwards', animationDelay: '0.5s'}}>
              About Me
            </Typography>
            <Typography className="section-text" sx={{ fontSize: '15.3px',marginLeft:5, color: 'black',marginTop:4,fontWeight:300, animation: 'fadeInUp 1s ease-out forwards', animationDelay: '0.5s' }}>
              Hello! I’m Vidhya, a passionate Frontend Developer with a keen interest in building dynamic and user-friendly web applications. I have a Bachelor’s degree in Computer Applications (BCA)
              and have honed my skills through a Full Stack Development course at AK Info Park.
              I specialize in frontend technologies like HTML, CSS, JavaScript, React, MUI and Bootstrap. My Smart Voting System project highlights
              my ability to integrate secure authentication, database management, and interactive UI components.
              I consider myself a team player, always eager to learn and adapt to new challenges. Whether it’s
              developing innovative solutions or enhancing user experiences, I’m always excited to take on new opportunities
            </Typography>
            <Box sx={{ marginTop: '20px' ,marginBottom:10,animation: 'fadeInUp 1s ease-out forwards', animationDelay: '0.5s'}}>
              <Button
                variant="contained"
                href={resume}
                target='_blank'
                download="Vidhya_Resume.pdf" 
                sx={{
                  marginLeft:5,
                  padding: '10px 20px',
                  backgroundColor: '#7303c0',
                  color: '#ffffff',
                  fontSize:'16px',
                  borderRadius:5,
                 '&:hover': {
                    backgroundColor: '#5c1ea5',
                    transform: 'scale(1.1)',
                    transition: 'all 0.3s ease-in-out',
                    animation: 'glitter 2s infinite',
                  },
                 
                }}
              >
              Download CV
              </Button>
                <Button
                              variant="outlined"
                              component={Link}
                              to='/contact'
                              sx={{
                                color: '#7303c0',
                                borderColor: '#7303c0',
                                padding: '10px 20px',
                                fontSize: 16,
                                borderRadius: 5,
                                margin: '0 10px',
                               '&:hover': {
                    color: '#5c1ea5',
                    borderColor: '#5c1ea5',
                    transform: 'scale(1.1)',
                    transition: 'all 0.3s ease-in-out',
                    animation: 'glitter 2s infinite',
                  },
                              }}
                            >
                           Contact me
                             </Button>
                             </Box>

            </Box>
          </Box>
          <Box sx={{ mb: 5 }}>
          <Typography sx={{ color: '#7303c0', marginBottom: '20px', fontWeight: 700, fontSize: '35px', textAlign: 'center', animation: 'fadeInUp 1s ease-out forwards', animationDelay: '0.5s' }}>
            My Skills
          </Typography>
          <Grid container spacing={2} sx={{ marginTop: '20px' }}>
            <Grid item xs={12} sm={6} md={4} lg={2} sx={{ animation: 'fadeInUp 1s ease-out forwards', animationDelay: '0.5s' }}>
              <Box sx={{ textAlign: 'center' }}>
                <img src={reactLogo} alt="React Logo" style={{ width: 100, height: 100, borderRadius: 10 }} />
                <Typography variant="h6" sx={{ fontWeight: 400 }}>
                  React
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2} sx={{ animation: 'fadeInUp 1s ease-out forwards', animationDelay: '0.7s' }}>
              <Box sx={{ textAlign: 'center' }}>
                <img src={javascriptLogo} alt="JavaScript Logo" style={{ width: 100, height: 100, borderRadius: 10 }} />
                <Typography variant="h6" sx={{ fontWeight: 400 }}>
                  JavaScript
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2} sx={{ animation: 'fadeInUp 1s ease-out forwards', animationDelay: '0.9s' }}>
              <Box sx={{ textAlign: 'center' }}>
                <img src={htmlLogo} alt="HTML Logo" style={{ width: 150, height: 100, borderRadius: 10 }} />
                <Typography variant="h6" sx={{ ml: 2, fontWeight: 400 }}>
                  HTML
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2} sx={{ animation: 'fadeInUp 1s ease-out forwards', animationDelay: '1.1s' }}>
              <Box sx={{ textAlign: 'center' }}>
                <img src={cssLogo} alt="CSS Logo" style={{ width: 100, height: 100, borderRadius: 10 }} />
                <Typography variant="h6" sx={{ fontWeight: 400 }}>
                  CSS
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2} sx={{ animation: 'fadeInUp 1s ease-out forwards', animationDelay: '1.3s' }}>
              <Box sx={{ textAlign: 'center' }}>
                <img src={materialUILogo} alt="Material-UI Logo" style={{ width: 100, height: 100, borderRadius: 10 }} />
                <Typography variant="h6" sx={{ fontWeight: 400 }}>
                  Material-UI
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2} sx={{ animation: 'fadeInUp 1s ease-out forwards', animationDelay: '1.5s' }}>
              <Box sx={{ textAlign: 'center' }}>
                <img src={bootstrapLogo} alt="Bootstrap Logo" style={{ width: 100, height: 100, borderRadius: 10 }} />
                <Typography variant="h6" sx={{ fontWeight: 400 }}>
                  Bootstrap
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;