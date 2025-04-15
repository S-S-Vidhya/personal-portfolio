import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import profilePicture from '../assets/home1.png';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';

const Home = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: { xs: 2, md: 0 },
          animation: 'fadeIn 1s',
          marginTop: { xs: 8, sm: 8, md: 0 }
        }}
      >
        <Grid container spacing={2} sx={{ width: '100%', maxWidth: 1200 }}>
          <Grid item xs={12} md={7} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <Box
              sx={{
                padding: { xs: 2, sm: 4, md: 6, lg: 8 },
                textAlign: { xs: 'center', md: 'start' },
                animation: 'slideInLeft 1s'
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: '#7303c0',
                  fontSize: { xs: '28px', sm: '36px', md: '48px' },
                  fontWeight: 'bold',
                  marginBottom: 2,
                }}
              >
                <span style={{ color: 'black', fontWeight: 600 }}>I'm</span> Vidhya
              </Typography>
              <Typography
                sx={{
                  color: 'black',
                  fontSize: { xs: '18px', sm: '22px', md: '24px' },
                  fontWeight: 900,
                  marginBottom: 3,
                }}
              >
                A Passionate&nbsp;
                <span style={{ color: "#7303c0", fontSize: { xs: '22px', md: '28px' }, fontWeight: '600' }}>
                  <Typewriter
                    words={["Frontend Developer", "Reactjs Developer"]}
                    cursor
                    cursorStyle='|'
                    loop
                    typeSpeed={50}
                    deleteSpeed={50}
                    delay={1000}
                  />
                </span>
              </Typography>
              <Typography
                sx={{
                  color: 'black',
                  fontSize: { xs: '14px', sm: '16px' },
                  fontWeight: 400,
                  marginBottom: 4,
                  lineHeight: 1.6
                }}
              >
                A frontend developer with a passion for creating innovative and user-friendly web applications. Let's connect and explore how I can help you bring your ideas to life!
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  flexWrap: 'wrap',
                  gap: 2,
                  marginTop: 3,
                }}
              >
                <Button
                  variant="contained"
                  component={Link}
                  to='/about'
                  sx={{
                    backgroundColor: '#7303c0',
                    color: '#ffffff',
                    padding: { xs: '8px 16px', sm: '10px 20px' },
                    fontSize: 16,
                    borderRadius: 5,
                    '&:hover': {
                      backgroundColor: '#5c1ea5',
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  About me
                </Button>
                <Button
                  variant="outlined"
                  href='/resume.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  sx={{
                    color: '#7303c0',
                    borderColor: '#7303c0',
                    padding: { xs: '8px 16px', sm: '10px 20px' },
                    fontSize: 16,
                    borderRadius: 5,
                    '&:hover': {
                      color: '#5c1ea5',
                      borderColor: '#5c1ea5',
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  View my Resume
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ padding: { xs: 2, md: 4 }, display: 'flex', justifyContent: 'center' }}>
              <img
                src={profilePicture}
                alt="Profile"
                style={{
                  borderRadius: 10,
                  maxWidth: '100%',
                  height: 'auto',
                  maxHeight: '700px',
                  animation: 'scaleIn 1s',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;