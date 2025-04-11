import React from 'react';
import { Box, Typography, Container, Grid, Card, CardMedia, CardContent } from '@mui/material';
import './Projects.css'; 
import smart from '../assets/vote.jpg'
import echo from '../assets/echo.jpg'
import bloom from '../assets/bloom.png'

const Projects = () => {
  return (
    <Box  sx={{ backgroundColor: 'white', padding: '20px' ,mb:5 }}>
      <Container maxWidth="lg">
        <Typography sx={{ mt:3,color: '#7303c0', textAlign: 'center', fontWeight: 700, fontSize: '35px',animation: 'fadeIn 2s' }}>
          My Projects
        </Typography>
        <Grid container spacing={4} sx={{ mt:5,animation: 'fadeIn 2s' ,display:'flex',justifyContent:'center',ml:0.5}}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%',width:'85%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                image={smart}
                alt="Project Image"
                sx={{ height: 300 }}
                 className="card-media"
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography sx={{mt:2, color: '#7303c0' , fontSize:'18px',fontWeight:500 }}>
                  Smart Voting System
                </Typography>
                <Typography sx={{ color: 'black',fontSize:'15px' }}>
                  A project focused on enhancing the voting process using modern web technologies.
                  Technologies: HTML, CSS, JS, Python, MySQL
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', width:'85%',display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                image={echo}
                alt="Project Image"
                sx={{ height: 300 }}
                 className="card-media"
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography  sx={{ mt:2,color: '#7303c0' , fontSize:'18px',fontWeight:500 }}>
                  Echo - Responsive Web Application
                </Typography>
                <Typography sx={{ color: 'black',fontSize:'15px'  }}>
                  Developed a responsive web application using HTML, CSS, and Bootstrap.
                  Technologies: HTML, CSS, Bootstrap
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', width:'85%',display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                image={bloom}
                alt="Project Image"
                sx={{ height: 300 }}
                 className="card-media"
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography  sx={{ mt:2,color: '#7303c0' , fontSize:'18px',fontWeight:500 }}>
                 Bloom
                </Typography>
                <Typography sx={{ color: 'black',fontSize:'15px'  }}>
                A fully functional e-commerce website for online shopping.
                Technologies:HTML, React and MUI
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;