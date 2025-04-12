import React from 'react';
import { Box, Typography, Button, Grid} from '@mui/material';
import { Link } from 'react-router-dom';
import profilePicture from '../assets/home1.png';
import {Typewriter} from 'react-simple-typewriter'
import './Home.css'
import About from './About';
import Contact from './Contact'
import Projects from './Projects';

const Home = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        animation: 'fadeIn 1s',
        marginTop:105
        
      }}
    >
      <Grid container spacing={2} sx={{ width: '100%', height: '100%',marginTop:55 }}>
        <Grid item xs={12} md={8} sx={{ display: 'flex', justifyContent: 'start'}}>
          <Box
            sx={{
              padding: 20,
              textAlign: 'start',
              animation: 'slideInLeft 1s',
              width:'80%'
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: '#7303c0',
                fontSize: { xs: '30px', sm: '40px', md: '50px' },
                fontWeight: 'bold',
                marginBottom: 2,
                animation: 'fadeIn 1s',
              }}
            >
              <span style={{ color: 'black',fontWeight:600,fontSize:'30px' }}>I'm</span> Vidhya
            </Typography>
            <Typography
              sx={{
                color: 'black',
                fontSize: { xs: '20px', sm: '25px' },
                fontWeight: 900,
                marginBottom: 3,
                animation: 'fadeIn 1s',
                animationDelay: '0.5s',
              }}
            >
               A Passionate&nbsp;<span style={{color:"#7303c0",fontSize:'30px',fontWeight:'600'}}>
                <Typewriter
                 words ={["Frontend Developer", "Web Developer"]}
                 cursor 
                 cursorstyle ='|'
                 loop
                 typeSpeed = {50}
                 deleteSpeed = {50}
                 delay={1000}
                /></span>
            </Typography>
            <Typography
              sx={{
                color: 'black',
                fontSize: { xs: '14px', sm: '16px' },
                fontWeight: 400,
                marginBottom: 4,
                animation: 'fadeIn 1s',
                animationDelay: '0.5s',
              }}
            >
             A frontend developer with a passion for creating innovative and user-friendly web applications. Let's connect and explore how I can help you bring your ideas to life!
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                marginTop: 3,
                animation: 'fadeIn 1s',
                animationDelay: '1s',
              }}
            >
              <Button
                variant="contained"
                component={Link}o='/about'
                sx={{
                  backgroundColor: '#7303c0',
                  color: '#ffffff',
                  padding: { xs: '8px 16px', sm: '10px 20px' },
                  fontSize: 16,
                  borderRadius: 5,
                  '&:hover': {
                    backgroundColor: '#5c1ea5',
                    transform: 'scale(1.1)',
                    transition: 'all 0.3s ease-in-out',
                    animation: 'glitter 2s infinite',
                  },
                }}
              >
                About me
              </Button>
              <Button
                variant="outlined"
               href = '/resume.pdf'
               target ='_blank'
               rel='noopener noreferrer'
                sx={{
                  color: '#7303c0',
                  borderColor: '#7303c0',
                  padding: { xs: '8px 16px', sm: '10px 20px' },
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
              View my Resume
               </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'start',alignItems:'center' }}>
          <img 
            src={profilePicture}
            alt="Profile Picture"
            style={{
              borderRadius: 10,
              maxWidth: '100%',
              height: 'auto',
              animation: 'scaleIn 1s',
              transition: 'all 0.3s ease-in-out'
            }}

          />
        </Grid>
      </Grid>
      <About/>
      <Projects/>
      <Contact/>
    </Box>
  );
};

export default Home;
