import React from 'react';
import { Box, Typography, Container, Grid, Card, CardMedia, CardContent} from '@mui/material';
import './Projects.css'; 
import smart from '../assets/vote.jpg'
import echo from '../assets/echo.jpg'
import ecommerce from '../assets/ecommerce webiste img.jpg'

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
                  Echo (UI Clone)
                </Typography>
                <Typography sx={{ color: 'black',fontSize:'15px'  }}>
                Echo UI is a responsive website clone created using HTML, CSS, and Bootstrap, 
                replicating the layout and design of the original Echo landing page for practice and learning purposes.
                </Typography>
                <a href="https://github.com/S-S-Vidhya/personal-portfolio" target="_blank" rel="noopener noreferrer">
                 View on GitHub
                </a>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', width:'85%',display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                image={ecommerce}
                alt="Project Image"
                sx={{ height: 300 }}
                 className="card-media"
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography  sx={{ mt:2,color: '#7303c0' , fontSize:'18px',fontWeight:500 }}>
                 Elite Spark-Ecommerce Website
                </Typography>
                <Typography sx={{ color: 'black',fontSize:'15px'  }}>
                Elite Spark is a stylish e-commerce website built to showcase and sell products online
                with features like product listings, filters, wishlist, and cart functionality using React and MUI.
                </Typography>
                <a href="https://github.com/S-S-Vidhya/E-Commerce-website" target="_blank" rel="noopener noreferrer">
                 View on GitHub
                </a>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;